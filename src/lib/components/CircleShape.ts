import type { ColorComp, GameObj, KAPLAYCtx } from "kaplay";
import { type KPShapeComp, type KPShapeCompOpt } from "./Shape";

import { CircleShape } from "planck";
import { u2p } from "../utils";

export interface KPCircleShapeComp extends KPShapeComp {
  shape: CircleShape;
}

export interface KPCircleShapeCompOpt extends KPShapeCompOpt {
  radius?: number;
}

type CircleShapeCompThis = GameObj<KPCircleShapeComp>;

export default function circleShape(
  k: KAPLAYCtx,
  opt?: KPCircleShapeCompOpt,
): KPCircleShapeComp {
  return {
    id: "kpShape",
    shape: new CircleShape(opt?.radius),

    draw(this: CircleShapeCompThis) {
      if (!opt?.draw) return;

      k.drawCircle({
        radius: u2p(this.shape.getRadius()),
        color: (this as unknown as ColorComp).color,
      });
    },
  };
}
