import type { GameObj, KAPLAYCtx } from "kaplay";
import { DistanceJoint, DistanceJointDef, Vec2 } from "planck";

import { getWorldFromGameObj } from "../utils";
import type { KPBodyComp } from "./Body";
import type { KPJointComp } from "./Joint";
import joint from "./Joint";
import type { KPPosComp } from "./Position";
import type { KPRotateComp } from "./Rotate";
import type { KPWorldComp } from "./World";

export interface KPDistanceJointDef
  extends Omit<DistanceJointDef, "bodyA" | "bodyB"> {
  draw?: boolean;
}

export interface KPDistanceJointComp extends KPJointComp {
  joint: DistanceJoint;

  getDampingRatio(): number;
  getFrequency(): number;
  getLength(): number;
  getLocalAnchorA(): Vec2;
  getLocalAnchorB(): Vec2;
  setDampingRatio(damping_ratio: number): void;
  setFrequency(frequency: number): void;
  setLength(length: number): void;
}

type DistanceJointCompThis = GameObj<KPDistanceJointComp>;

export default function distanceJoint(
  k: KAPLAYCtx,
  def: KPDistanceJointDef,
  gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  worldContainer?: GameObj<KPWorldComp>,
): KPDistanceJointComp {
  let _joint: DistanceJoint | null = null;

  return {
    ...joint(k, gameObjA, gameObjB, def.draw),

    id: "kpDistanceJoint",

    get joint() {
      if (!_joint) {
        throw new Error("kpDistanceJoint not initialized");
      }

      return _joint;
    },

    getDampingRatio() {
      return this.joint.getDampingRatio();
    },
    getFrequency() {
      return this.joint.getFrequency();
    },
    getLength() {
      return this.joint.getLength();
    },
    getLocalAnchorA() {
      return this.joint.getLocalAnchorA();
    },
    getLocalAnchorB() {
      return this.joint.getLocalAnchorB();
    },
    setDampingRatio(damping_ratio: number) {
      this.joint.setDampingRatio(damping_ratio);
    },
    setFrequency(frequency: number) {
      this.joint.setFrequency(frequency);
    },
    setLength(length: number) {
      this.joint.setLength(length);
    },

    add(this: DistanceJointCompThis) {
      const world = worldContainer
        ? worldContainer.world
        : getWorldFromGameObj(this);

      if (!world) {
        throw new Error(
          "kpDistanceJoint requires to be a descendant of kpWorld",
        );
      }

      const userData = def?.userData ?? {};

      _joint = world.createJoint(
        new DistanceJoint({
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
