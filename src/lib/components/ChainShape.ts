import type { GameObj, KAPLAYCtx, Vec2 as KaVec2 } from "kaplay";
import { type KPShapeComp, type KPShapeOpt } from "./Shape";

import { ChainShape, type Vec2Value } from "planck";
import { getRenderProps, p2kVec2 } from "../utils";

export interface KPChainShapeComp extends KPShapeComp {
  shape: ChainShape;
}

export interface KPChainShapeOpt extends KPShapeOpt {
  vertices?: Vec2Value[];
  loop?: boolean;
}

type ChainShapeCompThis = GameObj<KPChainShapeComp>;

export default function chainShape(
  k: KAPLAYCtx,
  opt?: KPChainShapeOpt,
): KPChainShapeComp {
  return {
    id: "kpShape",
    shape: new ChainShape(opt?.vertices, opt?.loop),

    draw(this: ChainShapeCompThis) {
      drawChainShape(k, opt, this, this.shape);
    },
  };
}

export function drawChainShape(
  k: KAPLAYCtx,
  opt: KPChainShapeOpt | undefined,
  obj: GameObj,
  shape: ChainShape,
) {
  if (!opt?.draw) return;

  const renderingProps = getRenderProps(obj);
  const vertices = shape.m_vertices;

  const pts: KaVec2[] = [];
  for (let i = 0; i < vertices.length - 1; i++) {
    pts.push(p2kVec2(k, vertices[i]));

    if (i === vertices.length - 2) {
      pts.push(p2kVec2(k, vertices[i + 1]));
    }
  }

  if (opt?.loop) {
    pts.push(pts[0]);
  }

  k.drawLines({
    ...renderingProps,
    pts,
  });
}
