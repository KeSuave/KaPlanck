import type { ColorComp, GameObj, KAPLAYCtx } from "kaplay";
import { getAngle, type KPShapeComp, type KPShapeCompOpt } from "./Shape";

import { BoxShape } from "planck";
import { u2p } from "../utils";

export interface KPBoxShapeComp extends KPShapeComp {
  shape: BoxShape;
}

export interface KPBoxShapeCompOpt extends KPShapeCompOpt {
  halfWidth: number;
  halfHeight: number;
}

type BoxShapeCompThis = GameObj<KPShapeComp>;

export default function boxShape(
  k: KAPLAYCtx,
  opt: KPBoxShapeCompOpt,
): KPBoxShapeComp {
  return {
    id: "kpShape",
    shape: new BoxShape(opt.halfWidth, opt.halfHeight),

    draw(this: BoxShapeCompThis) {
      if (!opt.draw) return;

      const angle = getAngle(this);
      const width = u2p(opt.halfWidth) * 2;
      const height = u2p(opt.halfHeight) * 2;
      const kAngle = k.rad2deg(angle);

      k.drawRect({
        width,
        height,
        angle: kAngle,
        anchor: "center",
        color: (this as unknown as ColorComp).color,
      });
    },
  };
}
