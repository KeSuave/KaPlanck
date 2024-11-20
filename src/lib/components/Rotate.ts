import type { Comp, GameObj, KAPLAYCtx, RotateComp } from "kaplay";

import { KPBodyComp } from "./Body";

export interface KPRotateComp extends Comp {
  kpAngle: number;

  kpRotateBy(angle: number): void;
  kpRotateTo(angle: number): void;
}

type RotateCompThis = GameObj<KPRotateComp>;

export default function rotate(k: KAPLAYCtx, angle?: number): KPRotateComp {
  return {
    id: "kpRotate",
    kpAngle: angle ?? 0,

    kpRotateBy(this: RotateCompThis, angle: number) {
      this.kpAngle += angle;

      const bodyComp = this.c("kpBody") as KPBodyComp | null;

      if (bodyComp) {
        if (!bodyComp.body) return;

        bodyComp.body.setTransform(bodyComp.body.getPosition(), angle);
      }
    },
    kpRotateTo(this: RotateCompThis, angle) {
      this.kpAngle = angle;

      const bodyComp = this.c("kpBody") as KPBodyComp | null;

      if (bodyComp) {
        if (!bodyComp.body) return;

        bodyComp.body.setTransform(bodyComp.body.getPosition(), angle);
      }
    },

    add(this: RotateCompThis) {
      this.use(k.rotate());

      const rotateComp = this.c("rotate") as RotateComp | null;

      if (rotateComp) {
        rotateComp.angle = this.kpAngle;
      }
    },
    update(this: RotateCompThis) {
      const rotateComp = this.c("rotate") as RotateComp | null;

      if (rotateComp) {
        rotateComp.angle = k.rad2deg(this.kpAngle);
      }
    },
  };
}
