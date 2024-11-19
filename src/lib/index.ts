import KaPlanckPlugin from "./plugin";

// main plugin entry point
export default KaPlanckPlugin;

// export all components' types
export type { KPBodyComp } from "./components/Body";
export type {
  KPBoxShapeComp,
  KPBoxShapeCompOpt as KPBoxShapeCompOpts,
} from "./components/BoxShape";
export type {
  KPChainShapeComp,
  KPChainShapeCompOpt,
} from "./components/ChainShape";
export type {
  KPCircleShapeComp,
  KPCircleShapeCompOpt,
} from "./components/CircleShape";
export type {
  KPEdgeShapeComp,
  KPEdgeShapeCompOpt,
} from "./components/EdgeShape";
export type { KPFixtureComp } from "./components/Fixture";
export type {
  KPPolygonShapeComp,
  KPPolygonShapeCompOpt,
} from "./components/PolygonShape";
export type { KPPosComp } from "./components/Position";
export type { KPRotateComp } from "./components/Rotate";
export type { KPShapeComp, KPShapeCompOpt } from "./components/Shape";
export type { KPWorldComp } from "./components/World";
