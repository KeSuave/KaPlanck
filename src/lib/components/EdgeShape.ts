import type { GameObj, KAPLAYCtx } from "kaplay";
import { type KPShapeComp, type KPShapeOpt } from "./Shape";

import { EdgeShape, type Vec2Value } from "planck";
import { getRenderProps, p2kVec2 } from "../utils";

export interface KPEdgeShapeComp extends KPShapeComp {
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
  return {
    id: "kpShape",
    shape: new EdgeShape(opt?.v1, opt?.v2),

    draw(this: EdgeShapeCompThis) {
      drawEdgeShape(k, opt, this, this.shape);
    },
  };
}

export function drawEdgeShape(
  k: KAPLAYCtx,
  opt: KPShapeOpt | undefined,
  obj: GameObj,
  shape: EdgeShape,
) {
  if (!opt?.draw) return;

  const renderingProps = getRenderProps(obj);
  const p1 = p2kVec2(k, shape.m_vertex1);
  const p2 = p2kVec2(k, shape.m_vertex2);

  k.drawLine({
    ...renderingProps,
    p1,
    p2,
  });
}
