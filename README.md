# KaPlanck

A KaPlay plugin that integrates Planck, while keeping the simple/fun API of KaPlay.

## Installation

```shell
npm i planck kaplanck
```

## Usage

<sub><sup>For more example check the examples folder</sup></sub>

```ts
import KaPlanckPlugin from "kaplanck";
import kaplay from "kaplay";
import { Vec2 } from "planck";

const k = kaplay({
  global: false,
  background: [20, 20, 20],
  plugins: [
    KaPlanckPlugin({
      lengthUnitsPerMeter: 20,
    }),
  ],
  debug: true,
  debugKey: "d",
});

const worldContainer = k.add([
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
  k.color(200, 200, 200),
  k.kpPos(k.kpCenter().sub({ x: k.rand(-10, 10), y: k.rand(10, 15) })),
  k.kpCircleShape({
    radius: 1,
    draw: true,
  }),
  k.kpBody({ type: "dynamic" }),
  k.kpFixture({ density: 1, friction: 0.3 }),
  k.offscreen({ destroy: true }),
]);
```

## Documentation

WIP
