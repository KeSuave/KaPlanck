import type { Comp, GameObj, KAPLAYCtx } from "kaplay";

import {
  BoxShape,
  ChainShape,
  CircleShape,
  EdgeShape,
  PolygonShape,
  Vec2,
  type Shape,
} from "planck";
import type { KPBodyComp } from "./Body";
import { drawBoxShape, type KPBoxShapeOpt } from "./BoxShape";
import { drawChainShape, type KPChainShapeOpt } from "./ChainShape";
import { drawCircleShape, type KPCircleShapeOpt } from "./CircleShape";
import { drawEdgeShape, type KPEdgeShapeOpt } from "./EdgeShape";
import { drawPolygonShape, type KPPolygonShapeOpt } from "./PolygonShape";

export interface KPShapesComp extends Comp {
  shapes: Shape[];
}

export type KPBoxDef = { type: "box"; opt: KPBoxShapeOpt };
export type KPChainDef = { type: "chain"; opt: KPChainShapeOpt };
export type KPCircleDef = { type: "circle"; opt: KPCircleShapeOpt };
export type KPEdgeDef = { type: "edge"; opt: KPEdgeShapeOpt };
export type KPPolygonDef = { type: "polygon"; opt: KPPolygonShapeOpt };

export type KPShapeDef =
  | KPBoxDef
  | KPChainDef
  | KPCircleDef
  | KPEdgeDef
  | KPPolygonDef;

type ShapesThis = GameObj<KPShapesComp & KPBodyComp & KPShapesComp>;

export default function shapes(k: KAPLAYCtx, defs: KPShapeDef[]): KPShapesComp {
  return {
    id: "kpShapes",
    shapes: [],

    add(this: ShapesThis) {
      this.shapes = [];

      for (let i = 0; i < defs.length; i++) {
        const def = defs[i];

        switch (def.type) {
          case "box":
            this.shapes.push(
              new BoxShape(
                def.opt.width / 2,
                def.opt.height / 2,
                def.opt.center,
                def.opt.angle,
              ),
            );
            break;
          case "chain":
            this.shapes.push(new ChainShape(def.opt?.vertices, def.opt?.loop));
            break;
          case "circle":
            this.shapes.push(
              new CircleShape(
                def.opt?.position ?? Vec2.zero(),
                def.opt?.radius,
              ),
            );
            break;
          case "edge":
            this.shapes.push(new EdgeShape(def.opt?.v1, def.opt?.v2));
            break;
          case "polygon":
            this.shapes.push(new PolygonShape(def.opt?.vertices));
            break;
        }
      }
    },
    draw(this: ShapesThis) {
      for (let i = 0; i < defs.length; i++) {
        const def = defs[i];

        switch (def.type) {
          case "box":
            drawBoxShape(k, def.opt, this);
            break;
          case "chain":
            drawChainShape(k, def.opt, this, this.shapes[i] as ChainShape);
            break;
          case "circle":
            drawCircleShape(k, def.opt, this, this.shapes[i] as CircleShape);
            break;
          case "edge":
            drawEdgeShape(k, def.opt, this, this.shapes[i] as EdgeShape);
            break;
          case "polygon":
            drawPolygonShape(k, def.opt, this, this.shapes[i] as PolygonShape);
            break;
        }
      }
    },
  };
}
