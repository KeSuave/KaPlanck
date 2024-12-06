import type { GameObj, KAPLAYCtx } from "kaplay";
import { getRenderProps, p2kVec2 } from "../utils";
import { KPShapeComp, KPShapeOpt } from "./Shape";

import type { Vec2Value } from "planck";
import { PolygonShape } from "planck";

export interface KPPolygonShapeComp extends KPShapeComp {
  shape: PolygonShape;
}

export interface KPPolygonShapeOpt extends KPShapeOpt {
  vertices?: Vec2Value[];
}

type PolygonShapeCompThis = GameObj<KPPolygonShapeComp>;

export default function polygonShape(
  k: KAPLAYCtx,
  opt?: KPPolygonShapeOpt,
): KPPolygonShapeComp {
  let _shape: PolygonShape | null = null;

  return {
    id: "kpShape",

    get shape() {
      if (!_shape) {
        throw new Error("kpPolygonShape not initialized");
      }

      return _shape;
    },

    add() {
      _shape = new PolygonShape(opt?.vertices);
    },
    draw(this: PolygonShapeCompThis) {
      if (!opt?.draw) return;

      const renderingProps = getRenderProps(this);
      const pts = this.shape.m_vertices.map((v) => p2kVec2(k, v));

      k.drawPolygon({
        ...renderingProps,
        pts,
      });
    },
    destroy() {
      _shape = null;
    },
  };
}
