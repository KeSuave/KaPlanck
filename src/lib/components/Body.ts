import type { Comp, GameObj } from "kaplay";
import {
  Body,
  type BodyDef,
  type BodyType,
  type ContactEdge,
  type Fixture,
  type JointEdge,
  type MassData,
  type Transform,
  type Vec2,
  type Vec2Value,
} from "planck";

import { getWorldFromGameObj } from "../utils";
import type { KPPosComp } from "./Position";
import type { KPRotateComp } from "./Rotate";

export interface KPBodyComp extends Comp {
  /**
   * The physics body associated with the game object.
   *
   * @type {(Body | null)}
   */
  body: Body | null;
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
  getNextBody(): Body | null;
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
}

type BodyCompThis = GameObj<KPBodyComp & KPPosComp & KPRotateComp>;

export default function body(
  def?: Omit<BodyDef, "position" | "angle">,
): KPBodyComp {
  return {
    id: "kpBody",
    require: ["kpPos", "kpRotate"],
    body: null,

    applyAngularImpulse(impulse: number, wake = true): void {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      this.body.applyAngularImpulse(impulse, wake);
    },
    applyForce(force: Vec2Value, point: Vec2Value, wake?: boolean) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      this.body.applyForce(force, point, wake);
    },
    applyForceToCenter(force: Vec2Value, wake?: boolean) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      this.body.applyForceToCenter(force, wake);
    },
    applyLinearImpulse(impulse: Vec2Value, point: Vec2Value, wake?: boolean) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      this.body.applyLinearImpulse(impulse, point, wake);
    },
    applyTorque(torque: number, wake?: boolean) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      this.body.applyTorque(torque, wake);
    },
    getAngularDamping() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.getAngularDamping();
    },
    getAngularVelocity() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.getAngularVelocity();
    },
    getContactList() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.getContactList();
    },
    getFixtureList() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.getFixtureList();
    },
    getGravityScale() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.getGravityScale();
    },
    getInertia() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.getInertia();
    },
    getJointList() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.getJointList();
    },
    getLinearDamping() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.getLinearDamping();
    },
    getLinearVelocity() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.getLinearVelocity();
    },
    getLinearVelocityFromLocalPoint(localPoint: Vec2Value) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.getLinearVelocityFromLocalPoint(localPoint);
    },
    getLinearVelocityFromWorldPoint(worldPoint: Vec2Value) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.getLinearVelocityFromWorldPoint(worldPoint);
    },
    getLocalCenter() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.getLocalCenter();
    },
    getLocalPoint(worldPoint: Vec2Value) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.getLocalPoint(worldPoint);
    },
    getLocalVector(worldVector: Vec2Value) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.getLocalVector(worldVector);
    },
    getMass() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.getMass();
    },
    getMassData(data: MassData) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.getMassData(data);
    },
    getNextBody() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.getNext();
    },
    getTransform() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.getTransform();
    },
    getBodyType() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.getType();
    },
    getWorldCenter() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.getWorldCenter();
    },
    getWorldPoint(localPoint: Vec2Value) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.getWorldPoint(localPoint);
    },
    getWorldVector(localVector: Vec2Value) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.getWorldVector(localVector);
    },
    isActive() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.isActive();
    },
    isAwake() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.isAwake();
    },
    isBullet() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.isBullet();
    },
    isDynamic() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.isDynamic();
    },
    isFixedRotation() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.isFixedRotation();
    },
    isKinematic() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.isKinematic();
    },
    isSleepingAllowed() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.isSleepingAllowed();
    },
    isStatic() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.isStatic();
    },
    isWorldLocked() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.isWorldLocked();
    },
    resetMassData() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      this.body.resetMassData();
    },
    setActive(flag: boolean) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      this.body.setActive(flag);
    },
    setAngularDamping(damping: number) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      this.body.setAngularDamping(damping);
    },
    setAngularVelocity(velocity: number) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      this.body.setAngularVelocity(velocity);
    },
    setAwake(flag: boolean) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      this.body.setAwake(flag);
    },
    setBullet(flag: boolean) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      this.body.setBullet(flag);
    },
    setDynamic() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.setDynamic();
    },
    setFixedRotation(flag: boolean) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      this.body.setFixedRotation(flag);
    },
    setGravityScale(scale: number) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      this.body.setGravityScale(scale);
    },
    setKinematic() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.setKinematic();
    },
    setLinearDamping(damping: number) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      this.body.setLinearDamping(damping);
    },
    setLinearVelocity(velocity: Vec2Value) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      this.body.setLinearVelocity(velocity);
    },
    setMassData(data: MassData) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      this.body.setMassData(data);
    },
    setSleepingAllowed(flag: boolean) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      this.body.setSleepingAllowed(flag);
    },
    setStatic() {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      return this.body.setStatic();
    },
    setTransform(this: BodyCompThis, position: Vec2Value, angle: number) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      this.setKPPosition(position);
      this.setKPAngle(angle);
    },
    setType(type: BodyType) {
      if (!this.body) {
        throw new Error("kpBody is not initialized");
      }

      this.body.setType(type);
    },

    add(this: BodyCompThis) {
      const world = getWorldFromGameObj(this);

      if (!world) {
        throw new Error("kpBody requires to be a descendant of kpWorld");
      }

      this.body = world.createBody({
        ...def,
        position: this.getKPPosition(),
        angle: this.getKPAngle(),
      });
    },
    fixedUpdate(this: BodyCompThis) {
      if (!this.body) return;

      this.setKPPosition(this.body.getPosition());
      this.setKPAngle(this.body.getAngle());
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
