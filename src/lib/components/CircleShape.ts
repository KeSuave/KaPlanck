import type { GameObj, KAPLAYCtx } from "kaplay";
import { type KPShapeComp, type KPShapeOpt } from "./Shape";

import { CircleShape, Vec2, type Vec2Value } from "planck";
import { getRenderProps, p2kVec2, u2p } from "../utils";

export interface KPCircleShapeComp extends KPShapeComp {
  shape: CircleShape;
}

export interface KPCircleShapeOpt extends KPShapeOpt {
  position?: Vec2Value;
  radius?: number;
  fill?: boolean;
}

type CircleShapeCompThis = GameObj<KPCircleShapeComp>;

export default function circleShape(
  k: KAPLAYCtx,
  opt?: KPCircleShapeOpt,
): KPCircleShapeComp {
  let _shape: CircleShape | null = null;

  return {
    id: "kpShape",

    get shape() {
      if (!_shape) {
        throw new Error("kpCircleShape not initialized");
      }

      return _shape;
    },

    add() {
      _shape = new CircleShape(opt?.position ?? Vec2.zero(), opt?.radius);
    },
    draw(this: CircleShapeCompThis) {
      if (!opt?.draw) return;

      const renderingProps = getRenderProps(this);

      k.drawCircle({
        ...renderingProps,
        pos: p2kVec2(k, this.shape.getCenter()),
        radius: u2p(this.shape.getRadius()),
        fill: opt?.fill,
      });
    },
    destroy() {
      _shape = null;
    },
  };
}
