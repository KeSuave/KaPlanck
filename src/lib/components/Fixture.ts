import type { Comp, GameObj } from "kaplay";
import type { Fixture, FixtureDef } from "planck";

import type { KPBodyComp } from "./Body";
import type { KPShapeComp } from "./Shape";

export interface KPFixtureComp extends Comp {
  fixture: Fixture | null;
}

type FixtureThis = GameObj<KPFixtureComp & KPBodyComp & KPShapeComp>;

export default function fixture(
  def?: Omit<FixtureDef, "shape">,
): KPFixtureComp {
  return {
    id: "kpFixture",
    require: ["kpBody", "kpShape"],
    fixture: null,

    add(this: FixtureThis) {
      if (!this.body) throw new Error("kpBody is required");

      const userData = def?.userData ?? {};

      this.fixture = this.body.createFixture({
        ...def,
        shape: this.shape,
        userData: {
          ...userData,
          gameObj: this,
        },
      });
    },
  };
}
