import type { KAPLAYCtx, Vec2 as KaVec2 } from "kaplay";
import {
  Settings,
  type BodyDef,
  type FixtureDef,
  type Vec2,
  type Vec2Value,
  type WorldDef,
} from "planck";
import body, { type KPBodyComp } from "./components/Body";
import boxShape, {
  type KPBoxShapeComp,
  type KPBoxShapeCompOpt,
} from "./components/BoxShape";
import chainShape, {
  type KPChainShapeComp,
  type KPChainShapeCompOpt,
} from "./components/ChainShape";
import circleShape, {
  type KPCircleShapeComp,
  type KPCircleShapeCompOpt,
} from "./components/CircleShape";
import edgeShape, {
  type KPEdgeShapeComp,
  type KPEdgeShapeCompOpt,
} from "./components/EdgeShape";
import fixture, { type KPFixtureComp } from "./components/Fixture";
import polygonShape, {
  type KPPolygonShapeComp,
  type KPPolygonShapeCompOpt,
} from "./components/PolygonShape";
import pos, { type KPPosComp, type KPVec2Args } from "./components/Position";
import world, { type KPWorldComp } from "./components/World";

import rotate, { KPRotateComp } from "./components/Rotate";
import { center, k2pVec2, p2kVec2, p2u, u2p } from "./utils";

interface KaPlanckPlugin {
  // mimicked transform components

  /**
   * Sets the position of a body.
   *
   * **IMPORTANT**: use this method instead of `pos`
   *
   * @param {number} x
   * @param {number} y
   * @return {*}  {KPPosComp}
   * @memberof KaPlanckPlugin
   */
  kpPos(x: number, y: number): KPPosComp;
  /**
   * Sets the position of a body.
   *
   * **IMPORTANT**: use this method instead of `pos`
   *
   * @param {Vec2Value} obj
   * @return {*}  {KPPosComp}
   * @memberof KaPlanckPlugin
   */
  kpPos(obj: Vec2Value): KPPosComp;
  /**
   * Sets the position of a body.
   *
   * **IMPORTANT**: use this method instead of `pos`
   *
   * @param {Vec2} vec
   * @return {*}  {KPPosComp}
   * @memberof KaPlanckPlugin
   */
  kpPos(vec: Vec2): KPPosComp;
  /**
   * Sets the rotation of a body.
   *
   * **IMPORTANT**: use this method instead of `rotate`
   *
   * @param {number} [angle]
   * @return {*}  {KPRotateComp}
   * @memberof KaPlanckPlugin
   */
  kpRotate(angle?: number): KPRotateComp;

  // general planck components
  /**
   * Sets the physics world.
   *
   * @param {(WorldDef | Vec2 | null)} def
   * @return {*}  {KPWorldComp}
   * @memberof KaPlanckPlugin
   */
  kpWorld(def?: WorldDef | Vec2 | null): KPWorldComp;
  /**
   * Adds a body to the physics world.
   *
   * Requires `kpWorld` to be set first.
   * Requires `kpPos`.
   *
   * @param {(Omit<BodyDef, "position" | "angle">)} [def]
   * @return {*}  {KPBodyComp}
   * @memberof KaPlanckPlugin
   */
  kpBody(def?: Omit<BodyDef, "position" | "angle">): KPBodyComp;
  /**
   * Creates a fixture.
   *
   * **IMPORTANT**: cannot be added before `kpBody`
   *
   * @param {Omit<FixtureDef, "shape">} [def]
   * @return {*}  {KPFixtureComp}
   * @memberof KaPlanckPlugin
   */
  kpFixture(def?: Omit<FixtureDef, "shape">): KPFixtureComp;
  /**
   * Defines the geometry of a body.
   *
   * @param {KPBoxShapeCompOpt} opt
   * @return {*}  {KPBoxShapeComp}
   * @memberof KaPlanckPlugin
   */
  kpBoxShape(opt: KPBoxShapeCompOpt): KPBoxShapeComp;
  /**
   * Defines the geometry of a body.
   *
   * @param {KPChainShapeCompOpt} [opt]
   * @return {*}  {KPChainShapeComp}
   * @memberof KaPlanckPlugin
   */
  kpChainShape(opt?: KPChainShapeCompOpt): KPChainShapeComp;
  /**
   * Defines the geometry of a body.
   *
   * @param {KPCircleShapeCompOpt} [opt]
   * @return {*}  {KPCircleShapeComp}
   * @memberof KaPlanckPlugin
   */
  kpCircleShape(opt?: KPCircleShapeCompOpt): KPCircleShapeComp;
  /**
   * Defines the geometry of a body.
   *
   * @param {KPEdgeShapeCompOpt} [opt]
   * @return {*}  {KPEdgeShapeComp}
   * @memberof KaPlanckPlugin
   */
  kpEdgeShape(opt?: KPEdgeShapeCompOpt): KPEdgeShapeComp;
  /**
   * Defines the geometry of a body.
   *
   * @param {KPPolygonShapeCompOpt} [opt]
   * @return {*}  {KPPolygonShapeComp}
   * @memberof KaPlanckPlugin
   */
  kpPolygonShape(opt?: KPPolygonShapeCompOpt): KPPolygonShapeComp;

