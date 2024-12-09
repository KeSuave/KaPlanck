import type { GameObj, KAPLAYCtx, Vec2 as KaVec2, Tag } from "kaplay";
import {
  Settings,
  type Contact,
  type Vec2,
  type Vec2Value,
  type WorldDef,
} from "planck";
import body, { type KPBodyComp, type KPBodyDef } from "./components/Body";
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

import distanceJoint, {
  type KPDistanceJointComp,
  type KPDistanceJointDef,
} from "./components/DistanceJoint";
import frictionJoint, {
  type KPFrictionJointComp,
  type KPFrictionJointDef,
} from "./components/FrictionJoint";
import gearJoint, {
  type KPGearJointComp,
  type KPGearJointDef,
} from "./components/GearJoint";
import motorJoint, {
  type KPMotorJointComp,
  type KPMotorJointDef,
} from "./components/MotorJoint";
import mouseJoint, {
  type KPMouseJointComp,
  type KPMouseJointDef,
} from "./components/MouseJoint";
import prismaticJoint, {
  type KPPrismaticJointComp,
  type KPPrismaticJointDef,
} from "./components/PrismaticJoint";
import pulleyJoint, {
  type KPPulleyJointComp,
  type KPPulleyJointDef,
} from "./components/PulleyJoint";
import revoluteJoint, {
  type KPRevoluteJointComp,
  type KPRevoluteJointDef,
} from "./components/RevoluteJoint";
import ropeJoint, {
  type KPRopeJointComp,
  type KPRopeJointDef,
} from "./components/RopeJoint";
import rotate, { type KPRotateComp } from "./components/Rotate";
import weldJoint, {
  type KPWeldJointComp,
  type KPWeldJointDef,
} from "./components/WeldJoint";
import wheelJoint, {
  type KPWheelJointComp,
  type KPWheelJointDef,
} from "./components/WheelJoint";
import {
  center,
  findWorldContainer,
  k2pVec2,
  m2p,
  p2kVec2,
  p2m,
} from "./utils";

export interface KaPlanckPluginCtx {
  // transform components
  /**
   * Sets the position of a body.
   *
   * **IMPORTANT**: use this method instead of `pos`
   *
   * @param {number} x The x coordinate of the body's position.
   * @param {number} y The y coordinate of the body's position.
   * @return {KPPosComp} A position component that works with KaPlanckPlugin methods.
   */
  kpPos(x: number, y: number): KPPosComp;
  /**
   * Sets the position of a body.
   *
   * **IMPORTANT**: use this method instead of `pos`
   *
   * @param {Vec2Value} obj An object containing the position values.
   * @return {KPPosComp} A position component that works with KaPlanckPlugin methods.
   */
  kpPos(obj: Vec2Value): KPPosComp;
  /**
   * Sets the position of a body.
   *
   * **IMPORTANT**: use this method instead of `pos`, it will add pos component to the entity.
   *
   * @param {Vec2} vec A vector containing the position values.
   * @return {KPPosComp} A position component that works with KaPlanckPlugin methods.
   */
  kpPos(vec: Vec2): KPPosComp;
  /**
   * Sets the position of a body.
   *
   * **IMPORTANT**: use this method instead of `pos`, it will add pos component to the entity.
   *
   * @return {KPPosComp} A position component that works with KaPlanckPlugin methods.
   */
  kpPos(): KPPosComp;
  /**
   * Sets the rotation of a body.
   *
   * **IMPORTANT**: use this method instead of `rotate`, it will add rotate component to the entity.
   *
   * @param {number} [angle] The angle in radians to set the rotation of the body.
   * @return {KPRotateComp} A rotation component that works with KaPlanckPlugin methods.
   */
  kpRotate(angle?: number): KPRotateComp;

