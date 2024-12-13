import type { Comp, GameObj, KAPLAYCtx, PosComp } from "kaplay";
import { Vec2, type Vec2Value } from "planck";
import { k2pVec2, p2kVec2 } from "../utils";
import { KPBodyComp } from "./Body";

export type KPVec2Args = [number, number] | [Vec2Value] | [Vec2] | [];

export interface KPPosComp extends Comp {
  getKPPosition(): Vec2;
  setKPPosition(pos: Vec2Value): void;
  kpMove(x: number, y: number): void;
  kpMove(vel: Vec2): void;
  kpMoveBy(dx: number, dy: number): void;
  kpMoveBy(d: Vec2): void;
  kpMoveTo(dest: Vec2, speed?: number): void;
  kpMoveTo(x: number, y: number, speed?: number): void;
}

type PosCompThis = GameObj<KPPosComp & PosComp>;

export default function pos(k: KAPLAYCtx, ...args: KPVec2Args): KPPosComp {
  return {
    id: "kpPos",

    getKPPosition(this: PosCompThis) {
      const bodyComp = this.c("kpBody") as KPBodyComp | null;

      if (bodyComp && bodyComp.body) {
        return bodyComp.body.getPosition();
      }

      return k2pVec2(this.pos);
    },
    setKPPosition(this: PosCompThis, pos: Vec2Value) {
      this.pos = p2kVec2(k, pos);

      const bodyComp = this.c("kpBody") as KPBodyComp | null;

      if (bodyComp && bodyComp.body) {
        bodyComp.body.setPosition(pos);
      }
    },

    kpMove(...margs: KPVec2Args) {
      this.kpMoveBy(vec2FromArgs(...margs).mul(k.dt()));
    },
    kpMoveBy(...margs: KPVec2Args) {
      const vec = vec2FromArgs(...margs);

      this.setKPPosition(this.getKPPosition().add(vec));
    },
    kpMoveTo(...margs: [number | Vec2, number | undefined, unknown?]) {
      const dest = new Vec2();
      let speed = 1;

      if (margs.length >= 1 && typeof margs[0] !== "number") {
        dest.set(margs[0].x, margs[0].y);

        if (margs.length === 2 && typeof margs[1] === "number") {
          speed = margs[1];
        }
      }

      if (
        margs.length >= 2 &&
        typeof margs[0] === "number" &&
        typeof margs[1] === "number"
      ) {
        dest.set(margs[0] as number, margs[1] as number);

        if (margs.length >= 3 && typeof margs[2] === "number") {
          speed = margs[2];
        }
      }

      const diff = dest.sub(this.getKPPosition());

      if (diff.length() > speed * k.dt()) {
        this.setKPPosition(dest);

        return;
      }

      diff.normalize();

      this.kpMove(dest.mul(speed));
    },

    add(this: PosCompThis) {
      this.use(k.pos());

      this.pos = p2kVec2(k, vec2FromArgs(...args));
    },
  };
}

function vec2FromArgs(...args: KPVec2Args): Vec2 {
  if (args.length === 2) {
    return new Vec2(args[0], args[1]);
  }
  if (args.length === 1) {
    return new Vec2(args[0]);
  }

  return new Vec2();
}
