import type { GameObj, KAPLAYCtx } from "kaplay";
import { RevoluteJoint, type RevoluteJointDef, type Vec2 } from "planck";
import { getWorldFromGameObj } from "../utils";
import type { KPBodyComp } from "./Body";
import joint, { type KPJointComp } from "./Joint";
import type { KPPosComp } from "./Position";
import type { KPRotateComp } from "./Rotate";
import type { KPWorldComp } from "./World";

export interface KPRevoluteJointDef
  extends Omit<RevoluteJointDef, "bodyA" | "bodyB"> {
  draw?: boolean;
}

export interface KPRevoluteJointComp extends KPJointComp {
  joint: RevoluteJoint;

  enableLimit(flag: boolean): void;
  enableMotor(flag: boolean): void;
  getJointAngle(): number;
  getJointSpeed(): number;
  getLocalAnchorA(): Vec2;
  getLocalAnchorB(): Vec2;
  getLowerLimit(): number;
  getMaxMotorTorque(): number;
  getMotorSpeed(): number;
  getReferenceAngle(): number;
  getUpperLimit(): number;
  isLimitEnabled(): boolean;
  isMotorEnabled(): boolean;
  setLimits(lower: number, upper: number): void;
  setMaxMotorTorque(torque: number): void;
  setMotorSpeed(speed: number): void;
}

type RevoluteJointCompThis = GameObj<KPRevoluteJointComp>;

export default function revoluteJoint(
  k: KAPLAYCtx,
  def: KPRevoluteJointDef,
  gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  worldContainer?: GameObj<KPWorldComp>,
): KPRevoluteJointComp {
  let _joint: RevoluteJoint | null = null;

  return {
    ...joint(k, gameObjA, gameObjB, def.draw),

    id: "kpRevoluteJoint",

    get joint() {
      if (!_joint) {
        throw new Error("kpRevoluteJoint not initialized");
      }

      return _joint;
    },

    enableLimit(flag: boolean) {
      this.joint.enableLimit(flag);
    },
    enableMotor(flag: boolean) {
      this.joint.enableMotor(flag);
    },
    getJointAngle() {
      return this.joint.getJointAngle();
    },
    getJointSpeed() {
      return this.joint.getJointSpeed();
    },
    getLocalAnchorA() {
      return this.joint.getLocalAnchorA();
    },
    getLocalAnchorB() {
      return this.joint.getLocalAnchorB();
    },
    getLowerLimit() {
      return this.joint.getLowerLimit();
    },
    getMaxMotorTorque() {
      return this.joint.getMaxMotorTorque();
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
    setMaxMotorTorque(torque: number) {
      this.joint.setMaxMotorTorque(torque);
    },
    setMotorSpeed(speed: number) {
      this.joint.setMotorSpeed(speed);
    },

    add(this: RevoluteJointCompThis) {
      const world = worldContainer
        ? worldContainer.world
        : getWorldFromGameObj(this);

      if (!world) {
        throw new Error(
          "kpRevoluteJoint requires to be a descendant of kpWorld",
        );
      }

      const userData = def?.userData ?? {};

      _joint = world.createJoint(
        new RevoluteJoint({
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
