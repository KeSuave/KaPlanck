import { Vec2 } from "planck";
import { addScenesButtons, type KAPLANCKCtx } from "../shared";

const sphereStackScene = (k: KAPLANCKCtx) => () => {
  const scene = k.add([]);

  const worldContainer = scene.add([k.kpWorld(new Vec2(0, 10))]);

  const COUNT = 10;

  worldContainer.add([
    k.kpPos(k.kpCenter().add({ x: 0, y: 10 })),
    k.kpRotate(),
    k.kpBody(),
    k.kpEdgeShape({
      v1: new Vec2(-40, 0),
      v2: new Vec2(40, 0),
      draw: false,
    }),
    k.kpFixture({ density: 0 }),
  ]);

  for (let i = 0; i < COUNT; i++) {
    const sphere = worldContainer.add([
      k.kpPos(
        k.kpCenter().add({
          x: 0,
          y: 4 - 3 * i,
        }),
      ),
      k.kpRotate(),
      k.kpCircleShape({ radius: 1, draw: true }),
      k.kpBody({ type: "dynamic" }),
      k.kpFixture({ density: 1 }),
    ]);

    k.wait(10, () => {
      sphere.setAwake(false);
    });

    sphere.setLinearVelocity({ x: 0, y: 50 });
  }

  addScenesButtons(k, scene);
};

export default sphereStackScene;
