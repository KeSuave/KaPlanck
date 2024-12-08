import type { Body, Contact, Joint, Vec2, Vec2Value, WorldDef } from "planck";
import type { Comp, GameObj, KAPLAYCtx } from "kaplay";

import type { KPBodyUserData } from "./Body";
import { World } from "planck";

export interface KPWorldComp extends Comp {
  world: World;

  getAllowSleeping(): boolean;
  getAutoClearForces(): boolean;
  getBodyCount(): number;
  getBodyList(): Body | null;
  getContactCount(): number;
  getGravity(): Vec2;
  getJointCount(): number;
  getJointList(): Joint | null;
  isLocked(): boolean;
  rayCast(
    point1: Vec2,
    point2: Vec2,
    action: (
      gameObj: GameObj,
      point: Vec2,
      normal: Vec2,
      fraction: number,
    ) => number,
  ): void;
  setAllowSleeping(flag: boolean): void;
  setAutoClearForces(flag: boolean): void;
  setGravity(gravity: Vec2Value): void;
  shiftOrigin(newOrigin: Vec2Value): void;

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

  /**
   * Add a GameObj to the destroy list, which will be destroyed once the world is not locked.
   *
   * @param {GameObj} obj The GameObj to add to the destroy list.
   * @memberof KPWorldComp
   */
  addToDestroyList(obj: GameObj): void;
}

type KPWorldCompThis = GameObj<KPWorldComp>;

export default function world(
  k: KAPLAYCtx,
  def?: WorldDef | Vec2,
): KPWorldComp {
  const _destroyList: GameObj[] = [];

  return {
    id: "kpWorld",
    world: new World(def),

    getAllowSleeping() {
      return this.world.getAllowSleeping();
    },
    getAutoClearForces() {
      return this.world.getAutoClearForces();
    },
    getBodyCount() {
      return this.world.getBodyCount();
    },
    getBodyList() {
      return this.world.getBodyList();
    },
    getContactCount() {
      return this.world.getContactCount();
    },
    getGravity() {
      return this.world.getGravity();
    },
    getJointCount() {
      return this.world.getJointCount();
    },
    getJointList() {
      return this.world.getJointList();
    },
    isLocked() {
      return this.world.isLocked();
    },
    rayCast(
      point1: Vec2,
      point2: Vec2,
      action: (
        gameObj: GameObj,
        point: Vec2,
        normal: Vec2,
        fraction: number,
      ) => number,
    ) {
      this.world.rayCast(point1, point2, (fixture, point, normal, fraction) => {
        const kpGameObj = (fixture.getBody().getUserData() as KPBodyUserData)
          .gameObj;

        return action(kpGameObj, point, normal, fraction);
      });
    },
    setAllowSleeping(flag: boolean) {
      this.world.setAllowSleeping(flag);
    },
    setAutoClearForces(flag: boolean) {
      this.world.setAutoClearForces(flag);
    },
    setGravity(gravity: Vec2Value) {
      this.world.setGravity(gravity);
    },
    shiftOrigin(newOrigin: Vec2Value) {
      this.world.shiftOrigin(newOrigin);
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
    addToDestroyList(obj: GameObj) {
      _destroyList.push(obj);
    },

    add(this: KPWorldCompThis) {
      this.world.on("begin-contact", (contact) => {
        const a = contact
          .getFixtureA()
          .getBody()
          .getUserData() as KPBodyUserData;
        const b = contact
          .getFixtureB()
          .getBody()
          .getUserData() as KPBodyUserData;

        if (a && b) {
          this.trigger("contactBegin", a.gameObj, b.gameObj, contact);
        }
      });
      this.world.on("end-contact", (contact) => {
        const a = contact
          .getFixtureA()
          .getBody()
          .getUserData() as KPBodyUserData;
        const b = contact
          .getFixtureB()
          .getBody()
          .getUserData() as KPBodyUserData;

        if (a && b) {
          this.trigger("contactEnd", a.gameObj, b.gameObj, contact);
        }
      });
      this.world.on("pre-solve", (contact) => {
        const a = contact
          .getFixtureA()
          .getBody()
          .getUserData() as KPBodyUserData;
        const b = contact
          .getFixtureB()
          .getBody()
          .getUserData() as KPBodyUserData;

        if (a && b) {
          this.trigger("contactPreSolve", a.gameObj, b.gameObj, contact);
        }
      });
      this.world.on("post-solve", (contact) => {
        const a = contact
          .getFixtureA()
          .getBody()
          .getUserData() as KPBodyUserData;
        const b = contact
          .getFixtureB()
          .getBody()
          .getUserData() as KPBodyUserData;

        if (a && b) {
          this.trigger("contactPostSolve", a.gameObj, b.gameObj, contact);
        }
      });
    },
    fixedUpdate() {
      this.world.step(k.fixedDt());
    },
    update() {
      if (this.world.isLocked()) return;

      while (_destroyList.length > 0) {
        const obj = _destroyList.pop();

        if (!obj) continue;

        obj.destroy();
      }
    },
  };
}
