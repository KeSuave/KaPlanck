import type {
  Comp,
  GameObj,
  KAPLAYCtx,
  KEventController,
  MouseButton,
  PosComp,
  RotateComp,
  Tag,
} from "kaplay";
import {
  testOverlap,
  type Body,
  type BodyDef,
  type BodyType,
  type Contact,
  type ContactEdge,
  type Fixture,
  type JointEdge,
  type MassData,
  type Transform,
  type Vec2,
  type Vec2Value,
} from "planck";

import { k2pVec2 } from "../internals";
import { KPUserData } from "../types";
import { getWorldContainerFromGameObj, getWorldFromGameObj } from "../utils";
import type { KPPosComp } from "./Position";
import type { KPRotateComp } from "./Rotate";

export type KPBodyDef = Omit<BodyDef, "position" | "angle">;

export interface KPBodyComp extends Comp {
  /**
   * The physics body associated with the game object.
   *
   * @type {(Body)}
   */
  body: Body;
  /**
   * Tags of other components that this body should ignore collisions with.
   *
   * @type {Tag[]}
   */
  collisionIgnore: Tag[];
  /**
   * Applies an angular impulse to the body.
   *
   * @param {number} impulse
   * @param {boolean} [wake]
   */
  applyAngularImpulse(impulse: number, wake?: boolean): void;
  /**
   * Applies a linear impulse to the body.
   *
   * @param {Vec2Value} force
   * @param {Vec2Value} point
   * @param {boolean} [wake]
   */
  applyForce(force: Vec2Value, point: Vec2Value, wake?: boolean): void;
  /**
   * Applies a force to the center of the body.
   *
   * @param {Vec2Value} force
   * @param {boolean} [wake]
   */
  applyForceToCenter(force: Vec2Value, wake?: boolean): void;
  /**
   * Applies a linear impulse to the body.
   *
   * @param {Vec2Value} impulse
   * @param {Vec2Value} point
   * @param {boolean} [wake]
   * @memberof KPBodyComp
   */
  applyLinearImpulse(
    impulse: Vec2Value,
    point: Vec2Value,
    wake?: boolean,
  ): void;
  /**
   * Applies a torque to the body.
   *
   * @param {number} torque
   * @param {boolean} [wake]
   */
  applyTorque(torque: number, wake?: boolean): void;
  /**
   * Returns the angular damping of the body.
   *
   * @return {number}
   */
  getAngularDamping(): number;
  /**
   * Returns the angular velocity of the body.
   *
   * @return {number}
   */
  getAngularVelocity(): number;
  /**
   * Returns the contact list of the body.
   *
   * @return {(ContactEdge | null)}
   */
  getContactList(): ContactEdge | null;
  /**
   * Retuns the fixture list of the body.
   *
   * @return {(Fixture | null)}
   */
  getFixtureList(): Fixture | null;
  /**
   * Returns the gravity scale of the body.
   *
   * @return {number}
   */
  getGravityScale(): number;
  /**
   * Returns the inertia of the body.
   *
   * @return {number}
   */
  getInertia(): number;
  /**
   * Returns the joint list of the body.
   *
   * @return {(JointEdge | null)}
   */
  getJointList(): JointEdge | null;
  /**
   * Returns the linear damping of the body.
   *
   * @return {number}
   */
  getLinearDamping(): number;
  /**
   * Returns the linear velocity of the body.
   *
   * @return {Vec2}
   */
  getLinearVelocity(): Vec2;
  /**
   * Returns the linear velocity from a local point.
   *
   * @param {Vec2Value} localPoint
   * @return {Vec2}
   */
  getLinearVelocityFromLocalPoint(localPoint: Vec2Value): Vec2;
  /**
   * Returns the linear velocity from a world point.
   *
   * @param {Vec2Value} worldPoint
   * @return {Vec2}
   */
  getLinearVelocityFromWorldPoint(worldPoint: Vec2Value): Vec2;
  /**
   * Returns the local center of the body.
   *
   * @return {Vec2}
   */
  getLocalCenter(): Vec2;
  /**
   * Returns the local point from a world point.
   *
   * @param {Vec2Value} worldPoint
   * @return {Vec2}
   */
  getLocalPoint(worldPoint: Vec2Value): Vec2;
  /**
   * Returns the local vector from a world vector.
   *
   * @param {Vec2Value} worldVector
   * @return {Vec2}
   */
  getLocalVector(worldVector: Vec2Value): Vec2;
  /**
   * Returns the mass data of the body.
   *
   * @return {number}
   */
  getMass(): number;
  /**
   * Returns the mass data of the body.
   *
   * @param {MassData} data
   */
  getMassData(data: MassData): void;
  /**
   * Returns the transform of the body.
   *
   * @return {Transform}
   */
  getTransform(): Transform;
  /**
   * Returns the type of the body.
   *
   * @return {BodyType}
   */
  getBodyType(): BodyType;
  /**
   * Returns the world center of the body.
   *
   * @return {Vec2}
   */
  getWorldCenter(): Vec2;
  /**
   * Returns the world point from a local point.
   *
   * @param {Vec2Value} localPoint
   * @return {Vec2}
   */
  getWorldPoint(localPoint: Vec2Value): Vec2;
  /**
   * Returns the world vector from a local vector.
   *
   * @param {Vec2Value} localVector
   * @return {Vec2}
   */
  getWorldVector(localVector: Vec2Value): Vec2;
  /**
   * Returns true if the body is active, false otherwise.
   *
   * @return {boolean}
   */
  isActive(): boolean;
  /**
   * Returns true if the body is awake, false otherwise.
   *
   * @return {boolean}
   */
  isAwake(): boolean;
  /**
   * Returns true if the body is bullet, false otherwise.
   *
   * @return {boolean}
   */
  isBullet(): boolean;
  /**
   * Returns true if the body is dynamic, false otherwise.
   *
   * @return {boolean}
   */
  isDynamic(): boolean;
  /**
   * Returns true if the body is fixed rotation, false otherwise.
   *
   * @return {boolean}
   */
  isFixedRotation(): boolean;
  /**
   * Returns true if the body is kinematic, false otherwise.
   *
   * @return {boolean}
   */
  isKinematic(): boolean;
  /**
   * Returns true if the body is sleeping allowed, false otherwise.
   *
   * @return {boolean}
   */
  isSleepingAllowed(): boolean;
  /**
   * Returns true if the body is static, false otherwise.
   *
   * @return {boolean}
   */
  isStatic(): boolean;
  /**
   * Returns true if the world is locked, false otherwise.
   *
   * @return {boolean}
   */
  isWorldLocked(): boolean;
  /**
   * Resets the mass data of the body.
   *
   */
  resetMassData(): void;
  /**
   * Sets the active state of the body.
   *
   * @param {boolean} flag
   */
  setActive(flag: boolean): void;
  /**
   * Sets the angular damping of the body.
   *
   * @param {number} damping
   */
  setAngularDamping(damping: number): void;
  /**
   * Sets the angular velocity of the body.
   *
   * @param {number} velocity
   */
  setAngularVelocity(velocity: number): void;
  /**
   * Sets the awake state of the body.
   *
   * @param {boolean} flag
   */
  setAwake(flag: boolean): void;
  /**
   * Sets the bullet state of the body.
   *
   * @param {boolean} flag
   */
  setBullet(flag: boolean): void;
  /**
   * Sets the body to be dynamic.
   *
   * @return {Body}
   */
  setDynamic(): Body;
  /**
   * Sets the fixed rotation state of the body.
   *
   * @param {boolean} flag
   */
  setFixedRotation(flag: boolean): void;
  /**
   * Sets the gravity scale of the body.
   *
   * @param {number} scale
   */
  setGravityScale(scale: number): void;
  /**
   * Sets the body to be kinematic.
   *
   * @return {Body}
   */
  setKinematic(): Body;
  /**
   * Sets the linear damping of the body.
   *
   * @param {number} damping
   */
  setLinearDamping(damping: number): void;
  /**
   * Sets the linear velocity of the body.
   *
   * @param {Vec2Value} velocity
   */
  setLinearVelocity(velocity: Vec2Value): void;
  /**
   * Sets the mass data of the body.
   *
   * @param {MassData} data
   */
  setMassData(data: MassData): void;
  /**
   * Sets sleeping allowed state of the body.
   *
   * @param {boolean} flag
   */
  setSleepingAllowed(flag: boolean): void;
  /**
   * Sets the type of the body to be static.
   *
   * @return {Body}
   */
  setStatic(): Body;
  /**
   * Sets the transform of the body.
   *
   * @param {Vec2Value} position
   * @param {number} angle
   */
  setTransform(position: Vec2Value, angle: number): void;
  /**
   * Sets the type of the body.
   *
   * @param {BodyType} type
   */
  setType(type: BodyType): void;

