/**
 * @fileoverview Shared OpenTUI basic progress primitive for terminal progress bars.
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/progress/ProgressBar.tsx');"
 * @see packages/opentui-ui-kit/src/progress/index.ts - Barrel export for the progress module.
 * @see packages/opentui-ui-kit/src/progress/types.ts - Prop type definitions for the progress bar component.
 * @documentation reviewed=2026-05-07 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import { ProgressBarProps } from "./types";

/**
 * Coerces a numeric input into the inclusive `[min, max]` interval.
 *
 * @remarks
 * Keeps progress fill math stable when callers pass out-of-range `value` inputs.
 */
function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Renders a two-tone OpenTUI progress bar from a numeric ratio against `max`.
 *
 * @remarks
 * `value` is clamped to `[0, max]` before allocating `width` cells across `fillChar` and
 * `emptyChar` with the configured foreground colors.
 */
const ProgressBar = ({
  value,
  max = 100,
  width = 20,
  fillChar = "█",
  emptyChar = "░",
  fillColor = "#00FF00",
  emptyColor = "#666666",
}: ProgressBarProps) => {
  // Clamp value between 0 and max
  const clampedValue = clamp(value, 0, max);

  // Calculate filled and empty portions
  const progressRatio = max > 0 ? clampedValue / max : 0;
  const filled = Math.round(progressRatio * width);
  const empty = Math.max(0, width - filled);

  return (
    <box>
      <text fg={fillColor}>{fillChar.repeat(filled)}</text>
      <text fg={emptyColor}>{emptyChar.repeat(empty)}</text>
    </box>
  );
};

export { ProgressBar };
export default ProgressBar;
