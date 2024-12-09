import type { Comp, GameObj } from "kaplay";
import type { Fixture, FixtureDef } from "planck";

import type { KPUserData } from "../types";
import type { KPBodyComp } from "./Body";
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

type FixtureThis = GameObj<KPFixtureComp & KPShapeComp>;

export default function fixture(def?: KPFixtureDef): KPFixtureComp {
  let _fixture: Fixture | null;

  return {
    id: "kpFixture",
    require: ["kpShape"],

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
      let gameObjWithKPBodyComp: GameObj<KPBodyComp> | null = this as GameObj<
        KPBodyComp & KPFixtureComp & KPShapeComp
      >;

      if (!this.c("kpBody")) {
        gameObjWithKPBodyComp = this.parent as GameObj<KPBodyComp>;
      }

      if (!gameObjWithKPBodyComp.c("kpBody")) {
        throw new Error("A body is required");
      }

      const userData = def?.userData ?? {};

      _fixture = gameObjWithKPBodyComp.body.createFixture({
        ...def,
        shape: this.shape,
        userData: {
          ...userData,
          gameObj: this,
        },
      });

      this.fixture.shouldCollide = (that: Fixture) => {
        if (gameObjWithKPBodyComp.collisionIgnore.length === 0) return true;

        const userData = that.getUserData() as KPUserData;

        const thatGameObj = userData.gameObj;

        if (thatGameObj.tags.length === 0) return true;

        return !gameObjWithKPBodyComp.collisionIgnore.some((tag) => {
          return thatGameObj.tags.includes(tag);
        });
      };
    },

    destroy(this: FixtureThis) {
      this.fixture.getBody().destroyFixture(this.fixture);

      _fixture = null;
    },
  };
}
