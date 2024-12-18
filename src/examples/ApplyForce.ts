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

import { Transform, Vec2 } from "planck";
import { KPFixtureDef } from "../lib";
import { addScenesButtons, type KAPLANCKCtx } from "../shared";

const applyForceScene = (k: KAPLANCKCtx) => () => {
  const scene = k.add([]);
  const worldContainer = scene.add([k.kpWorld()]);

  // ground
  const wallFixtureDef: KPFixtureDef = {
    density: 0,
    restitution: 0.4,
  };

  const ground = worldContainer.add([
    k.kpPos(k.kpCenter()),
    k.kpRotate(),
    k.kpBody(),
  ]);

  ground.add([
    k.kpEdgeShape({
      v1: { x: -20, y: -20 },
      v2: { x: -20, y: 20 },
      draw: true,
    }),
    k.kpFixture({ ...wallFixtureDef }),
  ]);

  ground.add([
    k.kpEdgeShape({
      v1: { x: 20, y: -20 },
      v2: { x: 20, y: 20 },
      draw: true,
    }),
    k.kpFixture({ ...wallFixtureDef }),
  ]);
  ground.add([
    k.kpEdgeShape({
      v1: { x: -20, y: 20 },
      v2: { x: 20, y: 20 },
      draw: true,
    }),
    k.kpFixture({ ...wallFixtureDef }),
  ]);
  ground.add([
    k.kpEdgeShape({
      v1: { x: -20, y: -20 },
      v2: { x: 20, y: -20 },
      draw: true,
    }),
    k.kpFixture({ ...wallFixtureDef }),
  ]);
  ground.add([
    k.kpEdgeShape({
      v1: { x: -20, y: -20 },
      v2: { x: 20, y: -20 },
      draw: true,
    }),
    k.kpFixture({ ...wallFixtureDef }),
  ]);

  const xf1 = new Transform();
  const xf2 = new Transform();

  xf1.q.set(-0.3524 * Math.PI);
  xf1.p.set(xf1.q.getXAxis());
  xf2.q.set(0.3524 * Math.PI);
  xf2.p.set(Vec2.neg(xf2.q.getXAxis()));

  const jet = worldContainer.add([
    k.kpPos(k.kpCenter().add({ x: 0, y: 18 })),
    k.kpRotate(Math.PI),
    k.kpBody({
      type: "dynamic",
      angularDamping: 2,
      linearDamping: 0.5,
      allowSleep: false,
    }),
  ]);

  jet.add([
    k.kpPolygonShape({
      vertices: [
        new Vec2(-1.0, 0.0),
        new Vec2(1.0, 0.0),
        new Vec2(0.0, -0.5),
      ].map((v) => Transform.mul(xf1, v)),
      draw: true,
      fill: false,
    }),
    k.kpFixture({ density: 2 }),
    k.outline(1, new k.Color(255, 255, 255)),
  ]);
  jet.add([
    k.kpPolygonShape({
      vertices: [
        new Vec2(-1.0, 0.0),
        new Vec2(1.0, 0.0),
        new Vec2(0.0, -0.5),
      ].map((v) => Transform.mul(xf2, v)),
      draw: true,
      fill: false,
    }),
    k.kpFixture({ density: 2 }),
    k.outline(1, new k.Color(255, 255, 255)),
  ]);

  if (!ground.body) return;

  const boxFixtureDef: KPFixtureDef = {
    density: 1,
    friction: 0.3,
  };

  for (let i = 0; i < 10; ++i) {
    const box = worldContainer.add([
      k.kpPos(k.kpCenter().add({ x: 0, y: 15 - 1.54 * i })),
      k.kpRotate(),
      k.kpBoxShape({ width: 1, height: 1, draw: true, fill: false }),
      k.kpBody({ type: "dynamic" }),
      k.kpFixture(boxFixtureDef),
      k.outline(1, new k.Color(255, 255, 255)),
    ]);

    if (!box.body) return;

    const gravity = 10;
    const I = box.body.getInertia();
    const mass = box.body.getMass();
    const radius = Math.sqrt((2 * I) / mass);

    worldContainer.add([
      k.kpFrictionJoint(
        {
          collideConnected: true,
          maxForce: mass * gravity,
          maxTorque: mass * radius * gravity,
          localAnchorA: Vec2.zero(),
          localAnchorB: Vec2.zero(),
          draw: true,
        },
        ground,
        box,
        worldContainer,
      ),
    ]);
  }

  scene.onUpdate(() => {
    if (k.isKeyDown("right") && !k.isKeyDown("left")) {
      jet.body?.applyAngularImpulse(0.2, true);
    } else if (k.isKeyDown("left") && !k.isKeyDown("right")) {
      jet.body?.applyAngularImpulse(-0.2, true);
    }

    if (k.isKeyDown("up")) {
      if (!jet.body) return;

      const f = jet.body.getWorldVector(new Vec2(0, 1));
      const p = jet.body.getWorldPoint(new Vec2(0, -2));

      jet.body?.applyLinearImpulse(f, p, true);
    }
  });

  addScenesButtons(k, scene);
};

export default applyForceScene;
