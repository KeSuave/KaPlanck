import type { GameObj, KAPLAYCtx } from "kaplay";
import { type KPShapeComp, type KPShapeOpt } from "./Shape";

import { BoxShape, type Vec2Value } from "planck";
import { getRenderProps, u2p } from "../utils";

export interface KPBoxShapeComp extends KPShapeComp {
  shape: BoxShape;
}

export interface KPBoxShapeOpt extends KPShapeOpt {
  halfWidth: number;
  halfHeight: number;
  center?: Vec2Value;
  angle?: number;
}

type BoxShapeCompThis = GameObj<KPBoxShapeComp>;

export default function boxShape(
  k: KAPLAYCtx,
  opt: KPBoxShapeOpt,
): KPBoxShapeComp {
  return {
    id: "kpShape",
    shape: new BoxShape(opt.halfWidth, opt.halfHeight, opt?.center, opt?.angle),

    draw(this: BoxShapeCompThis) {
      drawBoxShape(k, opt, this);
    },
  };
}

export function drawBoxShape(k: KAPLAYCtx, opt: KPBoxShapeOpt, obj: GameObj) {
  if (!opt.draw) return;

  const renderingProps = getRenderProps(obj);
  const width = u2p(opt.halfWidth) * 2;
  const height = u2p(opt.halfHeight) * 2;
  const pos = k.vec2(u2p(opt.center?.x ?? 0), u2p(opt.center?.y ?? 0));

  k.drawRect({
    ...renderingProps,
    width,
    height,
    pos,
    anchor: "center",
  });
}
