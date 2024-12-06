import type { Comp, GameObj, KAPLAYCtx } from "kaplay";
import type { Fixture, FixtureDef } from "planck";
import type { KPBodyComp, KPBodyUserData } from "./Body";

import type { KPShapeComp } from "./Shape";

export type KPFixtureDef = Omit<FixtureDef, "shape">;

export interface KPFixtureComp extends Comp {
  /**
   * The underlying Fixture object.
   *
   * @type {(Fixture)}
   */
  fixture: Fixture;

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
  let _fixture: Fixture | null;

  return {
    id: "kpFixture",
    require: ["kpBody", "kpShape"],

    get fixture() {
      if (!_fixture) {
        throw new Error("kpFixture is not initialized");
      }

      return _fixture;
    },

    getDensity() {
      return this.fixture.getDensity();
    },
    getFriction() {
      return this.fixture.getFriction();
    },
    getRestitution() {
      return this.fixture.getRestitution();
    },
    isSensor() {
      return this.fixture.isSensor();
    },
    setDensity(density: number) {
      return this.fixture.setDensity(density);
    },
    setFriction(friction: number) {
      return this.fixture.setFriction(friction);
    },
    setRestitution(restitution: number) {
      return this.fixture.setRestitution(restitution);
    },
    setSensor(flag: boolean) {
      return this.fixture.setSensor(flag);
    },

    add(this: FixtureThis) {
      if (!this.body) throw new Error("kpBody is required");

      _fixture = this.body.createFixture({
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
