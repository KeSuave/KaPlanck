import type { GameObj, KAPLAYCtx } from "kaplay";
import { type Vec2, WeldJoint, type WeldJointDef } from "planck";
import { getWorldFromGameObj } from "../utils";
import type { KPBodyComp } from "./Body";
import joint, { type KPJointComp } from "./Joint";
import type { KPPosComp } from "./Position";
import type { KPRotateComp } from "./Rotate";
import type { KPWorldComp } from "./World";

export interface KPWeldJointDef extends Omit<WeldJointDef, "bodyA" | "bodyB"> {
  draw?: boolean;
}

export interface KPWeldJointComp extends KPJointComp {
  joint: WeldJoint;

  getDampingRatio(): number;
  getFrequency(): number;
  getLocalAnchorA(): Vec2;
  getLocalAnchorB(): Vec2;
  setDampingRatio(dampingRatio: number): void;
  setFrequency(hz: number): void;
}

type WeldJointCompThis = GameObj<KPWeldJointComp>;

export default function weldJoint(
  k: KAPLAYCtx,
  def: KPWeldJointDef,
  gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  worldContainer?: GameObj<KPWorldComp>,
): KPWeldJointComp {
  let _joint: WeldJoint | null = null;

  return {
    ...joint(k, gameObjA, gameObjB, def.draw),

    id: "kpWeldJoint",

    get joint() {
      if (!_joint) {
        throw new Error("kpWeldJoint not initialized");
      }

      return _joint;
    },

    getDampingRatio() {
      return this.joint.getDampingRatio();
    },
    getFrequency() {
      return this.joint.getFrequency();
    },
    getLocalAnchorA() {
      return this.joint.getLocalAnchorA();
    },
    getLocalAnchorB() {
      return this.joint.getLocalAnchorB();
    },
    setDampingRatio(dampingRatio: number) {
      this.joint.setDampingRatio(dampingRatio);
    },
    setFrequency(hz: number) {
      this.joint.setFrequency(hz);
    },

    add(this: WeldJointCompThis) {
      const world = worldContainer
        ? worldContainer.world
        : getWorldFromGameObj(this);

      if (!world) {
        throw new Error("kpWeldJoint requires to be a descendant of kpWorld");
      }

      const userData = def?.userData ?? {};

      _joint = world.createJoint(
        new WeldJoint({
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
