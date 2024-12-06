import { RevoluteJoint, Vec2 } from "planck";
import { addScenesButtons, type KAPLANCKCtx } from "../shared";

const tumblerScene = (k: KAPLANCKCtx) => () => {
  const scene = k.add([]);

  const worldContainer = scene.add([k.kpWorld(new Vec2(0, 10))]);

  const ground = worldContainer.add([k.kpPos(), k.kpRotate(), k.kpBody()]);

  const container = worldContainer.add([
    k.kpPos(k.kpCenter()),
    k.kpRotate(),
    k.kpBody({ type: "dynamic", allowSleep: false }),
  ]);

  container.add([
    k.kpCircleShape({
      radius: 2,
      position: { x: -10, y: -10 },
      draw: true,
      fill: false,
    }),
    k.kpFixture({ density: 5 }),
    k.outline(1, new k.Color(200, 200, 200)),
  ]);
  container.add([
    k.kpCircleShape({
      radius: 2,
      position: { x: 10, y: -10 },
      draw: true,
      fill: false,
    }),
    k.kpFixture({ density: 5 }),
    k.outline(1, new k.Color(200, 200, 200)),
  ]);
  container.add([
    k.kpCircleShape({
      radius: 2,
      position: { x: -10, y: 10 },
      draw: true,
      fill: false,
    }),
    k.kpFixture({ density: 5 }),
    k.outline(1, new k.Color(200, 200, 200)),
  ]);
  container.add([
    k.kpCircleShape({
      radius: 2,
      position: { x: 10, y: 10 },
      draw: true,
      fill: false,
    }),
    k.kpFixture({ density: 5 }),
    k.outline(1, new k.Color(200, 200, 200)),
  ]);
  container.add([
    k.kpBoxShape({
      width: 1,
      height: 40,
      center: { x: -20, y: 0 },
      draw: true,
      fill: false,
    }),
    k.kpFixture({ density: 5 }),
    k.outline(1, new k.Color(200, 200, 200)),
  ]);
  container.add([
    k.kpBoxShape({
      width: 1,
      height: 40,
      center: { x: 20, y: 0 },
      draw: true,
      fill: false,
    }),
    k.kpFixture({ density: 5 }),
    k.outline(1, new k.Color(200, 200, 200)),
  ]);
  container.add([
    k.kpBoxShape({
      width: 40,
      height: 1,
      center: { x: 0, y: -20 },
      draw: true,
      fill: false,
    }),
    k.kpFixture({ density: 5 }),
    k.outline(1, new k.Color(200, 200, 200)),
  ]);
  container.add([
    k.kpBoxShape({
      width: 40,
      height: 1,
      center: { x: 0, y: 20 },
      draw: true,
      fill: false,
    }),
    k.kpFixture({ density: 5 }),
    k.outline(1, new k.Color(200, 200, 200)),
  ]);

  // TODO: create a component so that the joint can be drawn/visualized on debug mode
  worldContainer.world.createJoint(
    new RevoluteJoint(
      {
        motorSpeed: 0.08 * Math.PI,
        maxMotorTorque: 1e8,
        enableMotor: true,
      },
      ground.body,
      container.body,
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
      k.kpBoxShape({ width: 1, height: 1, draw: true, fill: false }),
      k.kpFixture({ density: 1 }),
      k.outline(1, new k.Color(200, 200, 200)),
    ]);
  }

  addScenesButtons(k, scene);
};

export default tumblerScene;
