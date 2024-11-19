import type { Comp, KAPLAYCtx } from "kaplay";
import type { Vec2, WorldDef } from "planck";

import { World } from "planck";

export interface KPWorldComp extends Comp {
  world: World;
}

export default function world(
  k: KAPLAYCtx,
  def?: WorldDef | Vec2 | null,
): KPWorldComp {
  return {
    id: "kpWorld",
    world: new World(def),

    fixedUpdate() {
      this.world.step(k.fixedDt());
    },
  };
}
