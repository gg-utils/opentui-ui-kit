/**
 * @fileoverview Shared OpenTUI labeled progress primitive for terminal progress states.
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/progress/LabeledProgress.tsx');"
 * @see packages/opentui-ui-kit/src/progress/index.ts - Barrel.
 * @see packages/opentui-ui-kit/src/progress/types.ts - Progress component prop type definitions.
 * @documentation reviewed=2026-05-07 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import { LabeledProgressProps } from "./types";
/**
 * Terminal progress track with optional label placement and trailing percentage text.
 *
 * @remarks
 * USAGE: Label layout branches on `labelPosition`; omit `label` to render bar-only output.
 */
declare const LabeledProgress: ({ value, max, width, fillChar, emptyChar, fillColor, emptyColor, label, labelPosition, labelColor, showPercentage, percentageColor, percentageDecimals, }: LabeledProgressProps) => import("react").ReactNode;
export { LabeledProgress };
export default LabeledProgress;
//# sourceMappingURL=LabeledProgress.d.ts.map