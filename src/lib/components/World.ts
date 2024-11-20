import type { Comp, GameObj, KAPLAYCtx, Tag } from "kaplay";
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
  onCollide(
    tagA: Tag,
    tagB: Tag,
    action: (objA: GameObj, objB: GameObj, contact?: Contact) => void,
  ): void;
  onCollideUpdate(
    tagA: Tag,
    tagB: Tag,
    action: (objA: GameObj, objB: GameObj, contact?: Contact) => void,
  ): void;
  onCollideEnd(
    tagA: Tag,
    tagB: Tag,
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
        if (a && b) this.trigger("contactBegin", a.gameObj, b.gameObj, contact);
      });
      this.world.on("end-contact", (contact) => {
        const a = contact.getFixtureA().getUserData() as KPFixtureUserData;
        const b = contact.getFixtureB().getUserData() as KPFixtureUserData;
        if (a && b) this.trigger("contactEnd", a.gameObj, b.gameObj, contact);
      });
      this.world.on("pre-solve", (contact) => {
        const a = contact.getFixtureA().getUserData() as KPFixtureUserData;
        const b = contact.getFixtureB().getUserData() as KPFixtureUserData;
        if (a && b)
          this.trigger("contactPreSolve", a.gameObj, b.gameObj, contact);
      });
      this.world.on("post-solve", (contact) => {
        const a = contact.getFixtureA().getUserData() as KPFixtureUserData;
        const b = contact.getFixtureB().getUserData() as KPFixtureUserData;
        if (a && b)
          this.trigger("contactPostSolve", a.gameObj, b.gameObj, contact);
      });
    },

    onContactBegin(
      this: KPWorldCompThis,
      action: (objA: GameObj, objB: GameObj) => void,
    ) {
      this.on("contactBegin", action);
    },
    onContactEnd(
      this: KPWorldCompThis,
      action: (objA: GameObj, objB: GameObj) => void,
    ) {
      this.on("contactEnd", action);
    },
    onContactPreSolve(
      this: KPWorldCompThis,
      action: (objA: GameObj, objB: GameObj) => void,
    ) {
      this.on("contactPreSolve", action);
    },
    onContactPostSolve(
      this: KPWorldCompThis,
      action: (objA: GameObj, objB: GameObj) => void,
    ) {
      this.on("contactPostSolve", action);
    },
    onCollide(
      this: KPWorldCompThis,
      tagA: Tag,
      tagB: Tag,
      action: (objA: GameObj, objB: GameObj, contact?: Contact) => void,
    ) {
      this.on(
        "contactPreSolve",
        (objA: GameObj, objB: GameObj, contact: Contact) => {
          if (!objA.tags.includes(tagA) && !objB.tags.includes(tagA)) return;
          if (!objA.tags.includes(tagB) && !objB.tags.includes(tagB)) return;
          action(objA, objB, contact);
        },
      );
    },
    onCollideUpdate(
      this: KPWorldCompThis,
      tagA: Tag,
      tagB: Tag,
      action: (objA: GameObj, objB: GameObj, contact?: Contact) => void,
    ) {
      let isColliding = false;
      let currentObjA: GameObj | null = null;
      let currentObjB: GameObj | null = null;
      let currentContact: Contact | null = null;

      this.on(
        "contactBegin",
        (objA: GameObj, objB: GameObj, contact: Contact) => {
          if (!objA.tags.includes(tagA) && !objB.tags.includes(tagA)) return;
          if (!objA.tags.includes(tagB) && !objB.tags.includes(tagB)) return;
          isColliding = true;
          currentContact = contact;
          currentObjA = objA;
          currentObjB = objB;
        },
      );

      this.on("contactEnd", (objA: GameObj, objB: GameObj) => {
        if (!objA.tags.includes(tagA) && !objB.tags.includes(tagA)) return;
        if (!objA.tags.includes(tagB) && !objB.tags.includes(tagB)) return;
        isColliding = false;
        currentContact = null;
        currentObjA = null;
        currentObjB = null;
      });

      this.on("fixedUpdate", () => {
        if (!isColliding || !currentObjA || !currentObjB || !currentContact)
          return;

        action(currentObjA, currentObjB, currentContact);
      });
    },
    onCollideEnd(
      this: KPWorldCompThis,
      tagA: Tag,
      tagB: Tag,
      action: (objA: GameObj, objB: GameObj, contact?: Contact) => void,
    ) {
      this.on(
        "contactEnd",
        (objA: GameObj, objB: GameObj, contact: Contact) => {
          if (!objA.tags.includes(tagA) && !objB.tags.includes(tagA)) return;
          if (!objA.tags.includes(tagB) && !objB.tags.includes(tagB)) return;
          action(objA, objB, contact);
        },
      );
    },

    fixedUpdate() {
      this.world.step(k.fixedDt());
    },
  };
}
