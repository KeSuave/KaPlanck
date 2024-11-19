import type { Comp, GameObj, KAPLAYCtx, PosComp } from "kaplay";
import { Vec2, type Vec2Value } from "planck";
import { p2kVec2 } from "../utils";

export type KPVec2Args = [number, number] | [Vec2Value] | [Vec2] | [];

export interface KPPosComp extends Comp {
  kpPos: Vec2;

  kpMove(x: number, y: number): void;
  kpMove(vel: Vec2): void;
  kpMoveBy(dx: number, dy: number): void;
  kpMoveBy(d: Vec2): void;
  kpMoveTo(dest: Vec2, speed?: number): void;
  kpMoveTo(x: number, y: number, speed?: number): void;
}

type KPPosCompThis = GameObj<KPPosComp>;

export default function pos(k: KAPLAYCtx, ...args: KPVec2Args): KPPosComp {
  return {
    id: "kpPos",
    kpPos: vec2FromArgs(...args),

    add(this: KPPosCompThis) {
      this.use(k.pos());

      const posComp = this.c("pos") as PosComp | null;

      if (posComp) {
        posComp.pos = p2kVec2(k, this.kpPos);
      }
    },

    update(this: KPPosCompThis) {
      const posComp = this.c("pos") as PosComp | null;

      if (posComp) {
        posComp.pos = p2kVec2(k, this.kpPos);
      }
    },

    kpMove(...margs: KPVec2Args) {
      this.kpMoveBy(vec2FromArgs(...margs).mul(k.dt()));
    },
    kpMoveBy(...margs: KPVec2Args) {
      this.kpPos = this.kpPos.add(vec2FromArgs(...margs));
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

      const diff = dest.sub(this.kpPos);

      if (diff.length() > speed * k.dt()) {
        this.kpPos.set(dest);

        return;
      }

      diff.normalize();

      this.kpMove(dest.mul(speed));
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
