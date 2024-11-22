import KaPlanckPlugin from "./plugin";

// main plugin entry point
export default KaPlanckPlugin;

export type { KaPlanckPluginCtx, KaPlanckPluginOpts } from "./plugin";

// export all components' types
export type { KPBodyComp } from "./components/Body";
export type {
  KPBoxShapeComp,
  KPBoxShapeOpt as KPBoxShapeCompOpts,
} from "./components/BoxShape";
export type {
  KPChainShapeComp,
  KPChainShapeOpt as KPChainShapeCompOpt,
} from "./components/ChainShape";
export type {
  KPCircleShapeComp,
  KPCircleShapeOpt as KPCircleShapeCompOpt,
} from "./components/CircleShape";
export type {
  KPEdgeShapeComp,
  KPEdgeShapeOpt as KPEdgeShapeCompOpt,
} from "./components/EdgeShape";
export type { KPFixtureComp, KPFixtureDef } from "./components/Fixture";
export type {
  KPPolygonShapeComp,
  KPPolygonShapeOpt as KPPolygonShapeCompOpt,
} from "./components/PolygonShape";
export type { KPPosComp } from "./components/Position";
export type { KPRotateComp } from "./components/Rotate";
export type {
  KPShapeComp,
  KPShapeOpt as KPShapeCompOpt,
} from "./components/Shape";
export type { KPWorldComp } from "./components/World";
