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
