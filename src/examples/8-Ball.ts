/*

The MIT License

Copyright (c) 2023 Erin Catto, Ali Shakiba

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

import { Settings, Vec2, type Vec2Value } from "planck";

import type { ColorComp, GameObj } from "kaplay";
import type {
  KPBodyComp,
  KPBodyDef,
  KPCircleShapeComp,
  KPFixtureComp,
  KPFixtureDef,
  KPPosComp,
} from "../lib";
import { addScenesButtons, type KAPLANCKCtx } from "../shared";

type Ball = GameObj<
  ColorComp | KPPosComp | KPBodyComp | KPFixtureComp | KPCircleShapeComp
>;

const eightBallScene = (k: KAPLANCKCtx) => () => {
  const scene = k.add(["scene"]);

  Settings.velocityThreshold = 0;

  scene.onDestroy(() => {
    Settings.velocityThreshold = 1;
  });

  const sinPI4 = Math.sin(Math.PI / 4);
  const ballRadius = 1;
  const pocketRadius = 1.6;

  const width = k.p2u(k.width() - 200);
  const height = k.p2u(k.height() - 200);

  const railH = [
    new Vec2(pocketRadius, height * 0.5),
    new Vec2(pocketRadius, height * 0.5 + pocketRadius),
    new Vec2(
      width * 0.5 - pocketRadius / sinPI4 + pocketRadius,
      height * 0.5 + pocketRadius,
    ),
    new Vec2(width * 0.5 - pocketRadius / sinPI4, height * 0.5),
  ];
  const railV = [
    new Vec2(width * 0.5, -(height * 0.5 - pocketRadius / sinPI4)),
    new Vec2(
      width * 0.5 + pocketRadius,
      -(height * 0.5 - pocketRadius / sinPI4 + pocketRadius),
    ),
    new Vec2(
      width * 0.5 + pocketRadius,
      height * 0.5 - pocketRadius / sinPI4 + pocketRadius,
    ),
    new Vec2(width * 0.5, height * 0.5 - pocketRadius / sinPI4),
  ];
  const railFixDef = {
    friction: 0.1,
    restitution: 0.9,
    userData: {
      tag: "rail",
    },
  };
  const pocketFixDef = {
    userData: { tag: "pocket" },
  };
  const ballFixDef: KPFixtureDef = {
    friction: 0.1,
    restitution: 0.99,
    density: 1,
    userData: { tag: "ball" },
  };
  const ballBodyDef: KPBodyDef = {
    type: "dynamic",
    bullet: true,
    linearDamping: 1.5,
    angularDamping: 1,
  };

  const worldContainer = scene.add([k.kpWorld(), "world"]);

  // vertical rails
  worldContainer.add([
    k.color(40, 40, 40),
    k.kpPos(k.kpCenter()),
    k.kpRotate(),
    k.kpPolygonShape({
      vertices: railV,
      draw: true,
    }),
    k.kpBody(),
    k.kpFixture(railFixDef),
    "rail",
  ]);
  worldContainer.add([
    k.color(40, 40, 40),
    k.kpPos(k.kpCenter()),
    k.kpRotate(),
    k.kpPolygonShape({
      vertices: mirror(railV, -1, 1),
      draw: true,
    }),
    k.kpBody(),
    k.kpFixture(railFixDef),
    "rail",
  ]);

  // horizontal rails
  worldContainer.add([
    k.color(40, 40, 40),
    k.kpPos(k.kpCenter()),
    k.kpRotate(),
    k.kpPolygonShape({
      vertices: railH,
      draw: true,
    }),
    k.kpBody(),
    k.kpFixture(railFixDef),
    "rail",
  ]);
  worldContainer.add([
    k.color(40, 40, 40),
    k.kpPos(k.kpCenter()),
    k.kpRotate(),
    k.kpPolygonShape({
      vertices: mirror(railH, -1, 1),
      draw: true,
    }),
    k.kpBody(),
    k.kpFixture(railFixDef),
    "rail",
  ]);
  worldContainer.add([
    k.color(40, 40, 40),
    k.kpPos(k.kpCenter()),
    k.kpRotate(),
    k.kpPolygonShape({
      vertices: mirror(railH, 1, -1),
      draw: true,
    }),
    k.kpBody(),
    k.kpFixture(railFixDef),
    "rail",
  ]);
  worldContainer.add([
    k.color(40, 40, 40),
    k.kpPos(k.kpCenter()),
    k.kpRotate(),
    k.kpPolygonShape({
      vertices: mirror(railH, -1, -1),
      draw: true,
    }),
    k.kpBody(),
    k.kpFixture(railFixDef),
    "rail",
  ]);

  // pockets
  worldContainer.add([
    k.color(60, 60, 60),
    k.kpPos(k.kpCenter().sub({ x: 0, y: -height * 0.5 - pocketRadius * 1.5 })),
    k.kpRotate(),
    k.kpCircleShape({ radius: pocketRadius, draw: true }),
    k.kpBody(),
    k.kpFixture(pocketFixDef),
    "pocket",
  ]);
  worldContainer.add([
    k.color(60, 60, 60),
    k.kpPos(k.kpCenter().sub({ x: 0, y: height * 0.5 + pocketRadius * 1.5 })),
    k.kpRotate(),
    k.kpCircleShape({ radius: pocketRadius, draw: true }),
    k.kpBody(),
    k.kpFixture(pocketFixDef),
    "pocket",
  ]);
  worldContainer.add([
    k.color(60, 60, 60),
    k.kpPos(
      k.kpCenter().sub({
        x: width * 0.5 + pocketRadius * 0.7,
        y: height * 0.5 + pocketRadius * 0.7,
      }),
    ),
    k.kpRotate(),
    k.kpCircleShape({ radius: pocketRadius, draw: true }),
    k.kpBody(),
    k.kpFixture(pocketFixDef),
    "pocket",
  ]);
  worldContainer.add([
    k.color(60, 60, 60),
    k.kpPos(
      k.kpCenter().sub({
        x: -width * 0.5 - pocketRadius * 0.7,
        y: height * 0.5 + pocketRadius * 0.7,
      }),
    ),
    k.kpRotate(),
    k.kpCircleShape({ radius: pocketRadius, draw: true }),
    k.kpBody(),
    k.kpFixture(pocketFixDef),
    "pocket",
  ]);
  worldContainer.add([
    k.color(60, 60, 60),
    k.kpPos(
      k.kpCenter().sub({
        x: width * 0.5 + pocketRadius * 0.7,
        y: -height * 0.5 - pocketRadius * 0.7,
      }),
    ),
    k.kpRotate(),
    k.kpCircleShape({ radius: pocketRadius, draw: true }),
    k.kpBody(),
    k.kpFixture(pocketFixDef),
    "pocket",
  ]);
  worldContainer.add([
    k.color(60, 60, 60),
    k.kpPos(
      k.kpCenter().sub({
        x: -width * 0.5 - pocketRadius * 0.7,
        y: -height * 0.5 - pocketRadius * 0.7,
      }),
    ),
    k.kpRotate(),
    k.kpCircleShape({ radius: pocketRadius, draw: true }),
    k.kpBody(),
    k.kpFixture(pocketFixDef),
    "pocket",
  ]);

  // balls
  const balls = rack(ballRadius, width / 4, 0);
  const cueBallPos = { x: -width / 4, y: 0 };
  const cueBallColor = [200, 200, 200];

  balls.push(cueBallPos);

  const ballColors = [
    [200, 0, 0],
    [0, 0, 200],
  ];

  let cueBall: Ball | null = null;

  for (let i = 0; i < balls.length; i++) {
    let color = ballColors[i % ballColors.length];

    if (i === 15) color = cueBallColor;
    if (i === 4) color = [80, 80, 80];

    const ball = addBall(
      k,
      worldContainer,
      color,
      balls[i],
      ballRadius,
      ballBodyDef,
      ballFixDef,
    );

    if (i === 15) {
      cueBall = ball;

      cueBall.use("cue");
    }
  }

  k.onKPCollideEnd("ball", "pocket", (objA) => {
    worldContainer.addToDestroyList(objA);
  });

  k.onDestroy("cue", () => {
    cueBall = null;

    k.wait(1, () => {
      cueBall = addBall(
        k,
        worldContainer,
        cueBallColor,
        cueBallPos,
        ballRadius,
        ballBodyDef,
        ballFixDef,
      );
    });
  });

  addScenesButtons(k, scene);

  let mouseDown = false;

  scene.onMousePress((button) => {
    if (button === "left") {
      if (
        cueBall &&
        cueBall.shape.testPoint(
          {
            p: { x: cueBall.getKPPosition().x, y: cueBall.getKPPosition().y },
            q: { c: 0, s: 0 },
          },
          k.kpMousePos(),
        )
      ) {
        mouseDown = true;
      }
    }
  });

  scene.onMouseRelease((button) => {
    if (button === "left") {
      if (mouseDown && cueBall) {
        const mousePos = k.kpMousePos();
        const force = {
          x: (mousePos.x - cueBall.getKPPosition().x) * -1500,
          y: (mousePos.y - cueBall.getKPPosition().y) * -1500,
        };

        cueBall.body?.applyForceToCenter(force, true);
      }

      mouseDown = false;
    }
  });

  scene.onDraw(() => {
    if (mouseDown) {
      k.drawLine({
        p1: k.mousePos(),
        // @ts-expect-error kpPos will add the pos component
        p2: cueBall.pos,
        color: new k.Color(120, 120, 120),
      });
    }
  });
};

function mirror(vertices: Vec2[], x: number, y: number) {
  return vertices.map((v) => new Vec2(x * v.x, y * v.y));
}

function rack(radius: number, xOffset: number, yOffset: number) {
  const balls: Vec2Value[] = [];
  const d = radius * 2;
  const l = Math.sin(Math.PI / 3) * d;
  const n = 5;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      balls.push({
        x: xOffset + i * l + Math.random() * radius * 0.02,
        y: yOffset + (j - i * 0.5) * d + Math.random() * radius * 0.02,
      });
    }
  }
  return balls;
}

function addBall(
  k: KAPLANCKCtx,
  container: GameObj,
  color: number[],
  position: Vec2Value,
  radius: number,
  bodyDef: KPBodyDef,
  fixtureDef: KPFixtureDef,
) {
  return container.add([
    k.color(color[0], color[1], color[2]),
    k.kpPos(k.kpCenter().add(position)),
    k.kpRotate(),
    k.kpCircleShape({ radius, draw: true }),
    k.kpBody(bodyDef),
    k.kpFixture(fixtureDef),
    "ball",
  ]);
}

export default eightBallScene;
