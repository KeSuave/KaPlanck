import type { ColorComp, GameObj, KAPLAYCtx } from "kaplay";
import {
  getAngle,
  getRotatedLine,
  type KPShapeComp,
  type KPShapeCompOpt,
} from "./Shape";

import { EdgeShape, type Vec2Value } from "planck";
import { p2kVec2 } from "../utils";

export interface KPEdgeShapeComp extends KPShapeComp {
  shape: EdgeShape;
}

export interface KPEdgeShapeCompOpt extends KPShapeCompOpt {
  v1?: Vec2Value;
  v2?: Vec2Value;
}

type EdgeShapeCompThis = GameObj<KPEdgeShapeComp>;

export default function edgeShape(
  k: KAPLAYCtx,
  opt?: KPEdgeShapeCompOpt,
): KPEdgeShapeComp {
  return {
    id: "kpShape",
    shape: new EdgeShape(opt?.v1, opt?.v2),

    draw(this: EdgeShapeCompThis) {
      if (!opt?.draw) return;

      const angle = getAngle(this);
      const line = getRotatedLine(
        this.shape.m_vertex1,
        this.shape.m_vertex2,
        angle,
      );
      const p1 = p2kVec2(k, line.p1);
      const p2 = p2kVec2(k, line.p2);

      k.drawLine({
        p1,
        p2,
        color: (this as unknown as ColorComp).color,
      });
    },
  };
}
