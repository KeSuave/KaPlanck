import type {
  Comp,
  GameObj,
  KAPLAYCtx,
  KEventController,
  MouseButton,
} from "kaplay";
import type { Fixture, FixtureDef } from "planck";

import type { KPBodyComp } from "./Body";
import type { KPShapeComp } from "./Shape";
import { k2pVec2 } from "../utils";

export interface KPFixtureUserData {
  gameObj: GameObj;
  [key: string]: unknown;
}

export interface KPFixtureDef extends Omit<FixtureDef, "shape"> {
  userData?: Record<string, unknown>;
}

export interface KPFixtureComp extends Comp {
  fixture: Fixture | null;

  isHovering(): boolean;
  isClicked(): boolean;
  onHover(action: () => void): KEventController;
  onHoverUpdate(action: () => void): KEventController;
  onHoverEnd(action: () => void): KEventController;
  onClick(action: () => void, btn?: MouseButton): KEventController;
}

type FixtureThis = GameObj<KPFixtureComp & KPBodyComp & KPShapeComp>;

export default function fixture(
  k: KAPLAYCtx,
  def?: KPFixtureDef,
): KPFixtureComp {
  return {
    id: "kpFixture",
    require: ["kpBody", "kpShape"],
    fixture: null,

    isHovering() {
      if (!this.fixture) return false;

      return this.fixture.testPoint(k2pVec2(k.mousePos()));
    },
    isClicked() {
      return k.isMousePressed() && this.isHovering();
    },
    onHover(this: FixtureThis, action: () => void) {
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
    onHoverUpdate(this: FixtureThis, action: () => void) {
      return this.onUpdate(() => {
        if (this.isHovering()) action();
      });
    },
    onHoverEnd(this: FixtureThis, action: () => void) {
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
    onClick(this: FixtureThis, action: () => void, btn = "left") {
      const evt = k.onMousePress(btn, () => {
        if (this.isHovering()) action();
      });

      this.onDestroy(() => evt.cancel());

      return evt;
    },

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
