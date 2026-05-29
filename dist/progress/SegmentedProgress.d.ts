/**
 * @fileoverview Shared OpenTUI segmented progress primitive for terminal progress bars.
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/progress/SegmentedProgress.tsx');"
 * @see packages/opentui-ui-kit/src/progress/index.ts - Barrel.
 * @see packages/opentui-ui-kit/src/progress/types.ts - SegmentedProgress prop type definitions.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import { SegmentedProgressProps } from "./types";
/**
 * Renders a discrete segmented progress bar with filled, partial, and empty
 * segments for terminal output.
 *
 * @remarks
 * Chooses a partial middle segment only when the fractional remainder sits outside near-empty or
 * near-full thresholds so noisy ratios do not flicker extra glyphs.
 */
declare const SegmentedProgress: ({ value, max, segments, fillChar, emptyChar, partialChar, fillColor, emptyColor, partialColor, separator, }: SegmentedProgressProps) => import("react").ReactNode;
export { SegmentedProgress };
export default SegmentedProgress;
//# sourceMappingURL=SegmentedProgress.d.ts.map