import type { GameObj, KAPLAYCtx } from "kaplay";
import { KPShapeComp, KPShapeOpt } from "./Shape";
import { getRenderProps, p2kVec2 } from "../utils";

import { PolygonShape } from "planck";
import type { Vec2Value } from "planck";

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
  return {
    id: "kpShape",
    shape: new PolygonShape(opt?.vertices),

    draw(this: PolygonShapeCompThis) {
      drawPolygonShape(k, opt, this, this.shape);
    },
  };
}

export function drawPolygonShape(
  k: KAPLAYCtx,
  opt: KPPolygonShapeOpt | undefined,
  obj: GameObj,
  shape: PolygonShape,
) {
  if (!opt?.draw) return;

  const renderingProps = getRenderProps(obj);
  const pts = shape.m_vertices.map((v) => p2kVec2(k, v));

  k.drawPolygon({
    ...renderingProps,
    pts,
  });
}
