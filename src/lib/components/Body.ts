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

import { getWorldFromGameObj, k2pVec2 } from "../utils";
import type { KPPosComp } from "./Position";
import type { KPRotateComp } from "./Rotate";

export type KPBodyDef = Omit<BodyDef, "position" | "angle">;

export interface KPBodyUserData {
  gameObj: GameObj;
}

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
   * @internal
   * The color to use for debugging the physics body.
   *
   * @type {{ r: number; g: number; b: number }}
   */
  inspectColor: { r: number; g: number; b: number };

  // TODO: Add docs
  applyAngularImpulse(impulse: number, wake?: boolean): void;
  applyForce(force: Vec2Value, point: Vec2Value, wake?: boolean): void;
  applyForceToCenter(force: Vec2Value, wake?: boolean): void;
  applyLinearImpulse(
    impulse: Vec2Value,
    point: Vec2Value,
    wake?: boolean,
  ): void;
  applyTorque(torque: number, wake?: boolean): void;
  getAngularDamping(): number;
  getAngularVelocity(): number;
  getContactList(): ContactEdge | null;
  getFixtureList(): Fixture | null;
  getGravityScale(): number;
  getInertia(): number;
  getJointList(): JointEdge | null;
  getLinearDamping(): number;
  getLinearVelocity(): Vec2;
  getLinearVelocityFromLocalPoint(localPoint: Vec2Value): Vec2;
  getLinearVelocityFromWorldPoint(worldPoint: Vec2Value): Vec2;
  getLocalCenter(): Vec2;
  getLocalPoint(worldPoint: Vec2Value): Vec2;
  getLocalVector(worldVector: Vec2Value): Vec2;
  getMass(): number;
  getMassData(data: MassData): void;
  getTransform(): Transform;
  getBodyType(): BodyType;
  getWorldCenter(): Vec2;
  getWorldPoint(localPoint: Vec2Value): Vec2;
  getWorldVector(localVector: Vec2Value): Vec2;
  isActive(): boolean;
  isAwake(): boolean;
  isBullet(): boolean;
  isDynamic(): boolean;
  isFixedRotation(): boolean;
  isKinematic(): boolean;
  isSleepingAllowed(): boolean;
  isStatic(): boolean;
  isWorldLocked(): boolean;
  resetMassData(): void;
  setActive(flag: boolean): void;
  setAngularDamping(damping: number): void;
  setAngularVelocity(velocity: number): void;
  setAwake(flag: boolean): void;
  setBullet(flag: boolean): void;
  setDynamic(): Body;
  setFixedRotation(flag: boolean): void;
  setGravityScale(scale: number): void;
  setKinematic(): Body;
  setLinearDamping(damping: number): void;
  setLinearVelocity(velocity: Vec2Value): void;
  setMassData(data: MassData): void;
  setSleepingAllowed(flag: boolean): void;
  setStatic(): Body;
  setTransform(position: Vec2Value, angle: number): void;
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
          edge.contact.getFixtureA().getBody().getUserData() as KPBodyUserData
        ).gameObj;
        const gameObjB = (
          edge.contact.getFixtureB().getBody().getUserData() as KPBodyUserData
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
      this.setKPPosition(this.body.getPosition());
      this.setKPAngle(this.body.getAngle());
    },
    destroy(this: BodyCompThis) {
      const world = this.body.getWorld();

      world.destroyBody(this.body);

      _body = null;
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

function handleCollisionEvent(
  thisGameObj: BodyCompThis,
  contact: Contact,
  tag: Tag | null,
  cb: ActionCB,
) {
  const gameObjA = (
    contact.getFixtureA().getBody().getUserData() as KPBodyUserData
  ).gameObj;
  const gameObjB = (
    contact.getFixtureB().getBody().getUserData() as KPBodyUserData
  ).gameObj;

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