  /**
   * Check if the mouse has clicked on this body.
   *
   * @returns {boolean}
   */
  isClicked(): boolean;
  /**
   * Check if the mouse is hovering over this body.
   *
   * @returns {boolean}
   */
  isHovering(): boolean;
  /**
   * Checks if this game object is colliding with another game object.
   *
   * @param {GameObj} other The other game object to check for collision with.
   * @returns {Contact} The contact information if colliding, otherwise null.
   */
  checkContact(other: GameObj): Contact | null;
  /**
   * Checks if this game object is colliding with another game object.
   *
   * @param {GameObj} other The other game object to check for collision with.
   * @returns {boolean} True if colliding, false otherwise.
   */
  isColliding(other: GameObj): boolean;
  /**
   * Checks if this game object overlaps with another game object.
   *
   * @param {GameObj} other The other game object to check for overlap with.
   * @returns {boolean} True if overlapping, false otherwise.
   */
  isOverlapping(other: GameObj): boolean;
  /**
   * Add an action to be executed when this body is clicked.
   *
   * @param {() => void} action The action to execute.
   * @param {MouseButton} [btn] The mouse button that was used to click (default: MouseButton.LEFT).
   * @returns {KEventController} A controller for managing the event.
   */
  onClick(action: () => void, btn?: MouseButton): KEventController;
  /**
   * Add an action to be executed when the mouse starts hovering over this body.
   *
   * @param {() => void} action The action to execute.
   * @returns {KEventController} A controller for managing the event.
   */
  onHover(action: () => void): KEventController;
  /**
   * Add an action to be executed when the mouse updates its position while hovering over this body.
   *
   * @param {() => void} action The action to execute.
   * @returns {KEventController} A controller for managing the event.
   */
  onHoverUpdate(action: () => void): KEventController;
  /**
   * Add an action to be executed when the mouse stops hovering over this body.
   *
   * @param {() => void} action The action to execute.
   * @returns {KEventController} A controller for managing the event.
   */
  onHoverEnd(action: () => void): KEventController;
  /**
   * Add an action to be executed when this game object starts colliding with another game object
   * containing a specific tag.
   *
   * @param {Tag} tag The tag of the other game object to listen for collisions with.
   * @param {(obj: GameObj, col?: Contact) => void} action The action to execute when a collision starts.
   */
  onCollide(tag: Tag, action: (obj: GameObj, col?: Contact) => void): void;
  /**
   * Add an action to be executed when this game object starts colliding with another game object.
   *
   * @param {(obj: GameObj, col?: Contact) => void} action The action to execute when a collision starts.
   */
  onCollide(action: (obj: GameObj, col?: Contact) => void): void;
  /**
   * Add an action to be executed every frame when this game object starts colliding
   * with another game object containing a specific tag.
   *
   * @param {Tag} tag The tag of the other game object to listen for collisions with.
   * @param {(obj: GameObj, col?: Contact) => void} action The action to execute every frame.
   */
  onCollideUpdate(
    tag: Tag,
    action: (obj: GameObj, col?: Contact) => void,
  ): void;
  /**
   * Add an action to be executed every frame when this game object starts colliding
   * with another game object.
   *
   * @param {(obj: GameObj, col?: Contact) => void} action The action to execute every frame.
   */
  onCollideUpdate(action: (obj: GameObj, col?: Contact) => void): void;
  /**
   * Add an action to be executed when this game object ends colliding with another game object
   * containing a specific tag.
   *
   * @param {Tag} tag The tag of the other game object to listen for collisions with.
   * @param {(obj: GameObj, col?: Contact) => void} action The action to execute when a collision ends.
   */
  onCollideEnd(tag: Tag, action: (obj: GameObj, col?: Contact) => void): void;
  /**
   * Add an action to be executed when this game object ends colliding with another game object
   * containing a specific tag.
   *
   * @param {(obj: GameObj, col?: Contact) => void} action The action to execute when a collision ends.
   */
  onCollideEnd(action: (obj: GameObj, col?: Contact) => void): void;
  /**
   * Checks if the body contains a specific point.
   *
   * @param {Vec2Value} point The point to check for containment within the body.
   * @returns {boolean} True if the point is inside the body, false otherwise.
   */
  hasPoint(point: Vec2Value): boolean;
  /**
   * Adds the game object to a list of objects that will be destroyed when the world is not locked.
   *
   * _Please consider using `addToDestroyList` from `kpWorld` instead of this method, as this will
   * require to lookup the parent game object with `kpWorld` component._
   */
  addToDestroyList(): void;
}

