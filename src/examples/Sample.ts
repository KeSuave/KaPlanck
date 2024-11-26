import type { KPShapeComp, KPWorldComp } from "../lib";

import type { GameObj } from "kaplay";
import { Vec2 } from "planck";
import { addScenesButtons, type KAPLANCKCtx } from "../shared";

const sampleScene = (k: KAPLANCKCtx) => () => {
  const scene = k.add([]);

  const worldContainer = scene.add([
    k.kpWorld({
      gravity: new Vec2(0, 10),
    }),
  ]);

  worldContainer.add([
    k.color(100, 100, 100),
    k.kpPos(k.kpCenter()),
    k.kpRotate(Math.PI * 0.1),
    k.kpEdgeShape({
      v1: new Vec2(-10, 0),
      v2: new Vec2(10, 0),
      draw: true,
    }),
    k.kpBody({
      type: "static",
    }),
    k.kpFixture(),
  ]);

  worldContainer.add([
    k.kpPos(k.kpCenter().add({ x: 18, y: 5 })),
    k.kpRotate(Math.PI * 0.1),
    k.kpChainShape({
      vertices: [new Vec2(0, 0), new Vec2(-10, 5), new Vec2(-15, 10)],
      draw: true,
    }),
    k.kpBody({ type: "static" }),
    k.kpFixture(),
  ]);

  worldContainer.onKeyDown("b", () => addShape("box", worldContainer, k));
  worldContainer.onKeyDown("c", () => addShape("circle", worldContainer, k));
  worldContainer.onKeyDown("p", () => addShape("poly", worldContainer, k));
  worldContainer.onKeyDown("r", () => addRandomShape(worldContainer, k));

  scene.add([
    k.pos(10, 10),
    k.rect(250, 80, {
      radius: 5,
    }),
    k.color(0, 0, 0),
    k.opacity(0.7),
  ]);

  const fps = scene.add([k.text("fps: 60", { size: 20 }), k.pos(20, 15)]);

  const shapesCreatedText = scene.add([
    k.text("Shapes created: 0", { size: 20 }),
    k.pos(20, 40),
  ]);

  const currentShapesText = scene.add([
    k.text("Shapes displayed: 0", { size: 20 }),
    k.pos(20, 65),
  ]);

  addScenesButtons(k, scene);

  let shapesCreated = 0;
  let currentShapes = 0;

  k.onAdd("shape", () => {
    shapesCreated++;
    currentShapes++;

    shapesCreatedText.text = `Shapes created: ${shapesCreated}`;
    currentShapesText.text = `Shapes displayed: ${currentShapes}`;
  });

  k.onDestroy("shape", () => {
    currentShapes--;

    currentShapesText.text = `Shapes displayed: ${currentShapes}`;
  });

  k.onUpdate(() => {
    fps.text = `fps: ${Math.round(k.debug.fps())}`;
  });
};

type DrawableShape = "box" | "circle" | "poly";

function addShape(
  shapeType: DrawableShape,
  worldContainer: GameObj<KPWorldComp>,
  k: KAPLANCKCtx,
) {
  let color = { r: 0, g: 0, b: 0 };
  let comp: KPShapeComp;

  switch (shapeType) {
    case "box":
      color = { r: 200, g: 0, b: 0 };
      comp = k.kpBoxShape({
        width: Math.max(k.rand(), 0.1),
        height: Math.max(k.rand(), 0.1),
        draw: true,
      });
      break;
    case "circle":
      color = { r: 0, g: 200, b: 0 };
      comp = k.kpCircleShape({
        radius: Math.max(k.rand(), 0.1),
        draw: true,
      });
      break;
    case "poly":
      color = { r: 0, g: 0, b: 200 };
      comp = k.kpPolygonShape({
        vertices: [
          {
            x: -Math.cos(Math.PI / 4) * Math.max(k.rand(), 0.1),
            y: Math.sin(Math.PI / 4) * Math.max(k.rand(), 0.1),
          },
          {
            x: Math.cos(Math.PI / 4) * Math.max(k.rand(), 0.1),
            y: Math.sin(Math.PI / 4) * Math.max(k.rand(), 0.1),
          },
          {
            x: 0,
            y: -Math.max(k.rand(), 0.1),
          },
        ],
        draw: true,
      });
      break;
    default:
      throw new Error("Unknown shape");
  }

  worldContainer.add([
    k.color(color.r, color.g, color.b),
    k.kpPos(k.kpCenter().sub({ x: k.rand(-10, 10), y: k.rand(10, 15) })),
    k.kpRotate(),
    comp,
    k.kpBody({ type: "dynamic" }),
    k.kpFixture({ density: 1, friction: 0.3 }),
    k.offscreen({ destroy: true }),
    "shape",
  ]);
}

function addRandomShape(worldContainer: GameObj<KPWorldComp>, k: KAPLANCKCtx) {
  const shapeType = ["box", "circle", "poly"][k.randi(0, 3)];

  addShape(shapeType as DrawableShape, worldContainer, k);
}

export default sampleScene;
