import type { Comp, GameObj, KAPLAYCtx, RotateComp } from "kaplay";

import { KPBodyComp } from "./Body";

export interface KPRotateComp extends Comp {
  getKPAngle(): number;
  setKPAngle(angle: number): void;

  kpRotateBy(angle: number): void;
  kpRotateTo(angle: number): void;
}

type RotateCompThis = GameObj<KPRotateComp & RotateComp>;

export default function rotate(k: KAPLAYCtx, angle = 0): KPRotateComp {
  return {
    id: "kpRotate",

    getKPAngle(this: RotateCompThis) {
      const bodyComp = this.c("kpBody") as KPBodyComp | null;

      if (bodyComp && bodyComp.body) {
        return bodyComp.body.getAngle();
      }

      return k.deg2rad(this.angle);
    },
    setKPAngle(this: RotateCompThis, angle: number) {
      this.angle = k.rad2deg(angle);

      const bodyComp = this.c("kpBody") as KPBodyComp | null;

      if (bodyComp && bodyComp.body) {
        bodyComp.body.setAngle(angle);
      }
    },

    kpRotateBy(this: RotateCompThis, angle: number) {
      this.setKPAngle(this.getKPAngle() + angle);
    },
    kpRotateTo(this: RotateCompThis, angle: number) {
      this.setKPAngle(angle);
    },

    add(this: RotateCompThis) {
      this.use(k.rotate());

      this.angle = k.rad2deg(angle);
    },
  };
}
