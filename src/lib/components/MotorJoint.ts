import type { GameObj, KAPLAYCtx } from "kaplay";
import {
  MotorJoint,
  type MotorJointDef,
  type Vec2,
  type Vec2Value,
} from "planck";
import { getWorldFromGameObj } from "../utils";
import type { KPBodyComp } from "./Body";
import joint, { KPJointComp } from "./Joint";
import type { KPPosComp } from "./Position";
import type { KPRotateComp } from "./Rotate";
import type { KPWorldComp } from "./World";

export interface KPMotorJointDef
  extends Omit<MotorJointDef, "bodyA" | "bodyB"> {
  draw?: boolean;
}

export interface KPMotorJointComp extends KPJointComp {
  joint: MotorJoint;

  getAngularOffset(): number;
  getCorrectionFactor(): number;
  getLinearOffset(): Vec2;
  getMaxForce(): number;
  getMaxTorque(): number;
  setAngularOffset(angularOffset: number): void;
  setCorrectionFactor(factor: number): void;
  setLinearOffset(linearOffset: Vec2Value): void;
  setMaxForce(force: number): void;
  setMaxTorque(torque: number): void;
}

type MotorJointCompThis = GameObj<KPMotorJointComp>;

export default function motorJoint(
  k: KAPLAYCtx,
  def: KPMotorJointDef,
  gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  worldContainer?: GameObj<KPWorldComp>,
): KPMotorJointComp {
  let _joint: MotorJoint | null = null;

  return {
    ...joint(k, gameObjA, gameObjB, def.draw),

    id: "kpMotorJoint",

    get joint() {
      if (!_joint) {
        throw new Error("kpMotorJoint not initialized");
      }

      return _joint;
    },

    getAngularOffset() {
      return this.joint.getAngularOffset();
    },
    getCorrectionFactor() {
      return this.joint.getCorrectionFactor();
    },
    getLinearOffset() {
      return this.joint.getLinearOffset();
    },
    getMaxForce() {
      return this.joint.getMaxForce();
    },
    getMaxTorque() {
      return this.joint.getMaxTorque();
    },
    setAngularOffset(angularOffset: number) {
      this.joint.setAngularOffset(angularOffset);
    },
    setCorrectionFactor(factor: number) {
      this.joint.setCorrectionFactor(factor);
    },
    setLinearOffset(linearOffset: Vec2Value) {
      this.joint.setLinearOffset(linearOffset);
    },
    setMaxForce(force: number) {
      this.joint.setMaxForce(force);
    },
    setMaxTorque(torque: number) {
      this.joint.setMaxTorque(torque);
    },

    add(this: MotorJointCompThis) {
      const world = worldContainer
        ? worldContainer.world
        : getWorldFromGameObj(this);

      if (!world) {
        throw new Error("kpMotorJoint requires to be a descendant of kpWorld");
      }

      const userData = def?.userData ?? {};

      _joint = world.createJoint(
        new MotorJoint({
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
