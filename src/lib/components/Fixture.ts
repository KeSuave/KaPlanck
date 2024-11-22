import type {
  Comp,
  GameObj,
  KAPLAYCtx,
  KEventController,
  MouseButton,
  Tag,
} from "kaplay";
import type { Fixture, FixtureDef } from "planck";

import { k2pVec2 } from "../utils";
import type { KPBodyComp } from "./Body";
import type { KPShapeComp } from "./Shape";

export interface KPFixtureUserData {
  gameObj: GameObj;
  [key: string]: unknown;
}

export interface KPFixtureDef extends Omit<FixtureDef, "shape"> {
  userData?: Record<string, unknown>;
}

export interface KPFixtureComp extends Comp {
  /**
   * The underlying Fixture object.
   *
   * @type {(Fixture | null)}
   */
  fixture: Fixture | null;
  /**
   * Tags of other components that this fixture should ignore collisions with.
   *
   * @type {Tag[]}
   */
  collisionIgnore: Tag[];

  /**
   * Check if the mouse is hovering over this fixture.
   *
   * @returns {boolean}
   */
  isHovering(): boolean;
  /**
   * Check if the mouse has clicked on this fixture.
   *
   * @returns {boolean}
   */
  isClicked(): boolean;
  /**
   * Add an action to be executed when the mouse starts hovering over this fixture.
   *
   * @param {() => void} action - The action to execute.
   * @returns {KEventController} - A controller for managing the event.
   */
  onHover(action: () => void): KEventController;
  /**
   * Add an action to be executed when the mouse updates its position while hovering over this fixture.
   *
   * @param {() => void} action - The action to execute.
   * @returns {KEventController} - A controller for managing the event.
   */
  onHoverUpdate(action: () => void): KEventController;
  /**
   * Add an action to be executed when the mouse stops hovering over this fixture.
   *
   * @param {() => void} action - The action to execute.
   * @returns {KEventController} - A controller for managing the event.
   */
  onHoverEnd(action: () => void): KEventController;
  /**
   * Add an action to be executed when this fixture is clicked.
   *
   * @param {() => void} action - The action to execute.
   * @param {MouseButton} [btn] - The mouse button that was used to click (default: MouseButton.LEFT).
   * @returns {KEventController} - A controller for managing the event.
   */
  onClick(action: () => void, btn?: MouseButton): KEventController;
}

type FixtureThis = GameObj<KPFixtureComp & KPBodyComp & KPShapeComp>;

export default function fixture(
  k: KAPLAYCtx,
  def?: KPFixtureDef,
  collisionIgnore?: Tag[],
): KPFixtureComp {
  return {
    id: "kpFixture",
    require: ["kpBody", "kpShape"],
    fixture: null,
    collisionIgnore: collisionIgnore ?? [],

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

      this.fixture.shouldCollide = (that: Fixture) => {
        if (this.collisionIgnore.length === 0) return true;

        const userData = that.getUserData() as KPFixtureUserData;

        const thatGameObj = userData.gameObj;

        if (thatGameObj.tags.length === 0) return true;

        return !this.collisionIgnore.some((tag) => {
          return thatGameObj.tags.includes(tag);
        });
      };
    },
  };
}
