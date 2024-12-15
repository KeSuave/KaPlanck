import type { Comp, GameObj, KAPLAYCtx, RotateComp } from "kaplay";

import { KPBodyComp } from "./Body";

export interface KPRotateComp extends Comp {
  /**
   * Returns the current rotation angle of the object in radians.
   *
   * @return {number}
   */
  getKPAngle(): number;
  /**
   * Sets the rotation angle of the object in radians.
   *
   * @param {number} angle
   * @param {boolean} fromBody This is an internal flag that states it was updated by the body
   */
  setKPAngle(angle: number, fromBody?: boolean): void;

  /**
   * Rotates the object by a given angle in radians.
   *
   * @param {number} angle
   */
  kpRotateBy(angle: number): void;
  /**
   * Rotates the object to a given angle in radians.
   *
   * @param {number} angle
   */
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
    setKPAngle(this: RotateCompThis, angle: number, fromBody = false) {
      this.angle = k.rad2deg(angle);

      if (!fromBody) {
        const bodyComp = this.c("kpBody") as KPBodyComp | null;

        if (bodyComp && bodyComp.body) {
          bodyComp.body.setAngle(angle);
        }
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
