import type { Comp, GameObj, KAPLAYCtx } from "kaplay";
import type { Body, Contact, Joint, Vec2, Vec2Value, WorldDef } from "planck";

import { World } from "planck";
import type { KPUserData } from "../types";
import type { KPBodyComp } from "./Body";
import type { KPFixtureComp } from "./Fixture";
import type { KPJointComp } from "./Joint";

export interface KPWorldComp extends Comp {
  /**
   * The World
   *
   * @type {World}
   */
  world: World;

  /**
   * Returns true if world allows sleeping.
   *
   * @return {boolean}
   */
  getAllowSleeping(): boolean;
  /**
   * Returns the number of bodies in the world.
   *
   * @return {number}
   */
  getBodyCount(): number;
  /**
   * Returns the first body in the list, or null if there are no bodies.
   *
   * @return {(Body | null)}
   */
  getBodyList(): Body | null;
  /**
   * Returns the number of contacts in the world.
   *
   * @return {number}
   */
  getContactCount(): number;
  /**
   * Returns the gravity vector of the world.
   *
   * @return {Vec2}
   */
  getGravity(): Vec2;
  /**
   * Returns the joint count in the world.
   *
   * @return {number}
   */
  getJointCount(): number;
  /**
   * Returns the first joint in the list, or null if there are no joints.
   *
   * @return {(Joint | null)}
   */
  getJointList(): Joint | null;
  /**
   * Returns true if the world is locked, false otherwise.
   *
   * @return {boolean}
   */
  isLocked(): boolean;
  /**
   * Casts a ray from point1 to point2 in the world and calls an action function for each body hit.
   *
   * @param {Vec2} point1
   * @param {Vec2} point2
   * @param {(gameObj: GameObj,point: Vec2,normal: Vec2,fraction: number) => number} action
   */
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
  /**
   * Sets the state of allowing sleeping in the world.
   *
   * @param {boolean} flag
   */
  setAllowSleeping(flag: boolean): void;
  /**
   * Sets the gravity of the world.
   *
   * @param {Vec2Value} gravity
   */
  setGravity(gravity: Vec2Value): void;
  /**
   * Sets the position of the world origin.
   *
   * @param {Vec2Value} newOrigin
   */
  shiftOrigin(newOrigin: Vec2Value): void;

  /**
   * An event listener for when two objects begin to touch.
   *
   * @param {(objA: GameObj, objB: GameObj, contact?: Contact) => void} action
   */
  onContactBegin(
    action: (objA: GameObj, objB: GameObj, contact?: Contact) => void,
  ): void;
  /**
   * An event listener for when two objects stop touching.
   *
   * @param {(objA: GameObj, objB: GameObj, contact?: Contact) => void} action
   */
  onContactEnd(
    action: (objA: GameObj, objB: GameObj, contact?: Contact) => void,
  ): void;
  /**
   * An event listener for when two objects are touching and a contact is being solved.
   *
   * @param {(objA: GameObj, objB: GameObj, contact?: Contact) => void} action
   */
  onContactPreSolve(
    action: (objA: GameObj, objB: GameObj, contact?: Contact) => void,
  ): void;
  /**
   * An event listener for when two objects are touching and a contact has been solved.
   *
   * @param {(objA: GameObj, objB: GameObj, contact?: Contact) => void} action
   */
  onContactPostSolve(
    action: (objA: GameObj, objB: GameObj, contact?: Contact) => void,
  ): void;
  /**
   * An event listener for when a body is removed from the world.
   *
   * @param {(bodyGameObj: GameObj<KPBodyComp>) => void} action
   */
  onRemoveBody(action: (bodyGameObj: GameObj<KPBodyComp>) => void): void;
  /**
   * An event listener for when a fixture is removed from the body.
   *
   * @param {(fixtureGameObj: GameObj<KPFixtureComp>) => void} action
   */
  onRemoveFixture(
    action: (fixtureGameObj: GameObj<KPFixtureComp>) => void,
  ): void;
  /**
   * An event listener for when a joint is removed from the world.
   *
   * @param {(jointGameObj: GameObj<KPJointComp>) => void} action
   */
  onRemoveJoint(action: (jointGameObj: GameObj<KPJointComp>) => void): void;

  /**
   * Add a GameObj to the destroy list, which will be destroyed once the world is not locked.
   *
   * @param {GameObj} obj The GameObj to add to the destroy list.
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
        const kpGameObj = (fixture.getUserData() as KPUserData).gameObj;

        return action(kpGameObj, point, normal, fraction);
      });
    },
    setAllowSleeping(flag: boolean) {
      this.world.setAllowSleeping(flag);
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
    onRemoveBody(
      this: KPWorldCompThis,
      action: (bodyGameObj: GameObj<KPBodyComp>) => void,
    ) {
      this.on("removeBody", action);
    },
    onRemoveFixture(
      this: KPWorldCompThis,
      action: (fixtureGameObj: GameObj<KPFixtureComp>) => void,
    ) {
      this.on("removeFixture", action);
    },
    onRemoveJoint(
      this: KPWorldCompThis,
      action: (jointGameObj: GameObj<KPJointComp>) => void,
    ) {
      this.on("removeJoint", action);
    },

    addToDestroyList(obj: GameObj) {
      _destroyList.push(obj);
    },

    add(this: KPWorldCompThis) {
      this.world.on("begin-contact", (contact) => {
        const a = contact.getFixtureA().getUserData() as KPUserData;
        const b = contact.getFixtureB().getUserData() as KPUserData;

        if (a && b) {
          this.trigger("contactBegin", a.gameObj, b.gameObj, contact);
        }
      });
      this.world.on("end-contact", (contact) => {
        const a = contact.getFixtureA().getUserData() as KPUserData;
        const b = contact.getFixtureB().getUserData() as KPUserData;

        if (a && b) {
          this.trigger("contactEnd", a.gameObj, b.gameObj, contact);
        }
      });
      this.world.on("pre-solve", (contact) => {
        const a = contact.getFixtureA().getUserData() as KPUserData;
        const b = contact.getFixtureB().getUserData() as KPUserData;

        if (a && b) {
          this.trigger("contactPreSolve", a.gameObj, b.gameObj, contact);
        }
      });
      this.world.on("post-solve", (contact) => {
        const a = contact.getFixtureA().getUserData() as KPUserData;
        const b = contact.getFixtureB().getUserData() as KPUserData;

        if (a && b) {
          this.trigger("contactPostSolve", a.gameObj, b.gameObj, contact);
        }
      });

      this.world.on("remove-body", (body) => {
        const data = body.getUserData() as KPUserData;

        if (data) {
          this.trigger("removeBody", data.gameObj);
        }
      });
      this.world.on("remove-fixture", (fixture) => {
        const data = fixture.getUserData() as KPUserData;

        if (data) {
          this.trigger("removeFixture", data.gameObj);
        }
      });
      this.world.on("remove-joint", (joint) => {
        const data = joint.getUserData() as KPUserData;

        if (data) {
          this.trigger("removeJoint", data.gameObj);
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