type BodyCompThis = GameObj<
  KPBodyComp &
    KPPosComp &
    KPRotateComp &
    // KPPosComp adds PosComp
    PosComp &
    // KPRotateComp adds RotateComp
    RotateComp
>;
type ActionCB = (obj: GameObj, contact?: Contact) => void;
type CollideArgs = [Tag, ActionCB] | [ActionCB] | [];

export default function body(
  k: KAPLAYCtx,
  def?: KPBodyDef,
  collisionIgnore?: Tag[],
): KPBodyComp {
  let _body: Body | null = null;

  return {
    id: "kpBody",
    require: ["kpPos", "kpRotate"],
    collisionIgnore: collisionIgnore ?? [],

    get body(): Body {
      if (!_body) {
        throw new Error("kpBody is not initialized");
      }

      return _body;
    },

    applyAngularImpulse(impulse: number, wake = true): void {
      this.body.applyAngularImpulse(impulse, wake);
    },
    applyForce(force: Vec2Value, point: Vec2Value, wake?: boolean) {
      this.body.applyForce(force, point, wake);
    },
    applyForceToCenter(force: Vec2Value, wake?: boolean) {
      this.body.applyForceToCenter(force, wake);
    },
    applyLinearImpulse(impulse: Vec2Value, point: Vec2Value, wake?: boolean) {
      this.body.applyLinearImpulse(impulse, point, wake);
    },
    applyTorque(torque: number, wake?: boolean) {
      this.body.applyTorque(torque, wake);
    },
    getAngularDamping() {
      return this.body.getAngularDamping();
    },
    getAngularVelocity() {
      return this.body.getAngularVelocity();
    },
    getContactList() {
      return this.body.getContactList();
    },
    getFixtureList() {
      return this.body.getFixtureList();
    },
    getGravityScale() {
      return this.body.getGravityScale();
    },
    getInertia() {
      return this.body.getInertia();
    },
    getJointList() {
      return this.body.getJointList();
    },
    getLinearDamping() {
      return this.body.getLinearDamping();
    },
    getLinearVelocity() {
      return this.body.getLinearVelocity();
    },
    getLinearVelocityFromLocalPoint(localPoint: Vec2Value) {
      return this.body.getLinearVelocityFromLocalPoint(localPoint);
    },
    getLinearVelocityFromWorldPoint(worldPoint: Vec2Value) {
      return this.body.getLinearVelocityFromWorldPoint(worldPoint);
    },
    getLocalCenter() {
      return this.body.getLocalCenter();
    },
    getLocalPoint(worldPoint: Vec2Value) {
      return this.body.getLocalPoint(worldPoint);
    },
    getLocalVector(worldVector: Vec2Value) {
      return this.body.getLocalVector(worldVector);
    },
    getMass() {
      return this.body.getMass();
    },
    getMassData(data: MassData) {
      return this.body.getMassData(data);
    },
    getTransform() {
      return this.body.getTransform();
    },
    getBodyType() {
      return this.body.getType();
    },
    getWorldCenter() {
      return this.body.getWorldCenter();
    },
    getWorldPoint(localPoint: Vec2Value) {
      return this.body.getWorldPoint(localPoint);
    },
    getWorldVector(localVector: Vec2Value) {
      return this.body.getWorldVector(localVector);
    },
    isActive() {
      return this.body.isActive();
    },
    isAwake() {
      return this.body.isAwake();
    },
    isBullet() {
      return this.body.isBullet();
    },
    isDynamic() {
      return this.body.isDynamic();
    },
    isFixedRotation() {
      return this.body.isFixedRotation();
    },
    isKinematic() {
      return this.body.isKinematic();
    },
    isSleepingAllowed() {
      return this.body.isSleepingAllowed();
    },
    isStatic() {
      return this.body.isStatic();
    },
    isWorldLocked() {
      return this.body.isWorldLocked();
    },
    resetMassData() {
      this.body.resetMassData();
    },
    setActive(flag: boolean) {
      this.body.setActive(flag);
    },
    setAngularDamping(damping: number) {
      this.body.setAngularDamping(damping);
    },
    setAngularVelocity(velocity: number) {
      this.body.setAngularVelocity(velocity);
    },
    setAwake(flag: boolean) {
      this.body.setAwake(flag);
    },
    setBullet(flag: boolean) {
      this.body.setBullet(flag);
    },
    setDynamic() {
      return this.body.setDynamic();
    },
    setFixedRotation(flag: boolean) {
      this.body.setFixedRotation(flag);
    },
    setGravityScale(scale: number) {
      this.body.setGravityScale(scale);
    },
    setKinematic() {
      return this.body.setKinematic();
    },
    setLinearDamping(damping: number) {
      this.body.setLinearDamping(damping);
    },
    setLinearVelocity(velocity: Vec2Value) {
      this.body.setLinearVelocity(velocity);
    },
    setMassData(data: MassData) {
      this.body.setMassData(data);
    },
    setSleepingAllowed(flag: boolean) {
      this.body.setSleepingAllowed(flag);
    },
    setStatic() {
      return this.body.setStatic();
    },
    setTransform(this: BodyCompThis, position: Vec2Value, angle: number) {
      this.setKPPosition(position);
      this.setKPAngle(angle);
    },
    setType(type: BodyType) {
      this.body.setType(type);
    },

    isClicked() {
      return k.isMousePressed() && this.isHovering();
    },
    isHovering(this: BodyCompThis) {
      return this.hasPoint(k2pVec2(k.toWorld(k.mousePos())));
    },
    checkContact(this: BodyCompThis, other: GameObj) {
      for (let edge = this.body.getContactList(); edge; edge = edge.next) {
        const gameObjA = (
          edge.contact.getFixtureA().getUserData() as KPUserData
        ).gameObj;
        const gameObjB = (
          edge.contact.getFixtureB().getUserData() as KPUserData
        ).gameObj;

        if (
          (gameObjA === this && gameObjB === other) ||
          (gameObjB === this && gameObjA === other)
        ) {
          return edge.contact;
        }
      }

      return null;
    },
    isColliding(other: GameObj) {
      return this.checkContact(other) !== null;
    },
    isOverlapping(other: GameObj) {
      for (
        let thisFixture = this.body.getFixtureList();
        thisFixture;
        thisFixture = thisFixture.getNext()
      ) {
        for (
          let otherFixture = other.body?.getFixtureList();
          otherFixture;
          otherFixture = otherFixture.getNext()
        ) {
          const shapeA = thisFixture.getShape();
          const shapeB = otherFixture.getShape();
          const bodyA = thisFixture.getBody();
          const bodyB = otherFixture.getBody();

          if (
            testOverlap(
              shapeA,
              -1,
              shapeB,
              -1,
              bodyA.getTransform(),
              bodyB.getTransform(),
            )
          ) {
            return true;
          }
        }
      }

      return false;
    },
    onClick(this: BodyCompThis, action: () => void, btn = "left") {
      const evt = k.onMousePress(btn, () => {
        if (this.isHovering()) action();
      });

      this.onDestroy(() => evt.cancel());

      return evt;
    },
    onHover(this: BodyCompThis, action: () => void) {
      let hovering = false;

      return this.onUpdate(() => {
        if (!hovering) {
          if (this.isHovering()) {
            hovering = true;

            action();
          }
        } else {
          hovering = this.isHovering();
        }
      });
    },
    onHoverUpdate(this: BodyCompThis, action: () => void) {
      return this.onUpdate(() => {
        if (this.isHovering()) action();
      });
    },
    onHoverEnd(this: BodyCompThis, action: () => void) {
      let hovering = false;

      return this.onUpdate(() => {
        if (hovering) {
          if (!this.isHovering()) {
            hovering = false;

            action();
          }
        } else {
          hovering = this.isHovering();
        }
      });
    },
    onCollide(this: BodyCompThis, ...args: CollideArgs) {
      let tag: Tag | null = null;
      let cb: ActionCB = () => {};

      if (args.length === 2) {
        tag = args[0] as Tag;
        cb = args[1];
      } else {
        cb = args[0] as ActionCB;
      }

      this.body.getWorld().on("begin-contact", (contact) => {
        handleCollisionEvent(this, contact, tag, cb);
      });
    },
    onCollideUpdate(this: BodyCompThis, ...args: CollideArgs) {
      const world = this.body.getWorld();

      let isColliding = false;
      let otherGameObj: GameObj | null = null;
      let currentContact: Contact | null = null;
      let tag: Tag | null = null;
      let cb: ActionCB = () => {};

      if (args.length === 2) {
        tag = args[0] as Tag;
        cb = args[1];
      } else {
        cb = args[0] as ActionCB;
      }

      world.on("begin-contact", (contact) => {
        handleCollisionEvent(this, contact, tag, (other) => {
          isColliding = true;
          otherGameObj = other;
          currentContact = contact;

          k.debug.log("handling begin contact");
        });
      });

      world.on("end-contact", (contact) => {
        handleCollisionEvent(this, contact, tag, () => {
          isColliding = false;
          otherGameObj = null;
          currentContact = null;

          k.debug.log("handling end contact");
        });
      });

      k.onFixedUpdate(() => {
        if (!isColliding || !otherGameObj || !currentContact) return;

        cb(otherGameObj, currentContact);
      });
    },
    onCollideEnd(this: BodyCompThis, ...args: CollideArgs) {
      let tag: Tag | null = null;
      let cb: ActionCB = () => {};

      if (args.length === 2) {
        tag = args[0] as Tag;
        cb = args[1];
      } else {
        cb = args[0] as ActionCB;
      }

      this.body.getWorld().on("end-contact", (contact) => {
        handleCollisionEvent(this, contact, tag, cb);
      });
    },
    hasPoint(point: Vec2Value) {
      for (
        let fixture = this.body.getFixtureList();
        fixture;
        fixture = fixture.getNext()
      ) {
        if (fixture.testPoint(point)) {
          return true;
        }
      }

      return false;
    },
    addToDestroyList(this: BodyCompThis) {
      const worldContainer = getWorldContainerFromGameObj(this);

      if (!worldContainer) {
        throw new Error("kpBody requires to be a descendant of kpWorld");
      }

      worldContainer.addToDestroyList(this);
    },

    add(this: BodyCompThis) {
      const world = getWorldFromGameObj(this);

      if (!world) {
        throw new Error("kpBody requires to be a descendant of kpWorld");
      }

      const userData = def?.userData ?? {};

      _body = world.createBody({
        ...def,
        position: k2pVec2(this.pos),
        angle: k.deg2rad(this.angle),
        userData: {
          ...userData,
          gameObj: this,
        },
      });
    },
    fixedUpdate(this: BodyCompThis) {
      this.setKPPosition(this.body.getPosition(), true);
      this.setKPAngle(this.body.getAngle(), true);
    },
    destroy(this: BodyCompThis) {
      const world = this.body.getWorld();

      world.destroyBody(this.body);

      _body = null;
    },
  };
}

function handleCollisionEvent(
  thisGameObj: BodyCompThis,
  contact: Contact,
  tag: Tag | null,
  cb: ActionCB,
) {
  const gameObjA = (contact.getFixtureA().getUserData() as KPUserData).gameObj;
  const gameObjB = (contact.getFixtureB().getUserData() as KPUserData).gameObj;

  let thatGameObj = gameObjA;

  if (gameObjA === thisGameObj) {
    thatGameObj = gameObjB;
  } else if (gameObjB !== thisGameObj) {
    return;
  }

  if (tag === null) {
    cb(thatGameObj, contact);

    return;
  }

  if (thatGameObj?.tags.includes(tag)) {
    cb(thatGameObj, contact);
  }
}
