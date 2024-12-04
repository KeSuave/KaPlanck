import { RevoluteJoint, Vec2 } from "planck";
import type { KPFixtureDef, KPShapeDef } from "../lib";
import { addScenesButtons, type KAPLANCKCtx } from "../shared";

const CONTAINER_SHAPES: KPShapeDef[] = [
  {
    type: "circle",
    opt: {
      position: new Vec2(-10, -10),
      radius: 2,
      draw: true,
    },
  },
  {
    type: "circle",
    opt: {
      position: new Vec2(10, -10),
      radius: 2,
      draw: true,
    },
  },
  {
    type: "circle",
    opt: {
      position: new Vec2(-10, 10),
      radius: 2,
      draw: true,
    },
  },
  {
    type: "circle",
    opt: {
      position: new Vec2(10, 10),
      radius: 2,
      draw: true,
    },
  },
  {
    type: "box",
    opt: { width: 1, height: 40, center: new Vec2(-20, 0), draw: true },
  },
  {
    type: "box",
    opt: { width: 1, height: 40, center: new Vec2(20, 0), draw: true },
  },
  {
    type: "box",
    opt: { width: 40, height: 1, center: new Vec2(0, -20), draw: true },
  },
  {
    type: "box",
    opt: { width: 40, height: 1, center: new Vec2(0, 20), draw: true },
  },
];

const CONTAINER_FIXTURES: KPFixtureDef[] = [
  { density: 5 },
  { density: 5 },
  { density: 5 },
  { density: 5 },
  { density: 5 },
  { density: 5 },
  { density: 5 },
  { density: 5 },
];

const tumblerScene = (k: KAPLANCKCtx) => () => {
  const scene = k.add([]);

  const worldContainer = scene.add([k.kpWorld(new Vec2(0, 10))]);

  const ground = worldContainer.add([k.kpPos(), k.kpRotate(), k.kpBody()]);

  const container = worldContainer.add([
    k.kpPos(k.kpCenter()),
    k.kpRotate(),
    k.kpBody({ type: "dynamic", allowSleep: false }),
    k.kpShapes(CONTAINER_SHAPES),
    k.kpFixtures(CONTAINER_FIXTURES),
  ]);

  // TODO: create a component so that the joint can be drawn/visualized on debug mode
  worldContainer.world.createJoint(
    new RevoluteJoint(
      {
        motorSpeed: 0.08 * Math.PI,
        maxMotorTorque: 1e8,
        enableMotor: true,
      },
      ground.body!,
      container.body!,
      k.kpCenter(),
    ),
  );

  let count = 200;

  while (count--) {
    worldContainer.add([
      k.kpPos(
        k
          .kpCenter()
          .add({ x: Math.random() * 20 - 10, y: Math.random() * 20 - 10 }),
      ),
      k.kpRotate(),
      k.kpBody({ type: "dynamic" }),
      k.kpBoxShape({ width: 1, height: 1, draw: true }),
      k.kpFixture({ density: 1 }),
      k.color(100, 0, 0),
    ]);
  }

  addScenesButtons(k, scene);
};

export default tumblerScene;
