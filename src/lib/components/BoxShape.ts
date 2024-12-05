import type { GameObj, KAPLAYCtx } from "kaplay";
import { type KPShapeComp, type KPShapeOpt } from "./Shape";

import { BoxShape, type Vec2Value } from "planck";
import { getRenderProps, u2p } from "../utils";

export interface KPBoxShapeComp extends KPShapeComp {
  shape: BoxShape;
}

export interface KPBoxShapeOpt extends KPShapeOpt {
  /**
   * The width of the box shape.
   *
   * @type {number}
   */
  width: number;
  /**
   * The height of the box shape.
   *
   * @type {number}
   */
  height: number;
  /**
   * The center of the box relative to the body's origin.
   *
   * @type {Vec2Value}
   */
  center?: Vec2Value;
  /**
   * The angle of the box relative to the body's angle.
   *
   * @type {number}
   */
  angle?: number;
}

type BoxShapeCompThis = GameObj<KPBoxShapeComp>;

export default function boxShape(
  k: KAPLAYCtx,
  opt: KPBoxShapeOpt,
): KPBoxShapeComp {
  return {
    id: "kpShape",
    shape: new BoxShape(opt.width / 2, opt.height / 2, opt?.center, opt?.angle),

    draw(this: BoxShapeCompThis) {
      drawBoxShape(k, opt, this);
    },
  };
}

export function drawBoxShape(k: KAPLAYCtx, opt: KPBoxShapeOpt, obj: GameObj) {
  if (!opt.draw) return;

  const renderingProps = getRenderProps(obj);
  const width = u2p(opt.width);
  const height = u2p(opt.height);
  const pos = k.vec2(u2p(opt.center?.x ?? 0), u2p(opt.center?.y ?? 0));

  k.drawRect({
    ...renderingProps,
    width,
    height,
    pos,
    anchor: "center",
  });
}
