import type { Comp, GameObj } from "kaplay";

import type { Fixture } from "planck";
import { KPBodyComp } from "./Body";
import { KPFixtureDef } from "./Fixture";
import { KPShapesComp } from "./Shapes";

export interface KPFixturesComp extends Comp {
  fixtures: Fixture[];
}

type FixturesThis = GameObj<KPFixturesComp & KPBodyComp & KPShapesComp>;

export default function fixtures(defs: KPFixtureDef[]): KPFixturesComp {
  return {
    id: "kpFixtures",
    require: ["kpBody", "kpShapes"],
    fixtures: [],

    add(this: FixturesThis) {
      if (!this.body) throw new Error("kpBody is required");
      if (!this.shapes) throw new Error("kpShapes is required");
      if (this.shapes.length < defs.length) {
        throw new Error("each fixture needs a shape");
      }

      this.fixtures = [];

      for (let i = 0; i < defs.length; i++) {
        const def = defs[i];

        const fixture = this.body.createFixture({
          ...def,
          shape: this.shapes[i],
          userData: {
            ...def.userData,
            gameObj: this,
          },
        });

        this.fixtures.push(fixture);
      }
    },
  };
}
