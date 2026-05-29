/**
 * @fileoverview Shared OpenTUI basic progress primitive for terminal progress bars.
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/progress/ProgressBar.tsx');"
 * @see packages/opentui-ui-kit/src/progress/index.ts - Barrel export for the progress module.
 * @see packages/opentui-ui-kit/src/progress/types.ts - Prop type definitions for the progress bar component.
 * @documentation reviewed=2026-05-07 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import { ProgressBarProps } from "./types";
/**
 * Renders a two-tone OpenTUI progress bar from a numeric ratio against `max`.
 *
 * @remarks
 * `value` is clamped to `[0, max]` before allocating `width` cells across `fillChar` and
 * `emptyChar` with the configured foreground colors.
 */
declare const ProgressBar: ({ value, max, width, fillChar, emptyChar, fillColor, emptyColor, }: ProgressBarProps) => import("react").ReactNode;
export { ProgressBar };
export default ProgressBar;
//# sourceMappingURL=ProgressBar.d.ts.map