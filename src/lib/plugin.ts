import type { GameObj, KAPLAYCtx, Vec2 as KaVec2, Tag } from "kaplay";
import {
  Settings,
  type BodyDef,
  type Contact,
  type Vec2,
  type Vec2Value,
  type WorldDef,
} from "planck";
import body, { type KPBodyComp } from "./components/Body";
import boxShape, {
  type KPBoxShapeComp,
  type KPBoxShapeOpt,
} from "./components/BoxShape";
import chainShape, {
  type KPChainShapeComp,
  type KPChainShapeOpt,
} from "./components/ChainShape";
import circleShape, {
  type KPCircleShapeComp,
  type KPCircleShapeOpt,
} from "./components/CircleShape";
import edgeShape, {
  type KPEdgeShapeComp,
  type KPEdgeShapeOpt,
} from "./components/EdgeShape";
import fixture, {
  type KPFixtureComp,
  type KPFixtureDef,
} from "./components/Fixture";
import polygonShape, {
  type KPPolygonShapeComp,
  type KPPolygonShapeOpt,
} from "./components/PolygonShape";
import pos, { type KPPosComp, type KPVec2Args } from "./components/Position";
import world, { type KPWorldComp } from "./components/World";

import fixtures, { type KPFixturesComp } from "./components/Fixtures";
import rotate, { type KPRotateComp } from "./components/Rotate";
import shapes, {
  type KPShapeDef,
  type KPShapesComp,
} from "./components/Shapes";
import {
  center,
  findWorldContainer,
  k2pVec2,
  p2kVec2,
  p2u,
  u2p,
} from "./utils";

export interface KaPlanckPluginCtx {
  // transform components

  /**
   * Sets the position of a body.
   *
   * **IMPORTANT**: use this method instead of `pos`
   *
   * @param {number} x
   * @param {number} y
   * @return {KPPosComp} A position component that works with KaPlanckPlugin methods.
   * @memberof KaPlanckPlugin
   */
  kpPos(x: number, y: number): KPPosComp;
  /**
   * Sets the position of a body.
   *
   * **IMPORTANT**: use this method instead of `pos`
   *
   * @param {Vec2Value} obj
   * @return {KPPosComp} A position component that works with KaPlanckPlugin methods.
   * @memberof KaPlanckPlugin
   */
  kpPos(obj: Vec2Value): KPPosComp;
  /**
   * Sets the position of a body.
   *
   * **IMPORTANT**: use this method instead of `pos`, it will add pos component to the entity.
   *
   * @param {Vec2} vec
   * @return {KPPosComp} A position component that works with KaPlanckPlugin methods.
   * @memberof KaPlanckPlugin
   */
  kpPos(vec: Vec2): KPPosComp;
  /**
   * Sets the rotation of a body.
   *
   * **IMPORTANT**: use this method instead of `rotate`, it will add rotate component to the entity.
   *
   * @param {number} [angle]
   * @return {KPRotateComp} A rotation component that works with KaPlanckPlugin methods.
   * @memberof KaPlanckPlugin
   */
  kpRotate(angle?: number): KPRotateComp;

  // general planck components
  /**
   * Sets the physics world.
   *
   * @param {(WorldDef | Vec2 | null)} def
   * @return {KPWorldComp} A world component that works with KaPlanckPlugin methods.
   * @memberof KaPlanckPlugin
   */
  kpWorld(def?: WorldDef | Vec2 | null): KPWorldComp;
  /**
   * Adds a body to the physics world.
   *
   * Requires `kpWorld` to be set first.
   * Requires `kpPos`.
   * Requires `kpRotate`.
   *
   * @param {(Omit<BodyDef, "position" | "angle">)} [def]
   * @return {KPBodyComp}
   * @memberof KaPlanckPlugin
   */
  kpBody(def?: Omit<BodyDef, "position" | "angle">): KPBodyComp;
  /**
   * Creates a fixture.
   *
   * **IMPORTANT**: cannot be added before `kpBody`
   * Requires `kpBody`.
   * Requires a shape
   *
   * @param {KPFixtureDef} [def]
   * @return {KPFixtureComp}
   * @memberof KaPlanckPlugin
   */
  kpFixture(def?: KPFixtureDef): KPFixtureComp;
  /**
   * Adds multiple fixtures to a body.
   *
   * **IMPORTANT**: cannot be added before `kpBody`
   * Requires `kpBody`.
   * Requires `kpShapes` with the same amount of shapes as fixtures
   *
   * @param {KPFixtureDef[]} defs
   * @return {KPFixturesComp}
   * @memberof KaPlanckPlugin
   */
  kpFixtures(defs: KPFixtureDef[]): KPFixturesComp;
  /**
   * Defines the geometry of a body.
   *
   * @param {KPBoxShapeOpt} opt
   * @return {KPBoxShapeComp}
   * @memberof KaPlanckPlugin
   */
  kpBoxShape(opt: KPBoxShapeOpt): KPBoxShapeComp;
  /**
   * Defines the geometry of a body.
   *
   * @param {KPChainShapeOpt} [opt]
   * @return {KPChainShapeComp}
   * @memberof KaPlanckPlugin
   */
  kpChainShape(opt?: KPChainShapeOpt): KPChainShapeComp;
  /**
   * Defines the geometry of a body.
   *
   * @param {KPCircleShapeOpt} [opt]
   * @return {KPCircleShapeComp}
   * @memberof KaPlanckPlugin
   */
  kpCircleShape(opt?: KPCircleShapeOpt): KPCircleShapeComp;
  /**
   * Defines the geometry of a body.
   *
   * @param {KPEdgeShapeOpt} [opt]
   * @return {KPEdgeShapeComp}
   * @memberof KaPlanckPlugin
   */
  kpEdgeShape(opt?: KPEdgeShapeOpt): KPEdgeShapeComp;
  /**
   * Defines the geometry of a body.
   *
   * @param {KPPolygonShapeOpt} [opt]
   * @return {KPPolygonShapeComp}
   * @memberof KaPlanckPlugin
   */
  kpPolygonShape(opt?: KPPolygonShapeOpt): KPPolygonShapeComp;
  /**
   * Defines multiple shapes for a body.
   *
   * @param {KPShapeDef[]} defs
   * @return {KPShapesComp}
   * @memberof KaPlanckPlugin
   */
  kpShapes(defs: KPShapeDef[]): KPShapesComp;

