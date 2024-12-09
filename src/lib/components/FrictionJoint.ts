import type { GameObj, KAPLAYCtx } from "kaplay";
import { FrictionJoint, type FrictionJointDef, type Vec2 } from "planck";
import { getWorldFromGameObj } from "../utils";
import type { KPBodyComp } from "./Body";
import type { KPJointComp } from "./Joint";
import joint from "./Joint";
import type { KPPosComp } from "./Position";
import type { KPRotateComp } from "./Rotate";
import type { KPWorldComp } from "./World";

export interface KPFrictionJointDef
  extends Omit<FrictionJointDef, "bodyA" | "bodyB"> {
  draw?: boolean;
}

export interface KPFrictionJointComp extends KPJointComp {
  joint: FrictionJoint;

  getLocalAnchorA(): Vec2;
  getLocalAnchorB(): Vec2;
  getMaxForce(): number;
  getMaxTorque(): number;
  setMaxForce(force: number): void;
  setMaxTorque(torque: number): void;
}

type FrictionJointCompThis = GameObj<KPFrictionJointComp>;

export default function frictionJoint(
  k: KAPLAYCtx,
  def: KPFrictionJointDef,
  gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  worldContainer?: GameObj<KPWorldComp>,
): KPFrictionJointComp {
  let _joint: FrictionJoint | null = null;

  return {
    ...joint(k, gameObjA, gameObjB, def.draw),

    id: "kpFrictionJoint",

    get joint() {
      if (!_joint) {
        throw new Error("kpFrictionJoint not initialized");
      }

      return _joint;
    },
    getLocalAnchorA() {
      return this.joint.getLocalAnchorA();
    },
    getLocalAnchorB() {
      return this.joint.getLocalAnchorB();
    },
    getMaxForce() {
      return this.joint.getMaxForce();
    },
    getMaxTorque() {
      return this.joint.getMaxTorque();
    },
    setMaxForce(force: number) {
      this.joint.setMaxForce(force);
    },
    setMaxTorque(torque: number) {
      this.joint.setMaxTorque(torque);
    },

    add(this: FrictionJointCompThis) {
      const world = worldContainer
        ? worldContainer.world
        : getWorldFromGameObj(this);

      if (!world) {
        throw new Error(
          "kpFrictionJoint requires to be a descendant of kpWorld",
        );
      }

      const userData = def?.userData ?? {};

      _joint = world.createJoint(
        new FrictionJoint({
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
