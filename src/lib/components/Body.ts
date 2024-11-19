import type { Comp, GameObj } from "kaplay";
import { Body, type BodyDef } from "planck";

import { getWorldFromGameObj } from "../utils";
import type { KPPosComp } from "./Position";
import type { KPRotateComp } from "./Rotate";

export interface KPBodyComp extends Comp {
  body: Body | null;

  // the following are just for drawInspect and debug purposes
  inspectColor: { r: number; g: number; b: number };
}

type BodyCompThis = GameObj<KPBodyComp & KPPosComp>;

export default function body(
  def?: Omit<BodyDef, "position" | "angle">,
): KPBodyComp {
  return {
    id: "kpBody",
    require: ["kpPos"],
    body: null,

    add(this: BodyCompThis) {
      const world = getWorldFromGameObj(this);

      if (!world) {
        throw new Error("kpBody requires to be a descendant of kpWorld");
      }

      const rotateComp = this.c("kpRotate") as KPRotateComp | null;

      let angle = 0;

      if (rotateComp) angle = rotateComp.kpAngle;

      this.body = world.createBody({ ...def, position: this.kpPos, angle });
    },
    fixedUpdate(this: BodyCompThis) {
      if (!this.body) return;

      this.kpPos = this.body.getPosition();

      const rotateComp = this.c("kpRotate") as KPRotateComp | null;

      if (rotateComp) rotateComp.kpAngle = this.body.getAngle();
    },
    destroy(this: BodyCompThis) {
      if (!this.body) return;

      const world = this.body.getWorld();

      world.destroyBody(this.body);
    },

    get inspectColor() {
      if (!this.body) return { r: 0, g: 0, b: 0 };

      if (this.body.isDynamic()) {
        return { r: 0, g: 191, b: 255 };
      } else if (this.body.isKinematic()) {
        return { r: 238, g: 130, b: 238 };
      }

      return { r: 255, g: 255, b: 255 };
    },
  };
}
