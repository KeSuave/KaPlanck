import type { Comp } from "kaplay";

import { type Shape } from "planck";

export interface KPShapeComp extends Comp {
  /**
   * The Shape
   *
   * @type {Shape}
   */
  shape: Shape;
}

export interface KPShapeOpt {
  draw?: boolean;
}
