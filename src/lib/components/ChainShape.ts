import type { ColorComp, GameObj, KAPLAYCtx, Vec2 as KaVec2 } from "kaplay";
import {
  getAngle,
  getRotatedLine,
  type KPShapeComp,
  type KPShapeCompOpt,
} from "./Shape";

import { ChainShape, type Vec2Value } from "planck";
import { p2kVec2 } from "../utils";

export interface KPChainShapeComp extends KPShapeComp {
  shape: ChainShape;
}

export interface KPChainShapeCompOpt extends KPShapeCompOpt {
  vertices?: Vec2Value[];
  loop?: boolean;
}

type ChainShapeCompThis = GameObj<KPChainShapeComp>;

export default function chainShape(
  k: KAPLAYCtx,
  opt?: KPChainShapeCompOpt,
): KPChainShapeComp {
  return {
    id: "kpShape",
    shape: new ChainShape(opt?.vertices, opt?.loop),

    draw(this: ChainShapeCompThis) {
      if (!opt?.draw) return;

      const angle = getAngle(this);

      const vertices = this.shape.m_vertices;
      const pts: KaVec2[] = [];

      for (let i = 0; i < vertices.length - 1; i++) {
        const line = getRotatedLine(vertices[i], vertices[i + 1], angle);

        pts.push(p2kVec2(k, line.p1));

        if (i === vertices.length - 2) {
          pts.push(p2kVec2(k, line.p2));
        }
      }

      if (opt?.loop) {
        pts.push(pts[0]);
      }

      k.drawLines({
        pts,
        color: (this as unknown as ColorComp).color,
      });
    },
  };
}
