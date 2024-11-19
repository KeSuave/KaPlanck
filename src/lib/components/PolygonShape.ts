import type { ColorComp, GameObj, KAPLAYCtx } from "kaplay";
import { KPShapeComp, KPShapeCompOpt, getAngle } from "./Shape";

import type { Vec2Value } from "planck";
import { PolygonShape } from "planck";
import { p2kVec2 } from "../utils";

export interface KPPolygonShapeComp extends KPShapeComp {
  shape: PolygonShape;
}

export interface KPPolygonShapeCompOpt extends KPShapeCompOpt {
  vertices?: Vec2Value[];
}

type PolygonShapeCompThis = GameObj<KPPolygonShapeComp>;

export default function polygonShape(
  k: KAPLAYCtx,
  opt?: KPPolygonShapeCompOpt,
): KPPolygonShapeComp {
  return {
    id: "kpShape",
    shape: new PolygonShape(opt?.vertices),

    draw(this: PolygonShapeCompThis) {
      if (!opt?.draw) return;

      const angle = getAngle(this);
      const pts = this.shape.m_vertices.map((v) => p2kVec2(k, v));

      k.drawPolygon({
        pts: pts,
        angle: k.rad2deg(angle),
        color: (this as unknown as ColorComp).color,
      });
    },
  };
}
