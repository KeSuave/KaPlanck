import type { GameObj, KAPLAYCtx, Vec2 as KaVec2, RenderProps } from "kaplay";
import { Settings, Vec2, type Vec2Value } from "planck";
import { KPBodyComp } from "./components/Body";

export function m2p(m: number) {
  return m * Settings.lengthUnitsPerMeter;
}

export function p2m(p: number) {
  return p / Settings.lengthUnitsPerMeter;
}

export function center(k: KAPLAYCtx) {
  const center = k.center();
  const vec = new Vec2(p2m(center.x), p2m(center.y));

  return vec;
}

export function k2pVec2(vec: KaVec2): Vec2 {
  return new Vec2(p2m(vec.x), p2m(vec.y));
}

export function p2kVec2(k: KAPLAYCtx, vec: Vec2Value): KaVec2 {
  return k.vec2(m2p(vec.x), m2p(vec.y));
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

export function hasKPBody(obj: GameObj): GameObj<KPBodyComp> | null {
  if (obj.c("kpBody")) {
    return obj as unknown as GameObj<KPBodyComp>;
  }

  if (obj.parent && obj.parent.c("kpBody")) {
    return obj.parent as unknown as GameObj<KPBodyComp>;
  }

  return null;
}