  // general planck components
  /**
   * Sets the physics world.
   *
   * @param {(WorldDef | Vec2)} def The definition of the physics world or a vector for gravity.
   * @return {KPWorldComp} A world component that works with KaPlanckPlugin methods.
   */
  kpWorld(def?: WorldDef | Vec2): KPWorldComp;
  /**
   * Adds a body to the physics world.
   *
   * Requires to be a child of an object with the `kpWorld` component.
   * Requires `kpPos`.
   * Requires `kpRotate`.
   *
   * @param {(KPBodyDef)} [def] The definition of the body.
   * @param {Tag[]} collisionIgnore - Tags to ignore collisions with this body
   * @return {KPBodyComp}
   */
  kpBody(def?: KPBodyDef, collisionIgnore?: Tag[]): KPBodyComp;
  /**
   * Creates a fixture.
   *
   * **IMPORTANT**: Cannot be added before `kpBody` if `kpBody` is used in the same game object.
   *                Otherwise, it requires to be a child of an object with the `kpBody` component.
   *
   * Requires a shape.
   *
   * @param {KPFixtureDef} [def] The definition of the fixture.
   * @return {KPFixtureComp}
   */
  kpFixture(def?: KPFixtureDef): KPFixtureComp;
  /**
   * Defines the geometry of a body.
   *
   * @param {KPBoxShapeOpt} opt The options for the box shape.
   * @return {KPBoxShapeComp}
   */
  kpBoxShape(opt: KPBoxShapeOpt): KPBoxShapeComp;
  /**
   * Defines the geometry of a body.
   *
   * @param {KPChainShapeOpt} [opt] The options for the chain shape.
   * @return {KPChainShapeComp}
   */
  kpChainShape(opt?: KPChainShapeOpt): KPChainShapeComp;
  /**
   * Defines the geometry of a body.
   *
   * @param {KPCircleShapeOpt} [opt] The options for the circle shape.
   * @return {KPCircleShapeComp}
   */
  kpCircleShape(opt?: KPCircleShapeOpt): KPCircleShapeComp;
  /**
   * Defines the geometry of a body.
   *
   * @param {KPEdgeShapeOpt} [opt] The options for the edge shape.
   * @return {KPEdgeShapeComp}
   */
  kpEdgeShape(opt?: KPEdgeShapeOpt): KPEdgeShapeComp;
  /**
   * Defines the geometry of a body.
   *
   * @param {KPPolygonShapeOpt} [opt] The options for the polygon shape.
   * @return {KPPolygonShapeComp}
   */
  kpPolygonShape(opt?: KPPolygonShapeOpt): KPPolygonShapeComp;
  /**
   * Defines a distance joint.
   *
   * @param {KPDistanceJointDef} def The definition for the distance joint.
   * @param {GameObj<KPBodyComp & KPPosComp & KPRotateComp>} gameObjA The first body to connect with the joint.
   * @param {GameObj<KPBodyComp & KPPosComp & KPRotateComp>} gameObjB The second body to connect with the joint.
   * @param {GameObj<KPWorldComp>} [worldContainer] The game object with `kpWorld` component.
   * @return {KPDistanceJointComp}
   */
  kpDistanceJoint(
    def: KPDistanceJointDef,
    gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
    gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
    worldContainer?: GameObj<KPWorldComp>,
  ): KPDistanceJointComp;
  /**
   * Defines a friction joint.
   *
   * @param {KPFrictionJointDef} def The definition for the friction joint.
   * @param {(GameObj<KPBodyComp & KPPosComp & KPRotateComp>)} gameObjA The first body to connect with the joint.
   * @param {(GameObj<KPBodyComp & KPPosComp & KPRotateComp>)} gameObjB The second body to connect with the joint.
   * @param {GameObj<KPWorldComp>} [worldContainer] The game object with `kpWorld` component.
   * @return {KPFrictionJointComp}
   */
  kpFrictionJoint(
    def: KPFrictionJointDef,
    gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
    gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
    worldContainer?: GameObj<KPWorldComp>,
  ): KPFrictionJointComp;
  /**
   * Defines a gear joint.
   *
   * @param {KPGearJointDef} def The definition for the gear joint.
   * @param {(GameObj<KPBodyComp & KPPosComp & KPRotateComp>)} gameObjA The first body to connect with the joint.
   * @param {(GameObj<KPBodyComp & KPPosComp & KPRotateComp>)} gameObjB The second body to connect with the joint.
   * @param {(GameObj<KPRevoluteJointComp> | GameObj<KPPrismaticJointComp>)} jointGameObj1 The first joint to connect with the gear.
   * @param {(GameObj<KPRevoluteJointComp> | GameObj<KPPrismaticJointComp>)} jointGameObj2 The second joint to connect with the gear.
   * @param {GameObj<KPWorldComp>} [worldContainer] The game object with `kpWorld` component.
   * @return {KPGearJointComp}
   */
  kpGearJoint(
    def: KPGearJointDef,
    gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
    gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
    jointGameObj1: GameObj<KPRevoluteJointComp> | GameObj<KPPrismaticJointComp>,
    jointGameObj2: GameObj<KPRevoluteJointComp> | GameObj<KPPrismaticJointComp>,
    worldContainer?: GameObj<KPWorldComp>,
  ): KPGearJointComp;
  /**
   * Defines a motor joint.
   *
   * @param {KPMotorJointDef} def The definition for the motor joint.
   * @param {(GameObj<KPBodyComp & KPPosComp & KPRotateComp>)} gameObjA The first body to connect with the joint.
   * @param {(GameObj<KPBodyComp & KPPosComp & KPRotateComp>)} gameObjB The second body to connect with the joint.
   * @param {GameObj<KPWorldComp>} [worldContainer] The game object with `kpWorld` component.
   * @return {KPMotorJointComp}
   */
  kpMotorJoint(
    def: KPMotorJointDef,
    gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
    gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
    worldContainer?: GameObj<KPWorldComp>,
  ): KPMotorJointComp;
  /**
   * Defines a mouse joint.
   *
   * @param {KPMouseJointDef} def The definition for the mouse joint.
   * @param {(GameObj<KPBodyComp & KPPosComp & KPRotateComp>)} gameObjA The first body to connect with the joint.
   * @param {(GameObj<KPBodyComp & KPPosComp & KPRotateComp>)} gameObjB The second body to connect with the joint.
   * @param {GameObj<KPWorldComp>} [worldContainer] The game object with `kpWorld` component.
   * @return {KPMouseJointComp}
   */
  kpMouseJoint(
    def: KPMouseJointDef,
    gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
    gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
    worldContainer?: GameObj<KPWorldComp>,
  ): KPMouseJointComp;
  /**
   * Defines a prismatic joint.
   *
   * @param {KPPrismaticJointDef} def The definition for the prismatic joint.
   * @param {(GameObj<KPBodyComp & KPPosComp & KPRotateComp>)} gameObjA The first body to connect with the joint.
   * @param {(GameObj<KPBodyComp & KPPosComp & KPRotateComp>)} gameObjB The second body to connect with the joint.
   * @param {GameObj<KPWorldComp>} [worldContainer] The game object with `kpWorld` component.
   * @return {KPPrismaticJointComp}
   */
  kpPrismaticJoint(
    def: KPPrismaticJointDef,
    gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
    gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
    worldContainer?: GameObj<KPWorldComp>,
  ): KPPrismaticJointComp;
  /**
   * Defines a pulley joint.
   *
   * @param {KPPulleyJointDef} def The definition for the pulley joint.
   * @param {(GameObj<KPBodyComp & KPPosComp & KPRotateComp>)} gameObjA The first body to connect with the joint.
   * @param {(GameObj<KPBodyComp & KPPosComp & KPRotateComp>)} gameObjB The second body to connect with the joint.
   * @param {GameObj<KPWorldComp>} [worldContainer] The game object with `kpWorld` component.
   * @return {KPPulleyJointComp}
   */
  kpPulleyJoint(
    def: KPPulleyJointDef,
    gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
    gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
    worldContainer?: GameObj<KPWorldComp>,
  ): KPPulleyJointComp;
  /**
   * Defines a revolute joint.
   *
   * @param {KPRevoluteJointDef} def The definition for the revolute joint.
   * @param {(GameObj<KPBodyComp & KPPosComp & KPRotateComp>)} gameObjA The first body to connect with the joint.
   * @param {(GameObj<KPBodyComp & KPPosComp & KPRotateComp>)} gameObjB The second body to connect with the joint.
   * @param {GameObj<KPWorldComp>} [worldContainer] The game object with `kpWorld` component.
   * @return {KPRevoluteJointComp}
   */
  kpRevoluteJoint(
    def: KPRevoluteJointDef,
    gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
    gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
    worldContainer?: GameObj<KPWorldComp>,
  ): KPRevoluteJointComp;
  /**
   * Defines a distance joint.
   *
   * @param {KPRopeJointDef} def The definition for the distance joint.
   * @param {(GameObj<KPBodyComp & KPPosComp & KPRotateComp>)} gameObjA The first body to connect with the joint.
   * @param {(GameObj<KPBodyComp & KPPosComp & KPRotateComp>)} gameObjB The second body to connect with the joint.
   * @param {GameObj<KPWorldComp>} [worldContainer] The game object with `kpWorld` component.
   * @return {KPRopeJointComp}
   */
  kpRopeJoint(
    def: KPRopeJointDef,
    gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
    gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
    worldContainer?: GameObj<KPWorldComp>,
  ): KPRopeJointComp;
  /**
   * Defines a weld joint.
   *
   * @param {KPWeldJointDef} def The definition for the weld joint.
   * @param {(GameObj<KPBodyComp & KPPosComp & KPRotateComp>)} gameObjA The first body to connect with the joint.
   * @param {(GameObj<KPBodyComp & KPPosComp & KPRotateComp>)} gameObjB The second body to connect with the joint.
   * @param {GameObj<KPWorldComp>} [worldContainer] The world container to add the joint.
   * @return {KPWeldJointComp}
   */
  kpWeldJoint(
    def: KPWeldJointDef,
    gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
    gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
    worldContainer?: GameObj<KPWorldComp>,
  ): KPWeldJointComp;
  /**
   * Defines a distance joint.
   *
   * @param {KPWheelJointDef} def The definition for the distance joint.
   * @param {(GameObj<KPBodyComp & KPPosComp & KPRotateComp>)} gameObjA The first body to connect with the joint.
   * @param {(GameObj<KPBodyComp & KPPosComp & KPRotateComp>)} gameObjB The second body to connect with the joint.
   * @param {GameObj<KPWorldComp>} [worldContainer] The world container to add the joint.
   * @return {KPWheelJointComp}
   */
  kpWheelJoint(
    def: KPWheelJointDef,
    gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
    gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
    worldContainer?: GameObj<KPWorldComp>,
  ): KPWheelJointComp;