  // events
  /**
   * Register an event that runs once when 2 game objs with certain tags collides.
   * Requires an object with the `kpWorld` component.
   * Requires objects with `kpFixture` or `kpFixtures` components.
   *
   * @param {Tag} tagA
   * @param {Tag} tagB
   * @param {(objA: GameObj, objB: GameObj, contact?: Contact) => void} action
   * @param {GameObj<KPWorldComp>} [worldContainer] If not provided, the first object with `kpObj` will be used.
   * @memberof KaPlanckPlugin
   */
  onKPCollide(
    tagA: Tag,
    tagB: Tag,
    action: (objA: GameObj, objB: GameObj, contact?: Contact) => void,
    worldContainer?: GameObj<KPWorldComp>,
  ): void;
  /**
   * Register an event that runs every frame when 2 game objs with certain tags collide.
   * Requires an object with the `kpWorld` component.
   * Requires objects with `kpFixture` or `kpFixtures` components.
   *
   * @param {Tag} tagA
   * @param {Tag} tagB
   * @param {(objA: GameObj, objB: GameObj, contact?: Contact) => void} action
   * @param {GameObj<KPWorldComp>} [worldContainer] If not provided, the first object with `kpWorld` will be used.
   * @memberof KaPlanckPlugin
   */
  onKPCollideUpdate(
    tagA: Tag,
    tagB: Tag,
    action: (objA: GameObj, objB: GameObj, contact?: Contact) => void,
    worldContainer?: GameObj<KPWorldComp>,
  ): void;
  /**
   * Register an event that runs once when 2 game objs with certain tags stop colliding.
   * Requires an object with the `kpWorld` component.
   *
   * @param {Tag} tagA
   * @param {Tag} tagB
   * @param {(objA: GameObj, objB: GameObj, contact?: Contact) => void} action
   * @param {GameObj<KPWorldComp>} [worldContainer] If not provided, the first object with `kpWorld` will be used.
   * @memberof KaPlanckPlugin
   */
  onKPCollideEnd(
    tagA: Tag,
    tagB: Tag,
    action: (objA: GameObj, objB: GameObj, contact?: Contact) => void,
    worldContainer?: GameObj<KPWorldComp>,
  ): void;

  // tools
  /**
   * Returns the center of the canvas in unit.
   *
   * @return {Vec2}
   * @memberof KaPlanckPlugin
   */
  kpCenter(): Vec2;
  /**
   * Returns the mouse position in unit.
   *
   * @return {Vec2}
   * @memberof KaPlanckPlugin
   */
  kpMousePos(): Vec2;
  /**
   * Converts unit to pixel.
   *
   * @param {number} m
   * @return {number}
   * @memberof KaPlanckPlugin
   */
  u2p(m: number): number;
  /**
   * Converts pixel to unit.
   *
   * @param {number} p
   * @return {number}
   * @memberof KaPlanckPlugin
   */
  p2u(p: number): number;
  /**
   * Converts a vector from Plack Vector to KaPlay Vector.
   *
   * @param {KaVec2} vec
   * @return {Vec2}
   * @memberof KaPlanckPlugin
   */
  k2pVec2(vec: KaVec2): Vec2;
  /**
   * Converts a vector from KaPlay Vector to Plack Vector.
   *
   * @param {Vec2} vec
   * @return {KaVec2}
   * @memberof KaPlanckPlugin
   */
  p2kVec2(vec: Vec2): KaVec2;
}

export interface KaPlanckPluginOpts {
  /**
   * The ratio of pixels per unit.
   *
   * Defaults to `10`.
   *
   * @type {number}
   * @memberof KaPlanckPluginOpts
   */
  lengthUnitsPerMeter?: number;
}

