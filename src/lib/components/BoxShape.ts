import type { GameObj, KAPLAYCtx } from "kaplay";
import { type KPShapeComp, type KPShapeOpt } from "./Shape";

import { BoxShape, type Vec2Value } from "planck";
import { getRenderProps, m2p, p2kVec2 } from "../utils";

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
  /**
   * If true, the box will be filled with a color.
   *
   * @type {boolean}
   */
  fill?: boolean;
}

type BoxShapeCompThis = GameObj<KPBoxShapeComp>;

export default function boxShape(
  k: KAPLAYCtx,
  opt: KPBoxShapeOpt,
): KPBoxShapeComp {
  let _shape: BoxShape | null;

  return {
    id: "kpShape",

    get shape() {
      if (!_shape) {
        throw new Error("kpBoxShape not initialized");
      }

      return _shape;
    },

    add(this: BoxShapeCompThis) {
      _shape = new BoxShape(
        opt.width / 2,
        opt.height / 2,
        opt?.center,
        opt?.angle,
      );
    },
    draw(this: BoxShapeCompThis) {
      if (!opt.draw) return;

      const renderingProps = getRenderProps(this);
      const width = m2p(opt.width);
      const height = m2p(opt.height);
      const pos = k.vec2(p2kVec2(k, this.shape.m_centroid));

      k.drawRect({
        ...renderingProps,
        width,
        height,
        pos,
        anchor: "center",
        fill: opt.fill,
      });
    },
    destroy() {
      _shape = null;
    },
  };
}
