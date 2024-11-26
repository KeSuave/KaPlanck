import type { Comp, GameObj } from "kaplay";

import type { Fixture } from "planck";
import { KPBodyComp } from "./Body";
import { KPFixtureDef } from "./Fixture";
import { KPShapesComp } from "./Shapes";

export interface KPFixturesComp extends Comp {
  fixtures: Fixture[];

  getDensity(index: number): number;
  getFriction(index: number): number;
  getRestitution(index: number): number;
  isSensor(index: number): boolean;
  setDensity(index: number, density: number): void;
  setFriction(index: number, friction: number): void;
  setRestitution(index: number, restitution: number): void;
  setSensor(index: number, flag: boolean): void;
}

type FixturesThis = GameObj<KPFixturesComp & KPBodyComp & KPShapesComp>;

export default function fixtures(defs: KPFixtureDef[]): KPFixturesComp {
  return {
    id: "kpFixtures",
    require: ["kpBody", "kpShapes"],
    fixtures: [],

    getDensity(index: number) {
      return this.fixtures[index].getDensity();
    },
    getFriction(index: number) {
      return this.fixtures[index].getFriction();
    },
    getRestitution(index: number) {
      return this.fixtures[index].getRestitution();
    },
    isSensor(index: number) {
      return this.fixtures[index].isSensor();
    },
    setDensity(index: number, density: number) {
      return this.fixtures[index].setDensity(density);
    },
    setFriction(index: number, friction: number) {
      return this.fixtures[index].setFriction(friction);
    },
    setRestitution(index: number, restitution: number) {
      return this.fixtures[index].setRestitution(restitution);
    },
    setSensor(index: number, flag: boolean) {
      return this.fixtures[index].setSensor(flag);
    },

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
        });

        this.fixtures.push(fixture);
      }
    },
  };
}
