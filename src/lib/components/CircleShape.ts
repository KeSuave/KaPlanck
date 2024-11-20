import type { GameObj, KAPLAYCtx } from "kaplay";
import { type KPShapeComp, type KPShapeOpt } from "./Shape";

import { CircleShape, Vec2 } from "planck";
import { getRenderProps, u2p } from "../utils";

export interface KPCircleShapeComp extends KPShapeComp {
  shape: CircleShape;
}

export interface KPCircleShapeOpt extends KPShapeOpt {
  position?: Vec2;
  radius?: number;
}

type CircleShapeCompThis = GameObj<KPCircleShapeComp>;

export default function circleShape(
  k: KAPLAYCtx,
  opt?: KPCircleShapeOpt,
): KPCircleShapeComp {
  return {
    id: "kpShape",
    shape: new CircleShape(opt?.position ?? Vec2.zero(), opt?.radius),

    draw(this: CircleShapeCompThis) {
      drawCircleShape(k, opt, this, this.shape);
    },
  };
}

export function drawCircleShape(
  k: KAPLAYCtx,
  opt: KPShapeOpt | undefined,
  obj: GameObj,
  shape: CircleShape,
) {
  if (!opt?.draw) return;

  const renderingProps = getRenderProps(obj);

  k.drawCircle({
    ...renderingProps,
    radius: u2p(shape.getRadius()),
  });
}
