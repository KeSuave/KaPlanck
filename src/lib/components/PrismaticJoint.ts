import type { GameObj, KAPLAYCtx } from "kaplay";
import { PrismaticJoint, type PrismaticJointDef, type Vec2 } from "planck";
import { getWorldFromGameObj } from "../utils";
import type { KPBodyComp } from "./Body";
import joint, { type KPJointComp } from "./Joint";
import type { KPPosComp } from "./Position";
import type { KPRotateComp } from "./Rotate";
import type { KPWorldComp } from "./World";

export interface KPPrismaticJointDef
  extends Omit<PrismaticJointDef, "bodyA" | "bodyB"> {
  draw?: boolean;
}

export interface KPPrismaticJointComp extends KPJointComp {
  /**
   * The PrismaticJoint
   *
   * @type {PrismaticJoint}
   */
  joint: PrismaticJoint;

  /**
   * Set the state of the joint limit.
   *
   * @param {boolean} flag
   */
  enableLimit(flag: boolean): void;
  /**
   * Set the state of the joint motor.
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
   * Returns the lower limit.
   *
   * @return {number}
   */
  getLowerLimit(): number;
  /**
   * Returns the maximum motor force.
   *
   * @return {number}
   */
  getMaxMotorForce(): number;
  /**
   * Returns the motor speed.
   *
   * @return {number}
   */
  getMotorSpeed(): number;
  /**
   * Returns the reference angle.
   *
   * @return {number}
   */
  getReferenceAngle(): number;
  /**
   * Returns the upper limit.
   *
   * @return {number}
   */
  getUpperLimit(): number;
  /**
   * Returns true if the joint limit is enabled, false otherwise.
   *
   * @return {boolean}
   */
  isLimitEnabled(): boolean;
  /**
   * Returns true if the motor is enabled, false otherwise.
   *
   * @return {boolean}
   */
  isMotorEnabled(): boolean;
  /**
   * Set the joint limits.
   *
   * @param {number} lower
   * @param {number} upper
   */
  setLimits(lower: number, upper: number): void;
  /**
   * Set the maximum motor force.
   *
   * @param {number} force
   */
  setMaxMotorForce(force: number): void;
  /**
   * Set the motor speed.
   *
   * @param {number} speed
   */
  setMotorSpeed(speed: number): void;
}

type PrismaticJointCompThis = GameObj<KPPrismaticJointComp>;

export default function prismaticJoint(
  k: KAPLAYCtx,
  def: KPPrismaticJointDef,
  gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  worldContainer?: GameObj<KPWorldComp>,
): KPPrismaticJointComp {
  let _joint: PrismaticJoint | null = null;

  return {
    ...joint(k, gameObjA, gameObjB, def.draw),

    id: "kpPrismaticJoint",

    get joint() {
      if (!_joint) {
        throw new Error("kpPrismaticJoint not initialized");
      }

      return _joint;
    },

    enableLimit(flag: boolean) {
      this.joint.enableLimit(flag);
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
    getLowerLimit() {
      return this.joint.getLowerLimit();
    },
    getMaxMotorForce() {
      return this.joint.getMaxMotorForce();
    },
    getMotorSpeed() {
      return this.joint.getMotorSpeed();
    },
    getReferenceAngle() {
      return this.joint.getReferenceAngle();
    },
    getUpperLimit() {
      return this.joint.getUpperLimit();
    },
    isLimitEnabled() {
      return this.joint.isLimitEnabled();
    },
    isMotorEnabled() {
      return this.joint.isMotorEnabled();
    },
    setLimits(lower: number, upper: number) {
      this.joint.setLimits(lower, upper);
    },
    setMaxMotorForce(force: number) {
      this.joint.setMaxMotorForce(force);
    },
    setMotorSpeed(speed: number) {
      this.joint.setMotorSpeed(speed);
    },

    add(this: PrismaticJointCompThis) {
      const world = worldContainer
        ? worldContainer.world
        : getWorldFromGameObj(this);

      if (!world) {
        throw new Error(
          "kpPrismaticJoint requires to be a descendant of kpWorld",
        );
      }

      const userData = def?.userData ?? {};

      _joint = world.createJoint(
        new PrismaticJoint({
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
