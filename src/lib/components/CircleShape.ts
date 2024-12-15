import type { GameObj, KAPLAYCtx } from "kaplay";
import type { KPShapeColor, KPShapeComp, KPShapeOpt } from "./Shape";

import { CircleShape, Vec2, type Vec2Value } from "planck";
import { getRenderProps, m2p, p2kVec2 } from "../internals";

export interface KPCircleShapeComp extends KPShapeComp {
  /**
   * The CircleShape
   *
   * @type {CircleShape}
   * @memberof KPCircleShapeComp
   */
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

    kpDrawInspect(color: KPShapeColor) {
      k.drawCircle({
        pos: p2kVec2(k, this.shape.getCenter()),
        radius: m2p(this.shape.getRadius()),
        fill: true,
        color: k.rgb(color.r, color.g, color.b),
        opacity: color.a,
      });

      k.drawLine({
        p1: k.vec2(),
        p2: k.vec2(m2p(this.shape.getRadius()), 0),
        color: k.rgb(color.r, color.g, color.b),
      });
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
        radius: m2p(this.shape.getRadius()),
        fill: opt?.fill,
      });

      k.drawLine({
        p1: k.vec2(),
        p2: k.vec2(m2p(this.shape.getRadius()), 0),
      });
    },
    destroy() {
      _shape = null;
    },
  };
}
