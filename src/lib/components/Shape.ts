import type { Comp, GameObj } from "kaplay";

import { Vec2, type Shape } from "planck";
import type { KPBodyComp } from "./Body";
import type { KPRotateComp } from "./Rotate";

export interface KPShapeComp extends Comp {
  shape: Shape;
}

export interface KPShapeCompOpt {
  draw?: boolean;
}

export function getAngle(obj: GameObj<KPShapeComp>) {
  const bodyComp = obj.c("kpBody") as KPBodyComp | null;

  if (bodyComp) {
    if (!bodyComp.body) return 0;

    return bodyComp.body.getAngle();
  }

  let angle = 0; // radians

  const rotateComp = obj.c("kpRotate") as KPRotateComp | null;
  if (rotateComp) {
    angle = rotateComp.kpAngle;
  }

  return angle;
}

export function getRotatedLine(p1: Vec2, p2: Vec2, angle: number) {
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);

  return {
    p1: new Vec2(p1.x * cosA - p1.y * sinA, p1.x * sinA + p1.y * cosA),
    p2: new Vec2(p2.x * cosA - p2.y * sinA, p2.x * sinA + p2.y * cosA),
  };
}
