import type { GameObj, KAPLAYCtx } from "kaplay";
import { PulleyJoint, type PulleyJointDef, type Vec2 } from "planck";
import { getWorldFromGameObj } from "../utils";
import type { KPBodyComp } from "./Body";
import joint, { type KPJointComp } from "./Joint";
import type { KPPosComp } from "./Position";
import type { KPRotateComp } from "./Rotate";
import type { KPWorldComp } from "./World";

export interface KPPulleyJointDef
  extends Omit<PulleyJointDef, "bodyA" | "bodyB"> {
  draw?: boolean;
}

export interface KPPulleyJointComp extends KPJointComp {
  joint: PulleyJoint;

  getCurrentLengthA(): number;
  getCurrentLengthB(): number;
  getGroundAnchorA(): Vec2;
  getGroundAnchorB(): Vec2;
  getLengthA(): number;
  getLengthB(): number;
  getRatio(): number;
}

type PulleyJointCompThis = GameObj<KPPulleyJointComp>;

export default function pulleyJoint(
  k: KAPLAYCtx,
  def: KPPulleyJointDef,
  gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  worldContainer?: GameObj<KPWorldComp>,
): KPPulleyJointComp {
  let _joint: PulleyJoint | null = null;

  return {
    ...joint(k, gameObjA, gameObjB, def.draw),

    id: "kpPulleyJoint",

    get joint() {
      if (!_joint) {
        throw new Error("kpPulleyJoint not initialized");
      }

      return _joint;
    },

    getCurrentLengthA() {
      return this.joint.getCurrentLengthA();
    },
    getCurrentLengthB() {
      return this.joint.getCurrentLengthB();
    },
    getGroundAnchorA() {
      return this.joint.getGroundAnchorA();
    },
    getGroundAnchorB() {
      return this.joint.getGroundAnchorB();
    },
    getLengthA() {
      return this.joint.getLengthA();
    },
    getLengthB() {
      return this.joint.getLengthB();
    },
    getRatio() {
      return this.joint.getRatio();
    },

    add(this: PulleyJointCompThis) {
      const world = worldContainer
        ? worldContainer.world
        : getWorldFromGameObj(this);

      if (!world) {
        throw new Error("kpPulleyJoint requires to be a descendant of kpWorld");
      }

      const userData = def?.userData ?? {};

      _joint = world.createJoint(
        new PulleyJoint({
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
