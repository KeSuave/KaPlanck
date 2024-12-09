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

const motorJointScene = (k: KAPLANCKCtx) => () => {
  const scene = k.add([]);

  const worldContainer = scene.add([k.kpWorld(new Vec2(0, 10))]);

  const ground = worldContainer.add([
    k.kpPos(k.kpCenter()),
    k.kpRotate(),
    k.kpBody(),
    k.kpEdgeShape({
      v1: new Vec2(-20, 0),
      v2: new Vec2(20, 0),
      draw: true,
    }),
    k.kpFixture(),
  ]);

  const box = worldContainer.add([
    k.kpPos(k.kpCenter().add({ x: 0, y: -8 })),
    k.kpRotate(),
    k.kpBody({ type: "dynamic" }),
    k.kpBoxShape({
      width: 4,
      height: 1,
      draw: true,
      fill: false,
    }),
    k.kpFixture({
      friction: 0.6,
      density: 2,
    }),
    k.outline(1, new k.Color(255, 255, 255)),
  ]);

  const joint = worldContainer.add([
    k.kpMotorJoint(
      {
        maxForce: 1000,
        maxTorque: 1000,
        draw: true,
      },
      ground,
      box,
      worldContainer,
    ),
  ]);

  let time = 0;

  worldContainer.onUpdate(() => {
    time += k.dt();

    joint.setLinearOffset(
      new Vec2(6 * Math.sin(2 * time), -8 + 4 * Math.sin(time)),
    );
    joint.setAngularOffset(4 * time);
  });

  addScenesButtons(k, scene);
};

export default motorJointScene;