  // tools
  /**
   * Returns the center of the canvas in unit.
   *
   * @return {*}  {Vec2}
   * @memberof KaPlanckPlugin
   */
  kpCenter(): Vec2;
  /**
   * Returns the mouse position in unit.
   *
   * @return {*}  {Vec2}
   * @memberof KaPlanckPlugin
   */
  kpMousePos(): Vec2;
  /**
   * Converts unit to pixel.
   *
   * @param {number} m
   * @return {*}  {number}
   * @memberof KaPlanckPlugin
   */
  u2p(m: number): number;
  /**
   * Converts pixel to unit.
   *
   * @param {number} p
   * @return {*}  {number}
   * @memberof KaPlanckPlugin
   */
  p2u(p: number): number;
  /**
   * Converts a vector from Plack Vector to KaPlay Vector.
   *
   * @param {KaVec2} vec
   * @return {*}  {Vec2}
   * @memberof KaPlanckPlugin
   */
  k2pVec2(vec: KaVec2): Vec2;
  /**
   * Converts a vector from KaPlay Vector to Plack Vector.
   *
   * @param {Vec2} vec
   * @return {*}  {KaVec2}
   * @memberof KaPlanckPlugin
   */
  p2kVec2(vec: Vec2): KaVec2;
}

interface KaPlanckPluginOpts {
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
 * @param {KaPlanckPluginOpts} opt
 */
const KaPlanckPlugin =
  (opt?: KaPlanckPluginOpts) =>
  (k: KAPLAYCtx): KaPlanckPlugin => {
    Settings.lengthUnitsPerMeter = opt?.lengthUnitsPerMeter ?? 10;

    return {
      kpPos(...args: KPVec2Args) {
        return pos(k, ...args);
      },
      kpRotate(angle?: number) {
        return rotate(angle);
      },

      kpWorld(def?: WorldDef | Vec2 | null) {
        return world(k, def);
      },
      kpBody(bodyDef?: BodyDef) {
        return body(bodyDef);
      },
      kpFixture(def?: Omit<FixtureDef, "shape">) {
        return fixture(def);
      },
      kpBoxShape(opt: KPBoxShapeCompOpt) {
        return boxShape(k, opt);
      },
      kpChainShape(opt?: KPChainShapeCompOpt) {
        return chainShape(k, opt);
      },
      kpCircleShape(opt?: KPCircleShapeCompOpt) {
        return circleShape(k, opt);
      },
      kpEdgeShape(opt?: KPEdgeShapeCompOpt) {
        return edgeShape(k, opt);
      },
      kpPolygonShape(opt?: KPPolygonShapeCompOpt) {
        return polygonShape(k, opt);
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
