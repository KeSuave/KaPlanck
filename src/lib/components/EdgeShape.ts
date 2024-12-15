import type { GameObj, KAPLAYCtx } from "kaplay";
import { type KPShapeComp, type KPShapeOpt } from "./Shape";

import { EdgeShape, type Vec2Value } from "planck";
import { getRenderProps, p2kVec2 } from "../internals";

export interface KPEdgeShapeComp extends KPShapeComp {
  /**
   * The EdgeShape
   *
   * @type {EdgeShape}
   * @memberof KPEdgeShapeComp
   */
  shape: EdgeShape;
}

export interface KPEdgeShapeOpt extends KPShapeOpt {
  v1?: Vec2Value;
  v2?: Vec2Value;
}

type EdgeShapeCompThis = GameObj<KPEdgeShapeComp>;

export default function edgeShape(
  k: KAPLAYCtx,
  opt?: KPEdgeShapeOpt,
): KPEdgeShapeComp {
  let _shape: EdgeShape | null = null;

  return {
    id: "kpShape",

    get shape() {
      if (!_shape) {
        throw new Error("kpEdgeShape not initialized");
      }

      return _shape;
    },

    add() {
      _shape = new EdgeShape(opt?.v1, opt?.v2);
    },
    draw(this: EdgeShapeCompThis) {
      if (!opt?.draw) return;

      const renderingProps = getRenderProps(this);
      const p1 = p2kVec2(k, this.shape.m_vertex1);
      const p2 = p2kVec2(k, this.shape.m_vertex2);

      k.drawLine({
        ...renderingProps,
        p1,
        p2,
      });
    },
    destroy() {
      _shape = null;
    },
  };
}
