/*
 * MIT License
 * Copyright (c) 2019 Erin Catto
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { Vec2 } from "planck";
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

  worldContainer.add([
    k.kpRevoluteJoint(
      {
        motorSpeed: 0.08 * -Math.PI,
        maxMotorTorque: 1e8,
        enableMotor: true,
        localAnchorA: k.kpCenter(),
        localAnchorB: Vec2.zero(),
        referenceAngle: 0,
      },
      ground,
      container,
      worldContainer,
    ),
  ]);

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
