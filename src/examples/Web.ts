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

import type { GameObj } from "kaplay";
import { Vec2 } from "planck";
import type {
  KPBodyComp,
  KPDistanceJointComp,
  KPPosComp,
  KPRotateComp,
} from "../lib";
import { addScenesButtons, type KAPLANCKCtx } from "../shared";

const webScene = (k: KAPLANCKCtx) => () => {
  const scene = k.add([]);

  const worldContainer = scene.add([k.kpWorld(new Vec2(0, 10))]);

  const ground = worldContainer.add([
    k.kpPos(k.kpCenter()),
    k.kpRotate(),
    k.kpBody(),
    k.kpEdgeShape({
      v1: new Vec2(-40, 0),
      v2: new Vec2(40, 0),
      draw: true,
    }),
    k.kpFixture(),
  ]);

  const bodies: GameObj<GameObj<KPBodyComp & KPPosComp & KPRotateComp>>[] = [];
  let joints: GameObj<KPDistanceJointComp>[] = [];

  const bodyPositions = [
    { x: -5, y: -5 },
    { x: 5, y: -5 },
    { x: 5, y: -15 },
    { x: -5, y: -15 },
  ];

  for (const pos of bodyPositions) {
    bodies.push(
      worldContainer.add([
        k.kpPos(k.kpCenter().add(pos)),
        k.kpRotate(),
        k.kpBody({ type: "dynamic" }),
        k.kpBoxShape({ width: 1, height: 1, draw: true }),
        k.kpFixture({ density: 5 }),
      ]),
    );
  }

  joints.push(
    worldContainer.add([
      k.kpDistanceJoint(
        {
          localAnchorA: new Vec2(-10, 0),
          localAnchorB: new Vec2(-0.5, 0.5),
          draw: true,
        },
        ground,
        bodies[0],
        worldContainer,
      ),
    ]),
  );
  joints.push(
    worldContainer.add([
      k.kpDistanceJoint(
        {
          localAnchorA: new Vec2(10, 0),
          localAnchorB: new Vec2(0.5, 0.5),
          draw: true,
        },
        ground,
        bodies[1],
        worldContainer,
      ),
    ]),
  );
  joints.push(
    worldContainer.add([
      k.kpDistanceJoint(
        {
          localAnchorA: new Vec2(10, -20),
          localAnchorB: new Vec2(0.5, -0.5),
          draw: true,
        },
        ground,
        bodies[2],
        worldContainer,
      ),
    ]),
  );
  joints.push(
    worldContainer.add([
      k.kpDistanceJoint(
        {
          localAnchorA: new Vec2(-10, -20),
          localAnchorB: new Vec2(-0.5, -0.5),
          draw: true,
        },
        ground,
        bodies[3],
        worldContainer,
      ),
    ]),
  );

  joints.push(
    worldContainer.add([
      k.kpDistanceJoint(
        {
          localAnchorA: new Vec2(0.5, 0),
          localAnchorB: new Vec2(-0.5, 0),
          draw: true,
        },
        bodies[0],
        bodies[1],
        worldContainer,
      ),
    ]),
  );
  joints.push(
    worldContainer.add([
      k.kpDistanceJoint(
        {
          localAnchorA: new Vec2(0, -0.5),
          localAnchorB: new Vec2(0, 0.5),
          draw: true,
        },
        bodies[1],
        bodies[2],
        worldContainer,
      ),
    ]),
  );
  joints.push(
    worldContainer.add([
      k.kpDistanceJoint(
        {
          localAnchorA: new Vec2(-0.5, 0),
          localAnchorB: new Vec2(0.5, 0),
          draw: true,
        },
        bodies[2],
        bodies[3],
        worldContainer,
      ),
    ]),
  );
  joints.push(
    worldContainer.add([
      k.kpDistanceJoint(
        {
          localAnchorA: new Vec2(0, 0.5),
          localAnchorB: new Vec2(0, -0.5),
          draw: true,
        },
        bodies[3],
        bodies[0],
        worldContainer,
      ),
    ]),
  );

  scene.onKeyRelease("x", () => {
    if (bodies.length) {
      worldContainer.addToDestroyList(bodies.pop()!);
    }
  });
  scene.onKeyRelease("z", () => {
    if (joints.length) {
      worldContainer.addToDestroyList(joints.pop()!);
    }
  });

  worldContainer.onRemoveJoint((joint) => {
    if (joints.length) {
      joints = joints.filter((j) => j !== joint);

      joint.destroy();
    }
  });

  addScenesButtons(k, scene);
};

export default webScene;
