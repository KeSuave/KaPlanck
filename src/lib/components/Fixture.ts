import type { Comp, GameObj, KAPLAYCtx } from "kaplay";
import type { Fixture, FixtureDef } from "planck";
import type { KPBodyComp, KPBodyUserData } from "./Body";

import type { KPShapeComp } from "./Shape";

export type KPFixtureDef = Omit<FixtureDef, "shape">;

export interface KPFixtureComp extends Comp {
  /**
   * The underlying Fixture object.
   *
   * @type {(Fixture | null)}
   */
  fixture: Fixture | null;

  getDensity(): number;
  getFriction(): number;
  getRestitution(): number;
  isSensor(): boolean;
  setDensity(density: number): void;
  setFriction(friction: number): void;
  setRestitution(restitution: number): void;
  setSensor(flag: boolean): void;
}

type FixtureThis = GameObj<KPFixtureComp & KPBodyComp & KPShapeComp>;

export default function fixture(
  // TODO: check if we can remove KAPLAYCtx here
  _k: KAPLAYCtx,
  def?: KPFixtureDef,
): KPFixtureComp {
  return {
    id: "kpFixture",
    require: ["kpBody", "kpShape"],
    fixture: null,

    getDensity() {
      if (!this.fixture) {
        throw new Error("kpFixture is not initialized");
      }

      return this.fixture.getDensity();
    },
    getFriction() {
      if (!this.fixture) {
        throw new Error("kpFixture is not initialized");
      }

      return this.fixture.getFriction();
    },
    getRestitution() {
      if (!this.fixture) {
        throw new Error("kpFixture is not initialized");
      }

      return this.fixture.getRestitution();
    },
    isSensor() {
      if (!this.fixture) {
        throw new Error("kpFixture is not initialized");
      }

      return this.fixture.isSensor();
    },
    setDensity(density: number) {
      if (!this.fixture) {
        throw new Error("kpFixture is not initialized");
      }

      return this.fixture.setDensity(density);
    },
    setFriction(friction: number) {
      if (!this.fixture) {
        throw new Error("kpFixture is not initialized");
      }

      return this.fixture.setFriction(friction);
    },
    setRestitution(restitution: number) {
      if (!this.fixture) {
        throw new Error("kpFixture is not initialized");
      }

      return this.fixture.setRestitution(restitution);
    },
    setSensor(flag: boolean) {
      if (!this.fixture) {
        throw new Error("kpFixture is not initialized");
      }

      return this.fixture.setSensor(flag);
    },

    add(this: FixtureThis) {
      if (!this.body) throw new Error("kpBody is required");

      this.fixture = this.body.createFixture({
        ...def,
        shape: this.shape,
      });

      this.fixture.shouldCollide = (that: Fixture) => {
        if (this.collisionIgnore.length === 0) return true;

        const userData = that.getBody().getUserData() as KPBodyUserData;

        const thatGameObj = userData.gameObj;

        if (thatGameObj.tags.length === 0) return true;

        return !this.collisionIgnore.some((tag) => {
          return thatGameObj.tags.includes(tag);
        });
      };
    },
  };
}
