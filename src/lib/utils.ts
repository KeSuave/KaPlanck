import type { GameObj, KAPLAYCtx } from "kaplay";
import { type World } from "planck";

import type { KPWorldComp } from "./components/World";

/**
 * Get the world from a game object.
 *
 * @export
 * @param {GameObj} obj The game object to get the world from.
 * @return {(World | null)}
 */
export function getWorldFromGameObj(obj: GameObj): World | null {
  let world: World | null = null;

  const container = getWorldContainerFromGameObj(obj);
  if (container) {
    world = container.world;
  }

  return world;
}

/**
 * Get the world game object container from a game object.
 *
 * @export
 * @param {GameObj} obj The game object to get the container from.
 * @return {(GameObj<KPWorldComp> | null)}
 */
export function getWorldContainerFromGameObj(
  obj: GameObj,
): GameObj<KPWorldComp> | null {
  let container: GameObj<KPWorldComp> | null = null;

  let parent = obj.parent as GameObj<KPWorldComp> | null;
  while (parent) {
    const worldComp = parent.c("kpWorld") as KPWorldComp | null;

    if (worldComp) {
      container = parent;

      break;
    }

    parent = parent.parent as GameObj<KPWorldComp> | null;
  }

  return container;
}

/**
 * Find the fist world game object container.
 *
 * @export
 * @param {KAPLAYCtx} k The KAPLAY context to search in.
 * @return {(GameObj<KPWorldComp> | null)}
 */
export function findWorldContainer(k: KAPLAYCtx): GameObj<KPWorldComp> | null {
  let obj: GameObj<KPWorldComp> | null = null;

  const objs = k.get("*", { recursive: true });

  for (const currentObj of objs) {
    const possibleWorldComp = currentObj.c("kpWorld") as KPWorldComp | null;

    if (possibleWorldComp) {
      obj = currentObj as GameObj<KPWorldComp>;

      break;
    }
  }

  return obj;
}
