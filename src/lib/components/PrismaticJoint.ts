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
  joint: PrismaticJoint;

  enableLimit(flag: boolean): void;
  enableMotor(flag: boolean): void;
  getJointSpeed(): number;
  getJointTranslation(): number;
  getLocalAnchorA(): Vec2;
  getLocalAnchorB(): Vec2;
  getLocalAxisA(): Vec2;
  getLowerLimit(): number;
  getMaxMotorForce(): number;
  getMotorSpeed(): number;
  getReferenceAngle(): number;
  getUpperLimit(): number;
  isLimitEnabled(): boolean;
  isMotorEnabled(): boolean;
  setLimits(lower: number, upper: number): void;
  setMaxMotorForce(force: number): void;
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
