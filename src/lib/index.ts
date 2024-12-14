import KaPlanckPlugin from "./plugin";

// main plugin entry point
export default KaPlanckPlugin;

export type { KaPlanckPluginCtx, KaPlanckPluginOpts } from "./plugin";

// export all components' types
export type { KPBodyComp, KPBodyDef } from "./components/Body";
export type { KPBoxShapeComp, KPBoxShapeOpt } from "./components/BoxShape";
export type {
  KPChainShapeComp,
  KPChainShapeOpt,
} from "./components/ChainShape";
export type {
  KPCircleShapeComp,
  KPCircleShapeOpt,
} from "./components/CircleShape";
export type {
  KPDistanceJointComp,
  KPDistanceJointDef,
} from "./components/DistanceJoint";
export type { KPEdgeShapeComp, KPEdgeShapeOpt } from "./components/EdgeShape";
export type { KPFixtureComp, KPFixtureDef } from "./components/Fixture";
export type {
  KPFrictionJointComp,
  KPFrictionJointDef,
} from "./components/FrictionJoint";
export type { KPGearJointComp, KPGearJointDef } from "./components/GearJoint";
export type { KPJointComp } from "./components/Joint";
export type {
  KPMotorJointComp,
  KPMotorJointDef,
} from "./components/MotorJoint";
export type {
  KPMouseJointComp,
  KPMouseJointDef,
} from "./components/MouseJoint";
export type {
  KPPolygonShapeComp,
  KPPolygonShapeOpt,
} from "./components/PolygonShape";
export type { KPPosComp } from "./components/Position";
export type {
  KPPrismaticJointComp,
  KPPrismaticJointDef,
} from "./components/PrismaticJoint";
export type {
  KPPulleyJointComp,
  KPPulleyJointDef,
} from "./components/PulleyJoint";
export type {
  KPRevoluteJointComp,
  KPRevoluteJointDef,
} from "./components/RevoluteJoint";
export type { KPRopeJointComp, KPRopeJointDef } from "./components/RopeJoint";
export type { KPRotateComp } from "./components/Rotate";
export type { KPShapeComp, KPShapeOpt } from "./components/Shape";
export type { KPWeldJointComp, KPWeldJointDef } from "./components/WeldJoint";
export type {
  KPWheelJointComp,
  KPWheelJointDef,
} from "./components/WheelJoint";
export type { KPWorldComp } from "./components/World";
export type { KPUserData } from "./types";

// utilities
export {
  findWorldContainer,
  getWorldContainerFromGameObj,
  getWorldFromGameObj,
} from "./utils";
export { Vec2 } from "./vec2";
