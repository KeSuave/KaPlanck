import type { GameObj, KAPLAYCtx } from "kaplay";
import {
  MouseJoint,
  type MouseJointDef,
  type Vec2,
  type Vec2Value,
} from "planck";
import { getWorldFromGameObj } from "../utils";
import type { KPBodyComp } from "./Body";
import type { KPJointComp } from "./Joint";
import joint from "./Joint";
import type { KPPosComp } from "./Position";
import type { KPRotateComp } from "./Rotate";
import type { KPWorldComp } from "./World";

export interface KPMouseJointDef
  extends Omit<MouseJointDef, "bodyA" | "bodyB"> {
  draw?: boolean;
}

export interface KPMouseJointComp extends KPJointComp {
  /**
   * The MouseJoint
   *
   * @type {MouseJoint}
   */
  joint: MouseJoint;

  /**
   * Returns the damping ratio of the joint.
   *
   * @return {number}
   */
  getDampingRatio(): number;
  /**
   * Returns the frequency of the joint.
   *
   * @return {number}
   */
  getFrequency(): number;
  /**
   * Returns the maximum force of the joint.
   *
   * @return {number}
   */
  getMaxForce(): number;
  /**
   * Returns the target position of the joint.
   *
   * @return {Vec2}
   */
  getTarget(): Vec2;
  /**
   * Sets the damping ratio of the joint.
   *
   * @param {number} dampingRatio
   */
  setDampingRatio(dampingRatio: number): void;
  /**
   * Sets the frequency of the joint.
   *
   * @param {number} frequency
   */
  setFrequency(frequency: number): void;
  /**
   * Sets the maximum force of the joint.
   *
   * @param {number} maxForce
   */
  setMaxForce(maxForce: number): void;
  /**
   * Sets the target position of the joint.
   *
   * @param {Vec2Value} target
   */
  setTarget(target: Vec2Value): void;
}

type MouseJointCompThis = GameObj<KPMouseJointComp>;

export default function mouseJoint(
  k: KAPLAYCtx,
  def: KPMouseJointDef,
  gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  worldContainer?: GameObj<KPWorldComp>,
): KPMouseJointComp {
  let _joint: MouseJoint | null = null;

  return {
    ...joint(k, gameObjA, gameObjB, def.draw),

    id: "kpMouseJoint",

    get joint() {
      if (!_joint) {
        throw new Error("kpMouseJoint not initialized");
      }

      return _joint;
    },

    getDampingRatio(): number {
      return this.joint.getDampingRatio();
    },
    getFrequency() {
      return this.joint.getFrequency();
    },
    getMaxForce() {
      return this.joint.getMaxForce();
    },
    getTarget() {
      return this.joint.getTarget();
    },
    setDampingRatio(dampingRatio: number) {
      this.joint.setDampingRatio(dampingRatio);
    },
    setFrequency(frequency: number) {
      this.joint.setFrequency(frequency);
    },
    setMaxForce(maxForce: number) {
      this.joint.setMaxForce(maxForce);
    },
    setTarget(target: Vec2) {
      this.joint.setTarget(target);
    },

    add(this: MouseJointCompThis) {
      const world = worldContainer
        ? worldContainer.world
        : getWorldFromGameObj(this);

      if (!world) {
        throw new Error("kpMouseJoint requires to be a descendant of kpWorld");
      }

      const userData = def?.userData ?? {};

      _joint = world.createJoint(
        new MouseJoint({
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
