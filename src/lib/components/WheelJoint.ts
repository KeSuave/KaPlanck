import type { GameObj, KAPLAYCtx } from "kaplay";
import { type Vec2, WheelJoint, type WheelJointDef } from "planck";
import { getWorldFromGameObj } from "../utils";
import type { KPBodyComp } from "./Body";
import joint, { type KPJointComp } from "./Joint";
import type { KPPosComp } from "./Position";
import type { KPRotateComp } from "./Rotate";
import type { KPWorldComp } from "./World";

export interface KPWheelJointDef
  extends Omit<WheelJointDef, "bodyA" | "bodyB"> {
  draw?: boolean;
}

export interface KPWheelJointComp extends KPJointComp {
  /**
   * The WheelJoint
   *
   * @type {WheelJoint}
   */
  joint: WheelJoint;

  /**
   * Sets the state of the motor.
   *
   * @param {boolean} flag
   */
  enableMotor(flag: boolean): void;
  /**
   * Returns the joint's speed.
   *
   * @return {number}
   */
  getJointSpeed(): number;
  /**
   * Returns the joint's translation.
   *
   * @return {number}
   */
  getJointTranslation(): number;
  /**
   * Returns local anchor A.
   *
   * @return {Vec2}
   */
  getLocalAnchorA(): Vec2;
  /**
   * Returns local anchor B.
   *
   * @return {Vec2}
   */
  getLocalAnchorB(): Vec2;
  /**
   * Returns the local axis A.
   *
   * @return {Vec2}
   */
  getLocalAxisA(): Vec2;
  /**
   * Returns the maximum motor torque.
   *
   * @return {number}
   */
  getMaxMotorTorque(): number;
  /**
   * Returns the motor speed.
   *
   * @return {number}
   */
  getMotorSpeed(): number;
  /**
   * Returns the spring damping ratio.
   *
   * @return {number}
   */
  getSpringDampingRatio(): number;
  /**
   * Returns the spring frequency hertz.
   *
   * @return {number}
   */
  getSpringFrequencyHz(): number;
  /**
   * Returns true if the motor is enabled, false otherwise.
   *
   * @return {boolean}
   * @memberof KPWheelJointComp
   */
  isMotorEnabled(): boolean;
  /**
   * Sets the maximum motor torque.
   *
   * @param {number} torque
   */
  setMaxMotorTorque(torque: number): void;
  /**
   * Sets the motor speed.
   *
   * @param {number} speed
   */
  setMotorSpeed(speed: number): void;
  /**
   * Sets the spring damping ratio.
   *
   * @param {number} ratio
   */
  setSpringDampingRatio(ratio: number): void;
  /**
   * Sets the spring frequency hertz.
   *
   * @param {number} hz
   */
  setSpringFrequencyHz(hz: number): void;
}

type WheelJointCompThis = GameObj<KPWheelJointComp>;

export default function wheelJoint(
  k: KAPLAYCtx,
  def: KPWheelJointDef,
  gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  worldContainer?: GameObj<KPWorldComp>,
): KPWheelJointComp {
  let _joint: WheelJoint | null = null;

  return {
    ...joint(k, gameObjA, gameObjB, def.draw),

    id: "kpWheelJoint",

    get joint() {
      if (!_joint) {
        throw new Error("kpWheelJoint not initialized");
      }

      return _joint;
    },

    enableMotor(flag: boolean) {
      this.joint.enableMotor(flag);
    },
    getJointSpeed() {
      return this.joint.getJointSpeed();
    },
    getJointTranslation() {
      return this.joint.getJointTranslation();
    },
    getLocalAnchorA() {
      return this.joint.getLocalAnchorA();
    },
    getLocalAnchorB() {
      return this.joint.getLocalAnchorB();
    },
    getLocalAxisA() {
      return this.joint.getLocalAxisA();
    },
    getMaxMotorTorque() {
      return this.joint.getMaxMotorTorque();
    },
    getMotorSpeed() {
      return this.joint.getMotorSpeed();
    },
    getSpringDampingRatio() {
      return this.joint.getSpringDampingRatio();
    },
    getSpringFrequencyHz() {
      return this.joint.getSpringFrequencyHz();
    },
    isMotorEnabled() {
      return this.joint.isMotorEnabled();
    },
    setMaxMotorTorque(torque: number) {
      this.joint.setMaxMotorTorque(torque);
    },
    setMotorSpeed(speed: number) {
      this.joint.setMotorSpeed(speed);
    },
    setSpringDampingRatio(ratio: number) {
      this.joint.setSpringDampingRatio(ratio);
    },
    setSpringFrequencyHz(hz: number) {
      this.joint.setSpringFrequencyHz(hz);
    },

    add(this: WheelJointCompThis) {
      const world = worldContainer
        ? worldContainer.world
        : getWorldFromGameObj(this);

      if (!world) {
        throw new Error("kpWheelJoint requires to be a descendant of kpWorld");
      }

      const userData = def?.userData ?? {};

      _joint = world.createJoint(
        new WheelJoint({
          ...def,
          bodyA: gameObjA.body,
          bodyB: gameObjB.body,
          userData: {
            ...userData,
            gameObj: this,
          },
        }),
      );
    },
    destroy() {
      const world = this.joint.getBodyA().getWorld();

      world.destroyJoint(this.joint);

      _joint = null;
    },
  };
}
