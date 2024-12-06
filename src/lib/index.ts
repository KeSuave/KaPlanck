import KaPlanckPlugin from "./plugin";

// main plugin entry point
export default KaPlanckPlugin;

export type { KaPlanckPluginCtx, KaPlanckPluginOpts } from "./plugin";

// export all components' types
export type { KPBodyComp, KPBodyDef, KPBodyUserData } from "./components/Body";
export type { KPBoxShapeComp, KPBoxShapeOpt } from "./components/BoxShape";
export type {
  KPChainShapeComp,
  KPChainShapeOpt,
} from "./components/ChainShape";
export type {
  KPCircleShapeComp,
  KPCircleShapeOpt,
} from "./components/CircleShape";
export type { KPEdgeShapeComp, KPEdgeShapeOpt } from "./components/EdgeShape";
export type { KPFixtureComp, KPFixtureDef } from "./components/Fixture";
export type {
  KPPolygonShapeComp,
  KPPolygonShapeOpt,
} from "./components/PolygonShape";
export type { KPPosComp } from "./components/Position";
export type { KPRotateComp } from "./components/Rotate";
export type { KPShapeComp, KPShapeOpt } from "./components/Shape";
export type { KPWorldComp } from "./components/World";
