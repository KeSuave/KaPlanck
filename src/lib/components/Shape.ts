import type { Comp } from "kaplay";

import { type Shape } from "planck";

export interface KPShapeColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface KPShapeComp extends Comp {
  /**
   * The Shape
   *
   * @type {Shape}
   */
  shape: Shape;

  /**
   * @internal
   * Draws the shape for debugging purposes.
   *
   * @param color - The color to use for drawing the shape.
   */
  kpDrawInspect(color: KPShapeColor): void;
}

export interface KPShapeOpt {
  draw?: boolean;
}
