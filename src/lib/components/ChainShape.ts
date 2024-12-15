import type { GameObj, KAPLAYCtx, Vec2 as KaVec2 } from "kaplay";
import type { KPShapeColor, KPShapeComp, KPShapeOpt } from "./Shape";

import { ChainShape, type Vec2Value } from "planck";
import { getRenderProps, p2kVec2 } from "../internals";

export interface KPChainShapeComp extends KPShapeComp {
  /**
   * The ChainShape
   *
   * @type {ChainShape}
   * @memberof KPChainShapeComp
   */
  shape: ChainShape;
}

export interface KPChainShapeOpt extends KPShapeOpt {
  vertices?: Vec2Value[];
  loop?: boolean;
}

type ChainShapeCompThis = GameObj<KPChainShapeComp>;

export default function chainShape(
  k: KAPLAYCtx,
  opt?: KPChainShapeOpt,
): KPChainShapeComp {
  let _shape: ChainShape | null = null;

  return {
    id: "kpShape",

    get shape() {
      if (!_shape) {
        throw new Error("kpChainShape not initialized");
      }

      return _shape;
    },

    kpDrawInspect(color: KPShapeColor) {
      const vertices = this.shape.m_vertices;

      const pts: KaVec2[] = [];
      for (let i = 0; i < vertices.length - 1; i++) {
        pts.push(p2kVec2(k, vertices[i]));

        if (i === vertices.length - 2) {
          pts.push(p2kVec2(k, vertices[i + 1]));
        }
      }

      if (opt?.loop) {
        pts.push(pts[0]);
      }

      k.drawLines({
        pts,
        color: k.rgb(color.r, color.g, color.b),
        opacity: color.a,
      });
    },

    add() {
      _shape = new ChainShape(opt?.vertices, opt?.loop);
    },
    draw(this: ChainShapeCompThis) {
      if (!opt?.draw) return;

      const renderingProps = getRenderProps(this);
      const vertices = this.shape.m_vertices;

      const pts: KaVec2[] = [];
      for (let i = 0; i < vertices.length - 1; i++) {
        pts.push(p2kVec2(k, vertices[i]));

        if (i === vertices.length - 2) {
          pts.push(p2kVec2(k, vertices[i + 1]));
        }
      }

      if (opt?.loop) {
        pts.push(pts[0]);
      }

      k.drawLines({
        ...renderingProps,
        pts,
      });
    },
    destroy() {
      _shape = null;
    },
  };
}
