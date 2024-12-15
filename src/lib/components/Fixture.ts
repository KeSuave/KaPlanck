import type { Comp, GameObj } from "kaplay";
import type { Fixture, FixtureDef } from "planck";
import type { KPShapeColor, KPShapeComp } from "./Shape";

import type { KPUserData } from "../types";
import type { KPBodyComp } from "./Body";

export type KPFixtureDef = Omit<FixtureDef, "shape">;

export interface KPFixtureComp extends Comp {
  /**
   * The underlying Fixture object.
   *
   * @type {(Fixture)}
   */
  fixture: Fixture;

  /**
   * Returns the density of the fixture.
   *
   * @return {number}
   */
  getDensity(): number;
  /**
   * Returns the friction of the fixture.
   *
   * @return {number}
   */
  getFriction(): number;
  /**
   * Returns the restitution of the fixture.
   *
   * @return {number}
   */
  getRestitution(): number;
  /**
   * Returns true if the fixture is a sensor, otherwise false.
   *
   * @return {boolean}
   */
  isSensor(): boolean;
  /**
   * Sets the density of the fixture.
   *
   * @param {number} density
   */
  setDensity(density: number): void;
  /**
   * Sets the friction of the fixture.
   *
   * @param {number} friction
   */
  setFriction(friction: number): void;
  /**
   * Sets the restitution of the fixture.
   *
   * @param {number} restitution
   */
  setRestitution(restitution: number): void;
  /**
   * Sets the fixture as a sensor or not.
   *
   * @param {boolean} flag
   */
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
    drawInspect(this: FixtureThis) {
      const body = this.fixture.getBody();

      const color: KPShapeColor = {
        r: 200,
        g: 200,
        b: 200,
        a: 1,
      };

      if (body.isDynamic()) {
        color.r = 0;
        color.g = 191;
        color.b = 255;
      } else if (body.isKinematic()) {
        color.r = 238;
        color.g = 130;
        color.b = 238;
      }

      if (!body.isAwake()) {
        color.a = 0.5;
      }

      this.kpDrawInspect(color);
    },
    destroy(this: FixtureThis) {
      this.fixture.getBody().destroyFixture(this.fixture);

      _fixture = null;
    },
  };
}
