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

import { addScenesButtons, type KAPLANCKCtx } from "../shared";

const addPairScene = (k: KAPLANCKCtx) => () => {
  const scene = k.add([]);

  const worldContainer = scene.add([k.kpWorld()]);

  for (let i = 0; i < 50; i++) {
    worldContainer.add([
      k.kpPos(
        k.kpCenter().add({ x: Math.random() * -6, y: Math.random() * 2 - 1 }),
      ),
      k.kpRotate(),
      k.kpCircleShape({ radius: 0.1, draw: true }),
      k.kpBody({ type: "dynamic" }),
      k.kpFixture(),
    ]);
  }

  const box = worldContainer.add([
    k.kpPos(k.kpCenter().add({ x: -40, y: 0 })),
    k.kpRotate(),
    k.kpBoxShape({ width: 3, height: 3, draw: true }),
    k.kpBody({ type: "dynamic", bullet: true }),
    k.kpFixture({ density: 1 }),
  ]);

  box.setLinearVelocity({ x: 100, y: 0 });

  addScenesButtons(k, scene);
};

export default addPairScene;
