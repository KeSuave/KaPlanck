import type { GameObj, KAPLAYCtx } from "kaplay";
import { type GearJointDef, GearJoint } from "planck";
import { getWorldFromGameObj } from "../utils";
import type { KPBodyComp } from "./Body";
import joint, { type KPJointComp } from "./Joint";
import type { KPPosComp } from "./Position";
import type { KPPrismaticJointComp } from "./PrismaticJoint";
import type { KPRevoluteJointComp } from "./RevoluteJoint";
import type { KPRotateComp } from "./Rotate";
import type { KPWorldComp } from "./World";

export interface KPGearJointDef
  extends Omit<GearJointDef, "bodyA" | "bodyB" | "join1" | "joint2"> {
  draw?: boolean;
}

export interface KPGearJointComp extends KPJointComp {
  joint: GearJoint;

  getJoint1(): GameObj<KPRevoluteJointComp> | GameObj<KPPrismaticJointComp>;
  getJoint2(): GameObj<KPRevoluteJointComp> | GameObj<KPPrismaticJointComp>;
  getRatio(): number;
  setRatio(ratio: number): void;
}

type GearJointCompThis = GameObj<KPGearJointComp>;

export default function gearJoint(
  k: KAPLAYCtx,
  def: KPGearJointDef,
  gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
  jointGameObj1: GameObj<KPRevoluteJointComp> | GameObj<KPPrismaticJointComp>,
  jointGameObj2: GameObj<KPRevoluteJointComp> | GameObj<KPPrismaticJointComp>,
  worldContainer?: GameObj<KPWorldComp>,
): KPGearJointComp {
  let _joint: GearJoint | null = null;

  return {
    ...joint(k, gameObjA, gameObjB, def.draw),

    id: "kpGearJoint",

    get joint() {
      if (!_joint) {
        throw new Error("kpGearJoint not initialized");
      }

      return _joint;
    },

    getJoint1() {
      return jointGameObj1;
    },
    getJoint2() {
      return jointGameObj2;
    },
    getRatio() {
      return this.joint.getRatio();
    },
    setRatio(ratio: number) {
      this.joint.setRatio(ratio);
    },

    add(this: GearJointCompThis) {
      const world = worldContainer
        ? worldContainer.world
        : getWorldFromGameObj(this);

      if (!world) {
        throw new Error("kpGearJoint requires to be a descendant of kpWorld");
      }

      const userData = def?.userData ?? {};

      _joint = world.createJoint(
        new GearJoint({
          ...def,
          bodyA: gameObjA.body,
          bodyB: gameObjB.body,
          joint1: jointGameObj1.joint,
          joint2: jointGameObj2.joint,
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
