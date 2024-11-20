import type { Comp, GameObj, KAPLAYCtx } from "kaplay";
import type { Contact, Vec2, WorldDef } from "planck";

import type { KPFixtureUserData } from "./Fixture";
import { World } from "planck";

export interface KPWorldComp extends Comp {
  world: World;

  onContactBegin(
    action: (objA: GameObj, objB: GameObj, contact?: Contact) => void,
  ): void;
  onContactEnd(
    action: (objA: GameObj, objB: GameObj, contact?: Contact) => void,
  ): void;
  onContactPreSolve(
    action: (objA: GameObj, objB: GameObj, contact?: Contact) => void,
  ): void;
  onContactPostSolve(
    action: (objA: GameObj, objB: GameObj, contact?: Contact) => void,
  ): void;
}

type KPWorldCompThis = GameObj<KPWorldComp>;

export default function world(
  k: KAPLAYCtx,
  def?: WorldDef | Vec2 | null,
): KPWorldComp {
  return {
    id: "kpWorld",
    world: new World(def),

    add(this: KPWorldCompThis) {
      this.world.on("begin-contact", (contact) => {
        const a = contact.getFixtureA().getUserData() as KPFixtureUserData;
        const b = contact.getFixtureB().getUserData() as KPFixtureUserData;
        if (a && b) {
          this.trigger("contactBegin", a.gameObj, b.gameObj, contact);
        }
      });
      this.world.on("end-contact", (contact) => {
        const a = contact.getFixtureA().getUserData() as KPFixtureUserData;
        const b = contact.getFixtureB().getUserData() as KPFixtureUserData;
        if (a && b) {
          this.trigger("contactEnd", a.gameObj, b.gameObj, contact);
        }
      });
      this.world.on("pre-solve", (contact) => {
        const a = contact.getFixtureA().getUserData() as KPFixtureUserData;
        const b = contact.getFixtureB().getUserData() as KPFixtureUserData;
        if (a && b) {
          this.trigger("contactPreSolve", a.gameObj, b.gameObj, contact);
        }
      });
      this.world.on("post-solve", (contact) => {
        const a = contact.getFixtureA().getUserData() as KPFixtureUserData;
        const b = contact.getFixtureB().getUserData() as KPFixtureUserData;
        if (a && b) {
          this.trigger("contactPostSolve", a.gameObj, b.gameObj, contact);
        }
      });
    },

    onContactBegin(
      this: KPWorldCompThis,
      action: (objA: GameObj, objB: GameObj, contact: Contact) => void,
    ) {
      this.on("contactBegin", action);
    },
    onContactEnd(
      this: KPWorldCompThis,
      action: (objA: GameObj, objB: GameObj, contact: Contact) => void,
    ) {
      this.on("contactEnd", action);
    },
    onContactPreSolve(
      this: KPWorldCompThis,
      action: (objA: GameObj, objB: GameObj, contact: Contact) => void,
    ) {
      this.on("contactPreSolve", action);
    },
    onContactPostSolve(
      this: KPWorldCompThis,
      action: (objA: GameObj, objB: GameObj, contact: Contact) => void,
    ) {
      this.on("contactPostSolve", action);
    },

    fixedUpdate() {
      this.world.step(k.fixedDt());
    },
  };
}
