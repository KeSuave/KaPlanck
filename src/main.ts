import { checks, examples } from "./shared";

import kaplay from "kaplay";
import KaPlanckPlugin from "./lib";

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
  logTime: 30,
});

examples.forEach((example) => {
  k.scene(example[0], example[1](k));
});

checks.forEach((check) => {
  k.scene(check[0], check[1](k));
});

let startingScene = localStorage.getItem("KaPlanck.lastVisitedScene");

if (!startingScene) {
  startingScene = examples[0][0];
}

k.go(startingScene);