/**
 * A plugin to allows to use PlanckJS seamlessly with KaPlay.
 *
 * **IMPORTANT**
 *
 * Vec2 from KaPlay and Vec2 from PlanckJS are different, please use them accordingly.
 *
 * PlanckJS uses radians for angles while KaPlay uses degrees, please make use of KaPlay's
 * tools to convert between them.
 *
 * @param {KaPlanckPluginOpts} opt
 */
const KaPlanckPlugin =
  (opt?: KaPlanckPluginOpts) =>
  (k: KAPLAYCtx): KaPlanckPluginCtx => {
    Settings.lengthUnitsPerMeter = opt?.lengthUnitsPerMeter ?? 10;

    return {
      kpPos(...args: KPVec2Args) {
        return pos(k, ...args);
      },
      kpRotate(angle?: number) {
        return rotate(k, angle);
      },

      kpWorld(def?: WorldDef | Vec2 | null) {
        return world(k, def);
      },
      kpBody(bodyDef?: BodyDef) {
        return body(bodyDef);
      },
      kpFixture(def?: KPFixtureDef) {
        return fixture(k, def);
      },
      kpFixtures(defs: KPFixtureDef[]) {
        return fixtures(defs);
      },
      kpBoxShape(opt: KPBoxShapeOpt) {
        return boxShape(k, opt);
      },
      kpChainShape(opt?: KPChainShapeOpt) {
        return chainShape(k, opt);
      },
      kpCircleShape(opt?: KPCircleShapeOpt) {
        return circleShape(k, opt);
      },
      kpEdgeShape(opt?: KPEdgeShapeOpt) {
        return edgeShape(k, opt);
      },
      kpPolygonShape(opt?: KPPolygonShapeOpt) {
        return polygonShape(k, opt);
      },
      kpShapes(defs: KPShapeDef[]) {
        return shapes(k, defs);
      },

      onKPCollide(
        tagA: Tag,
        tagB: Tag,
        action: (objA: GameObj, objB: GameObj, contact?: Contact) => void,
        worldContainer?: GameObj<KPWorldComp>,
      ) {
        const eventWorldContainer = worldContainer
          ? worldContainer
          : findWorldContainer(k);

        if (!eventWorldContainer) {
          throw new Error("No pkWorld found");
        }

        eventWorldContainer.onContactPreSolve(
          (objA: GameObj, objB: GameObj, contact?: Contact) => {
            if (!objA.tags.includes(tagA) && !objB.tags.includes(tagA)) return;
            if (!objA.tags.includes(tagB) && !objB.tags.includes(tagB)) return;

            action(objA, objB, contact);
          },
        );
      },
      onKPCollideUpdate(
        tagA: Tag,
        tagB: Tag,
        action: (objA: GameObj, objB: GameObj, contact?: Contact) => void,
        worldContainer?: GameObj<KPWorldComp>,
      ) {
        const eventWorldContainer = worldContainer
          ? worldContainer
          : findWorldContainer(k);

        if (!eventWorldContainer) {
          throw new Error("No pkWorld found");
        }

        let isColliding = false;
        let currentObjA: GameObj | null = null;
        let currentObjB: GameObj | null = null;
        let currentContact: Contact | undefined = undefined;

        eventWorldContainer.onContactBegin(
          (objA: GameObj, objB: GameObj, contact?: Contact) => {
            if (!objA.tags.includes(tagA) && !objB.tags.includes(tagA)) return;
            if (!objA.tags.includes(tagB) && !objB.tags.includes(tagB)) return;

            isColliding = true;
            currentContact = contact;
            currentObjA = objA;
            currentObjB = objB;
          },
        );

        eventWorldContainer.onContactEnd((objA: GameObj, objB: GameObj) => {
          if (!objA.tags.includes(tagA) && !objB.tags.includes(tagA)) return;
          if (!objA.tags.includes(tagB) && !objB.tags.includes(tagB)) return;

          isColliding = false;
          currentContact = undefined;
          currentObjA = null;
          currentObjB = null;
        });

        k.onFixedUpdate(() => {
          if (!isColliding || !currentObjA || !currentObjB || !currentContact) {
            return;
          }

          action(currentObjA, currentObjB, currentContact);
        });
      },
      onKPCollideEnd(
        tagA: Tag,
        tagB: Tag,
        action: (objA: GameObj, objB: GameObj, contact?: Contact) => void,
        worldContainer?: GameObj<KPWorldComp>,
      ) {
        const eventWorldContainer = worldContainer
          ? worldContainer
          : findWorldContainer(k);

        if (!eventWorldContainer) {
          throw new Error("No pkWorld found");
        }

        eventWorldContainer.onContactEnd(
          (objA: GameObj, objB: GameObj, contact?: Contact) => {
            if (!objA.tags.includes(tagA) && !objB.tags.includes(tagA)) return;
            if (!objA.tags.includes(tagB) && !objB.tags.includes(tagB)) return;

            action(objA, objB, contact);
          },
        );
      },

      kpCenter() {
        return center(k);
      },
      kpMousePos() {
        return k2pVec2(k.mousePos());
      },
      u2p,
      p2u,
      k2pVec2,
      p2kVec2(vec: Vec2) {
        return p2kVec2(k, vec);
      },
    };
  };

export default KaPlanckPlugin;
