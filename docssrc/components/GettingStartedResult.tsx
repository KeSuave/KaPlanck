import kaplay, { type KAPLAYCtx } from "kaplay";
import { Vec2 } from "planck";
import * as React from "react";
import KaPlanckPlugin, { KaPlanckPluginCtx } from "../../src/lib/plugin";

export default function GettingStartedResult() {
  const gameCanvasRef = React.useRef<HTMLCanvasElement>(null);
  const context = React.useRef<KAPLAYCtx>();

  React.useEffect(() => {
    if (gameCanvasRef.current === null) return;

    if (!context.current) {
      context.current = kaplay({
        global: false,
        background: [20, 20, 20],
        plugins: [
          KaPlanckPlugin({
            lengthUnitsPerMeter: 10,
          }),
        ],
        debug: true,
        debugKey: "d",
        logTime: 30,
        canvas: gameCanvasRef.current,
        width: 400,
        height: 300,
        letterbox: true,
        focus: false,
      });

      createScene(context.current as KAPLAYCtx & KaPlanckPluginCtx);
    }

    return () => {
      context.current?.quit();

      context.current = undefined;
    };
  }, []);

  return (
    <div className="gettingStartedResultContainer">
      <canvas id="game" ref={gameCanvasRef} width={400} height={300} />
    </div>
  );
}

function createScene(k: KAPLAYCtx & KaPlanckPluginCtx) {
  const worldContainer = k.add([
    k.kpWorld({
      gravity: new Vec2(0, 10),
    }),
  ]);

  worldContainer.paused = true;

  worldContainer.add([
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
    k.kpPos(k.kpCenter().sub({ x: k.rand(-10, 10), y: k.rand(10, 15) })),
    k.kpRotate(),
    k.kpCircleShape({
      radius: 1,
      draw: true,
    }),
    k.kpBody({ type: "dynamic" }),
    k.kpFixture({ density: 1, friction: 0.3 }),
    k.offscreen({ destroy: true }),
  ]);

  const msgBG = k.add([k.rect(k.width(), k.height()), k.color(0, 0, 0)]);

  const msg = k.add([
    k.pos(k.center()),
    k.text("Click to view result", { size: 20 }),
    k.color(200, 200, 200),
    k.anchor("center"),
  ]);

  k.onClick(() => {
    msgBG.hidden = true;
    msg.hidden = true;

    worldContainer.paused = false;
  });
}
