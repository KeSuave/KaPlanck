import type { GameObj, KAPLAYCtx } from "kaplay";
import { RopeJoint, type RopeJointDef, type Vec2 } from "planck";
import { getWorldFromGameObj } from "../utils";
import type { KPBodyComp } from "./Body";
import joint, { type KPJointComp } from "./Joint";
import type { KPPosComp } from "./Position";
import type { KPRotateComp } from "./Rotate";
import type { KPWorldComp } from "./World";

export interface KPRopeJointDef extends Omit<RopeJointDef, "bodyA" | "bodyB"> {
  draw?: boolean;
}

export interface KPRopeJointComp extends KPJointComp {
  joint: RopeJoint;

  getLimitState(): number;
  getLocalAnchorA(): Vec2;
  getLocalAnchorB(): Vec2;
  getMaxLength(): number;
  setMaxLength(maxLen: number): void;
}

type RopeJointCompThis = GameObj<KPRopeJointComp>;

export default function ropeJoint(
  k: KAPLAYCtx,
  def: KPRopeJointDef,
  gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  worldContainer?: GameObj<KPWorldComp>,
): KPRopeJointComp {
  let _joint: RopeJoint | null = null;

  return {
    ...joint(k, gameObjA, gameObjB, def.draw),

    id: "kpRopeJoint",

    get joint() {
      if (!_joint) {
        throw new Error("kpRopeJoint not initialized");
      }

      return _joint;
    },

    getLimitState() {
      return this.joint.getLimitState();
    },
    getLocalAnchorA() {
      return this.joint.getLocalAnchorA();
    },
    getLocalAnchorB() {
      return this.joint.getLocalAnchorB();
    },
    getMaxLength() {
      return this.joint.getMaxLength();
    },
    setMaxLength(maxLen: number) {
      this.joint.setMaxLength(maxLen);
    },

    add(this: RopeJointCompThis) {
      const world = worldContainer
        ? worldContainer.world
        : getWorldFromGameObj(this);

      if (!world) {
        throw new Error("kpRopeJoint requires to be a descendant of kpWorld");
      }

      const userData = def?.userData ?? {};

      _joint = world.createJoint(
        new RopeJoint({
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
