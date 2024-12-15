import type { Comp, GameObj, KAPLAYCtx } from "kaplay";
import { type Joint, Vec2, type Vec2Value } from "planck";

import { p2kVec2 } from "../internals";
import type { KPBodyComp } from "./Body";
import type { KPPosComp } from "./Position";
import type { KPRotateComp } from "./Rotate";

export interface KPJointComp extends Comp {
  /**
   * The Joint
   *
   * @type {Joint}
   */
  joint: Joint;

  /**
   * Returns the anchor A of the joint.
   *
   * @return {Vec2}
   */
  getAnchorA(): Vec2;
  /**
   * Returns the anchor B of the joint.
   *
   * @return {Vec2}
   */
  getAnchorB(): Vec2;
  /**
   * Returns true if the joint allows collision between the two bodies.
   *
   * @return {boolean}
   */
  getCollideConnected(): boolean;
  /**
   * Returns the game object A of the joint.
   *
   * @return {(GameObj<KPBodyComp & KPPosComp & KPRotateComp>)}
   */
  getGameObjA(): GameObj<KPBodyComp & KPPosComp & KPRotateComp>;
  /**
   * Returns the game object B of the joint.
   *
   * @return {(GameObj<KPBodyComp & KPPosComp & KPRotateComp>)}
   */
  getGameObjB(): GameObj<KPBodyComp & KPPosComp & KPRotateComp>;
  /**
   * Returns true if the joint is active.
   *
   * @return {boolean}
   */
  isActive(): boolean;
  /**
   * Shifts the origin of the joint.
   *
   * @param {Vec2Value} new_origin
   */
  shiftOrigin(new_origin: Vec2Value): void;
}

type JointCompThis = GameObj<KPJointComp>;

export default function joint(
  k: KAPLAYCtx,
  gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  draw = false,
): KPJointComp {
  const regularColor = new k.Color(255, 255, 255);
  const inspectColor = new k.Color(0, 0, 255);

  return {
    // Should be replaced with the actual joint implementation
    id: "kpJoint",

    get joint() {
      // Should be implemented by the actual joint implementation
      return {} as Joint;
    },

    getAnchorA() {
      return this.joint.getAnchorA();
    },
    getAnchorB() {
      return this.joint.getAnchorB();
    },
    getCollideConnected() {
      return this.joint.getCollideConnected();
    },
    getGameObjA() {
      return gameObjA;
    },
    getGameObjB() {
      return gameObjB;
    },
    isActive() {
      return this.joint.isActive();
    },
    shiftOrigin(new_origin: Vec2Value) {
      this.joint.shiftOrigin(new_origin);
    },

    draw() {
      if (!draw) return;

      k.drawLine({
        p1: p2kVec2(k, new Vec2(this.getAnchorA())),
        p2: p2kVec2(k, new Vec2(this.getAnchorB())),
        width: 1,
        color: regularColor,
      });
    },
    drawInspect(this: JointCompThis) {
      k.drawLine({
        p1: p2kVec2(k, new Vec2(this.getAnchorA())),
        p2: p2kVec2(k, new Vec2(this.getAnchorB())),
        width: 4,
        color: inspectColor,
      });
    },
  };
}
