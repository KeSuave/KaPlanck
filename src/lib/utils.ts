import type { GameObj, KAPLAYCtx, Vec2 as KaVec2, RenderProps } from "kaplay";
import { Settings, Vec2, type Vec2Value, type World } from "planck";

import type { KPWorldComp } from "./components/World";

export function u2p(u: number) {
  return u * Settings.lengthUnitsPerMeter;
}

export function p2u(p: number) {
  return p / Settings.lengthUnitsPerMeter;
}

export function center(k: KAPLAYCtx) {
  const center = k.center();
  const vec = new Vec2(p2u(center.x), p2u(center.y));

  return vec;
}

export function k2pVec2(vec: KaVec2): Vec2 {
  return new Vec2(p2u(vec.x), p2u(vec.y));
}

export function p2kVec2(k: KAPLAYCtx, vec: Vec2Value): KaVec2 {
  return k.vec2(u2p(vec.x), u2p(vec.y));
}

export function getWorldFromGameObj(obj: GameObj) {
  let world: World | null = null;

  let parent = obj.parent;
  while (parent) {
    const worldComp = parent.c("kpWorld") as KPWorldComp | null;

    if (worldComp) {
      world = worldComp.world;

      break;
    }

    parent = parent.parent;
  }

  return world;
}

export function getRenderProps(obj: GameObj): RenderProps {
  return {
    color: obj.color,
    opacity: obj.opacity,
    outline: obj.outline,
    shader: obj.shader,
    uniform: obj.uniform,
  };
}

export function findWorldContainer(k: KAPLAYCtx): GameObj<KPWorldComp> | null {
  let obj: GameObj<KPWorldComp> | null = null;

  const objs = k.get("*");

  for (const currentObj of objs) {
    const possibleWorldComp = currentObj.c("kpWorld") as KPWorldComp | null;

    if (possibleWorldComp) {
      obj = currentObj as GameObj<KPWorldComp>;

      break;
    }
  }

  return obj;
}
