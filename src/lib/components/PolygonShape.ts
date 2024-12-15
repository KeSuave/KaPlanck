import type { GameObj, KAPLAYCtx } from "kaplay";
import { getRenderProps, p2kVec2 } from "../internals";
import type { KPShapeColor, KPShapeComp, KPShapeOpt } from "./Shape";

import type { Vec2Value } from "planck";
import { PolygonShape } from "planck";

export interface KPPolygonShapeComp extends KPShapeComp {
  /**
   * The PolygonShape
   *
   * @type {PolygonShape}
   * @memberof KPPolygonShapeComp
   */
  shape: PolygonShape;
}

export interface KPPolygonShapeOpt extends KPShapeOpt {
  vertices?: Vec2Value[];
  fill?: boolean;
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

    kpDrawInspect(color: KPShapeColor) {
      const pts = this.shape.m_vertices.map((v) => p2kVec2(k, v));

      k.drawPolygon({
        pts,
        fill: true,
        color: k.rgb(color.r, color.g, color.b),
        opacity: color.a,
      });
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
        fill: opt?.fill,
      });
    },
    destroy() {
      _shape = null;
    },
  };
}
