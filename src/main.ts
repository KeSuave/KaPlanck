import kaplay from "kaplay";
import eightBallScene from "./examples/8-Ball";
import addPairScene from "./examples/AddPair";
import applyForceScene from "./examples/ApplyForce";
import sampleScene from "./examples/Sample";
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
});

k.scene("sample", sampleScene(k));
k.scene("eightBall", eightBallScene(k));
k.scene("addPair", addPairScene(k));
k.scene("applyForce", applyForceScene(k));

k.go("sample");