  // events
  /**
   * Register an event that runs once when 2 game objs with certain tags collides.
   * Requires an object with the `kpWorld` component.
   * Requires objects with `kpFixture` component.
   *
   * **IMPORTANT**: Please do not destroy the objects that are listening to this event.
   *                If you would like to destroy them, please consider using `addToDestroyList` from `kpWorld` or `kpBody`.
   *
   * @param {Tag} tagA The tag of an object to listen for collisions.
   * @param {Tag} tagB The tag of another object to listen for collisions.
   * @param {(objA: GameObj, objB: GameObj, contact?: Contact) => void} action
   * @param {GameObj<KPWorldComp>} [worldContainer] If not provided, the first object with `kpObj` will be used.
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
   * Requires objects with `kpFixture` component.
   *
   * **IMPORTANT**: Please do not destroy the objects that are listening to this event.
   *                If you would like to destroy them, please consider using `addToDestroyList` from `kpWorld` or `kpBody`.
   *
   * @param {Tag} tagA The tag of an object to listen for collisions.
   * @param {Tag} tagB The tag of another object to listen for collisions.
   * @param {(objA: GameObj, objB: GameObj, contact?: Contact) => void} action
   * @param {GameObj<KPWorldComp>} [worldContainer] If not provided, the first object with `kpWorld` will be used.
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
   * **IMPORTANT**: Please do not destroy the objects that are listening to this event.
   *                If you would like to destroy them, please consider using `addToDestroyList` from `kpWorld` or `kpBody`.
   *
   * @param {Tag} tagA The tag of an object to listen for collisions.
   * @param {Tag} tagB The tag of another object to listen for collisions.
   * @param {(objA: GameObj, objB: GameObj, contact?: Contact) => void} action
   * @param {GameObj<KPWorldComp>} [worldContainer] If not provided, the first object with `kpWorld` will be used.
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
   */
  kpCenter(): Vec2;
  /**
   * Returns the mouse position in unit.
   *
   * @return {Vec2}
   */
  kpMousePos(): Vec2;
  /**
   * Converts meter to pixel.
   *
   * @param {number} m The meter value.
   * @return {number}
   */
  m2p(m: number): number;
  /**
   * Converts pixel to unit.
   *
   * @param {number} p The pixel value.
   * @return {number}
   */
  p2m(p: number): number;
  /**
   * Converts a vector from KAPLAY Vector to Planck Vector.
   *
   * @param {KaVec2} vec A KAPLAY vector.
   * @return {Vec2}
   */
  k2pVec2(vec: KaVec2): Vec2;
  /**
   * Converts a vector from Planck Vector to KAPLAY Vector.
   *
   * @param {Vec2} vec A Planck vector.
   * @return {KaVec2}
   */
  p2kVec2(vec: Vec2): KaVec2;
}

