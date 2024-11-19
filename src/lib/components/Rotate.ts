import type { Comp, GameObj } from "kaplay";

import { KPBodyComp } from "./Body";

export interface KPRotateComp extends Comp {
  kpAngle: number;

  rotateBy(angle: number): void;
  rotateTo(angle: number): void;
}

type RotateCompThis = GameObj<KPRotateComp>;

export default function rotate(angle?: number): KPRotateComp {
  return {
    id: "kpRotate",
    kpAngle: angle ?? 0,

    rotateBy(this: RotateCompThis, angle: number) {
      this.kpAngle += angle;

      const bodyComp = this.c("kpBody") as KPBodyComp | null;

      if (bodyComp) {
        if (!bodyComp.body) return;

        bodyComp.body.setTransform(bodyComp.body.getPosition(), angle);
      }
    },
    rotateTo(this: RotateCompThis, angle) {
      this.kpAngle = angle;

      const bodyComp = this.c("kpBody") as KPBodyComp | null;

      if (bodyComp) {
        if (!bodyComp.body) return;

        bodyComp.body.setTransform(bodyComp.body.getPosition(), angle);
      }
    },
  };
}
