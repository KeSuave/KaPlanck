import { Vec2 } from "planck";
import { addScenesButtons, type KAPLANCKCtx } from "../shared";

const bodyScene = (k: KAPLANCKCtx) => () => {
  const scene = k.add([]);

  const worldContainer = scene.add([
    k.kpWorld({
      gravity: { x: 0, y: 10 },
    }),
  ]);

  worldContainer.add([
    k.color(100, 100, 100),
    k.kpPos(k.kpCenter()),
    k.kpRotate(),
    k.kpEdgeShape({
      v1: new Vec2(-40, 10),
      v2: new Vec2(40, 10),
      draw: true,
    }),
    k.kpBody({
      type: "static",
    }),
    k.kpFixture(),
    "floor",
  ]);

  // collisionIgnore
  const box = worldContainer.add([
    k.color(100, 100, 100),
    k.kpPos(k.kpCenter()),
    k.kpRotate(),
    k.kpBoxShape({
      width: 2,
      height: 2,
      draw: true,
    }),
    k.kpBody({
      type: "dynamic",
    }),
    k.kpFixture(),
    "box",
  ]);

  const circle = worldContainer.add([
    k.color(100, 100, 100),
    k.kpPos(k.kpCenter().sub({ x: 1, y: 4 })),
    k.kpRotate(),
    k.kpCircleShape({
      radius: 1,
      draw: true,
    }),
    k.kpBody(
      {
        type: "dynamic",
      },
      ["box"],
    ),
    k.kpFixture(),
    "circle",
  ]);

  // isClicked
  box.onUpdate(() => {
    if (box.isClicked()) {
      k.debug.log("Box clicked");
    }
  });

  // isHovering / hasPoint
  circle.onUpdate(() => {
    if (circle.isHovering()) {
      k.debug.log("Circle hovering");
    }
  });

  const floatingBox = worldContainer.add([
    k.color(0, 0, 100),
    k.kpPos(k.kpCenter().add({ x: 4, y: 0 })),
    k.kpRotate(),
    k.kpBoxShape({
      width: 2,
      height: 2,
      draw: true,
    }),
    k.kpBody({
      type: "dynamic",
      gravityScale: 0,
    }),
    k.kpFixture(),
    "floatingBox",
  ]);

  const floatingCircle = worldContainer.add([
    k.color(0, 0, 100),
    k.kpPos(k.kpCenter().add({ x: 3, y: 0 })),
    k.kpRotate(),
    k.kpCircleShape({
      radius: 1,
      draw: true,
    }),
    k.kpBody({
      type: "dynamic",
      gravityScale: 0,
    }),
    k.kpFixture(),
    "floatingCircle",
  ]);

  k.wait(3, () => {
    //checkContact
    k.debug.log(
      `Check contact: ${floatingBox.checkContact(floatingCircle)?.isTouching()}`,
    );
    //isColliding
    k.debug.log(`Is colliding: ${floatingBox.isColliding(floatingCircle)}`);
    //isOverlapping
    k.debug.log(`Is overlapping: ${box.isOverlapping(circle)}`);
  });

  // onClick
  floatingBox.onClick(() => {
    k.debug.log("Floating Box clicked");
  });

  // onHover
  floatingCircle.onHover(() => {
    k.debug.log("Floating Circle hovering");
  });

  const triangle = worldContainer.add([
    k.color(0, 100, 0),
    k.kpPos(k.kpCenter().sub({ x: 4, y: 0 })),
    k.kpRotate(),
    k.kpPolygonShape({
      vertices: [
        { x: -1, y: 1 },
        { x: 1, y: 1 },
        { x: 0, y: -1 },
      ],
      draw: true,
    }),
    k.kpBody({
      type: "dynamic",
    }),
    k.kpFixture(),
    "triangle",
  ]);

  // onHoverUpdate
  triangle.onHoverUpdate(() => {
    k.debug.log("Triangle is hovering");
  });

  // onHoverEnd
  triangle.onHoverEnd(() => {
    k.debug.log("Triangle hover ended");
  });

  const greenCircle = worldContainer.add([
    k.color(0, 100, 0),
    k.kpPos(k.kpCenter().sub({ x: 4.6, y: 1 })),
    k.kpRotate(),
    k.kpCircleShape({
      radius: 0.2,
      draw: true,
    }),
    k.kpBody({
      type: "dynamic",
    }),
    k.kpFixture(),
    "greenCircle",
  ]);

  // onCollide
  triangle.onCollide("greenCircle", () => {
    k.debug.log("Triangle collided with green circle");
  });
  triangle.onCollide((obj) => {
    if (!obj.tags.includes("greenCircle")) {
      k.debug.log(`Triangle collided with: ${obj.tags}`);
    }
  });

  // onCollideUpdate
  greenCircle.onCollideUpdate("triangle", () => {
    k.debug.log("Green circle collided with triangle");

    greenCircle.color = new k.Color(100, 0, 0);
  });

  // onCollideEnd
  greenCircle.onCollideEnd(() => {
    greenCircle.color = new k.Color(0, 100, 0);
  });

  k.wait(10, () => {
    k.debug.log("Changing camera position");
    k.camPos(k.center().sub(0, 100));
  });

  addScenesButtons(k, scene);
};

export default bodyScene;