export interface KaPlanckPluginOpts {
  /**
   * The ratio of pixels per meter.
   *
   * Defaults to `10`.
   *
   * @type {number}
   */
  lengthUnitsPerMeter?: number;
}

/**
 * A plugin to allows to use PlanckJS seamlessly with KAPLAY.
 *
 * **IMPORTANT**
 *
 * Vec2 from KAPLAY and Vec2 from PlanckJS are different, please use them accordingly.
 *
 * PlanckJS uses radians for angles while KAPLAY uses degrees, please make use of KAPLAY's
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

      kpWorld(def?: WorldDef | Vec2) {
        return world(k, def);
      },
      kpBody(bodyDef?: KPBodyDef, collisionIgnore?: Tag[]) {
        return body(k, bodyDef, collisionIgnore);
      },
      kpFixture(def?: KPFixtureDef) {
        return fixture(def);
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
      kpDistanceJoint(
        def: KPDistanceJointDef,
        gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
        gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
        worldContainer?: GameObj<KPWorldComp>,
      ) {
        return distanceJoint(k, def, gameObjA, gameObjB, worldContainer);
      },
      kpFrictionJoint(
        def: KPFrictionJointDef,
        gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
        gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
        worldContainer?: GameObj<KPWorldComp>,
      ) {
        return frictionJoint(k, def, gameObjA, gameObjB, worldContainer);
      },
      kpGearJoint(
        def: KPGearJointDef,
        gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
        gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
        jointGameObj1:
          | GameObj<KPRevoluteJointComp>
          | GameObj<KPPrismaticJointComp>,
        jointGameObj2:
          | GameObj<KPRevoluteJointComp>
          | GameObj<KPPrismaticJointComp>,
        worldContainer?: GameObj<KPWorldComp>,
      ) {
        return gearJoint(
          k,
          def,
          gameObjA,
          gameObjB,
          jointGameObj1,
          jointGameObj2,
          worldContainer,
        );
      },
      kpMotorJoint(
        def: KPMotorJointDef,
        gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
        gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
        worldContainer?: GameObj<KPWorldComp>,
      ) {
        return motorJoint(k, def, gameObjA, gameObjB, worldContainer);
      },
      kpMouseJoint(
        def: KPMouseJointDef,
        gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
        gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
        worldContainer?: GameObj<KPWorldComp>,
      ) {
        return mouseJoint(k, def, gameObjA, gameObjB, worldContainer);
      },
      kpPrismaticJoint(
        def: KPPrismaticJointDef,
        gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
        gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
        worldContainer?: GameObj<KPWorldComp>,
      ) {
        return prismaticJoint(k, def, gameObjA, gameObjB, worldContainer);
      },
      kpPulleyJoint(
        def: KPPulleyJointDef,
        gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
        gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
        worldContainer?: GameObj<KPWorldComp>,
      ) {
        return pulleyJoint(k, def, gameObjA, gameObjB, worldContainer);
      },
      kpRevoluteJoint(
        def: KPRevoluteJointDef,
        gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
        gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
        worldContainer?: GameObj<KPWorldComp>,
      ) {
        return revoluteJoint(k, def, gameObjA, gameObjB, worldContainer);
      },
      kpRopeJoint(
        def: KPRopeJointDef,
        gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
        gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
        worldContainer?: GameObj<KPWorldComp>,
      ) {
        return ropeJoint(k, def, gameObjA, gameObjB, worldContainer);
      },
      kpWeldJoint(
        def: KPWeldJointDef,
        gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
        gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
        worldContainer?: GameObj<KPWorldComp>,
      ) {
        return weldJoint(k, def, gameObjA, gameObjB, worldContainer);
      },
      kpWheelJoint(
        def: KPWheelJointDef,
        gameObjA: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
        gameObjB: GameObj<KPBodyComp & KPPosComp & KPRotateComp>,
        worldContainer?: GameObj<KPWorldComp>,
      ) {
        return wheelJoint(k, def, gameObjA, gameObjB, worldContainer);
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

        eventWorldContainer.onContactBegin(
          (objA: GameObj, objB: GameObj, contact?: Contact) => {
            if (!objA.tags.includes(tagA) && !objB.tags.includes(tagA)) return;
            if (!objA.tags.includes(tagB) && !objB.tags.includes(tagB)) return;

            let objWithTagA = objA;
            let objWithTagB = objB;

            if (!objA.tags.includes(tagA)) {
              objWithTagA = objB;
              objWithTagB = objA;
            }

            action(objWithTagA, objWithTagB, contact);
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

          let objWithTagA = currentObjA;
          let objWithTagB = currentObjB;

          if (!currentObjA.tags.includes(tagA)) {
            objWithTagA = currentObjB;
            objWithTagB = currentObjA;
          }

          action(objWithTagA, objWithTagB, currentContact);
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

            let objWithTagA = objA;
            let objWithTagB = objB;

            if (!objA.tags.includes(tagA)) {
              objWithTagA = objB;
              objWithTagB = objA;
            }

            action(objWithTagA, objWithTagB, contact);
          },
        );
      },

      kpCenter() {
        return center(k);
      },
      kpMousePos() {
        return k2pVec2(k.mousePos());
      },
      m2p,
      p2m,
      k2pVec2,
      p2kVec2(vec: Vec2) {
        return p2kVec2(k, vec);
      },
    };
  };

export default KaPlanckPlugin;
