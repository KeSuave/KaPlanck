import type { GameObj, KAPLAYCtx } from "kaplay";

import type KaPlanckPlugin from "../lib";

export type KAPLANCKCtx = KAPLAYCtx & KaPlanckPlugin;

export function addScenesButtons(k: KAPLAYCtx, scene: GameObj) {
  const scenes = Object.keys(k._k.game.scenes);
  const spacing = 10;
  const width = 200;
  const height = 40;
  const totalHeight = k.height() - spacing * 2;

  let x = k.width() - width - spacing;
  let y = spacing;

  for (let i = 0; i < scenes.length; i++) {
    const sceneName = scenes[i];

    const button = scene.add([
      k.color(0, 0, 0),
      k.rect(width, height),
      k.pos(x + width / 2, y + height / 2),
      k.anchor("center"),
      k.area(),
      k.opacity(0.7),
    ]);

    const buttonText = button.add([
      k.color(255, 255, 255),
      k.text(sceneName, { size: 16 }),
      k.pos(0, 0),
      k.anchor("center"),
    ]);

    button.onHoverUpdate(() => {
      buttonText.color = k.CYAN;
    });

    button.onHoverEnd(() => {
      buttonText.color = k.WHITE;
    });

    button.onClick(() => {
      k.go(sceneName);
    });

    y += height + spacing;

    if (y > totalHeight) {
      x -= width + spacing;
      y = 10;
    }
  }
}
