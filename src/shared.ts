import type { GameObj, KAPLAYCtx, SceneDef, SceneName } from "kaplay";

import bodyScene from "./checks/body";
import eightBallScene from "./examples/8-Ball";
import addPairScene from "./examples/AddPair";
import applyForceScene from "./examples/ApplyForce";
import motorJointScene from "./examples/MotorJoint";
import sampleScene from "./examples/Sample";
import tumblerScene from "./examples/Tumbler";
import webScene from "./examples/Web";
import type { KaPlanckPluginCtx } from "./lib";

export type KAPLANCKCtx = KAPLAYCtx & KaPlanckPluginCtx;

type ExampleCheckScene = (k: KAPLANCKCtx) => SceneDef;

export const checks: [SceneName, ExampleCheckScene][] = [["body", bodyScene]];

export const examples: [SceneName, ExampleCheckScene][] = [
  ["sample", sampleScene],
  ["eightBall", eightBallScene],
  ["addPair", addPairScene],
  ["applyForce", applyForceScene],
  ["motorJoint", motorJointScene],
  ["tumbler", tumblerScene],
  ["web", webScene],
];

export function addScenesButtons(k: KAPLAYCtx, scene: GameObj) {
  const spacing = 10;
  const width = 200;
  const height = 40;
  const totalHeight = k.height() - spacing * 2;

  const checksContainer = scene.add([
    k.color(0, 0, 0),
    k.rect(k.width() - 200, k.height() - 200),
    k.pos(100, 100),
    k.opacity(0.7),
  ]);

  checksContainer.hidden = true;

  let x = spacing;
  let y = spacing;

  for (let i = 0; i < checks.length; i++) {
    const sceneName = checks[i][0];

    const { button, buttonText } = addSceneButton(
      k,
      checksContainer,
      sceneName,
      x,
      y,
      width,
      height,
    );

    button.onHoverUpdate(() => {
      buttonText.color = k.CYAN;
    });

    button.onHoverEnd(() => {
      buttonText.color = k.WHITE;
    });

    button.onClick(() => {
      if (checksContainer.hidden) return;

      goToScene(k, sceneName);
    });

    y += height + spacing;
  }

  x = k.width() - width - spacing;
  y = spacing;

  for (let i = 0; i <= examples.length; i++) {
    const sceneName = i < examples.length ? examples[i][0] : "checks";

    const { button, buttonText } = addSceneButton(
      k,
      scene,
      sceneName,
      x,
      y,
      width,
      height,
    );

    button.onHoverUpdate(() => {
      buttonText.color = k.CYAN;
    });

    button.onHoverEnd(() => {
      buttonText.color = k.WHITE;
    });

    button.onClick(() => {
      if (i < examples.length) {
        goToScene(k, sceneName);
      } else {
        checksContainer.hidden = !checksContainer.hidden;
      }
    });

    y += height + spacing;

    if (y > totalHeight) {
      x -= width + spacing;
      y = 10;
    }
  }
}

function addSceneButton(
  k: KAPLAYCtx,
  container: GameObj,
  sceneName: SceneName,
  x: number,
  y: number,
  width: number,
  height: number,
) {
  const button = container.add([
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

  return { button, buttonText };
}

export function goToScene(k: KAPLAYCtx, sceneName: SceneName) {
  localStorage.setItem("KaPlanck.lastVisitedScene", sceneName);

  k.go(sceneName);
}
