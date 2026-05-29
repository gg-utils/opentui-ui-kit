/**
 * @fileoverview Shared OpenTUI labeled progress primitive for terminal progress states.
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/progress/LabeledProgress.tsx');"
 * @see packages/opentui-ui-kit/src/progress/index.ts - Barrel.
 * @see packages/opentui-ui-kit/src/progress/types.ts - Progress component prop type definitions.
 * @documentation reviewed=2026-05-07 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import { LabeledProgressProps } from "./types";

/**
 * Bounds a numeric sample to an inclusive range for progress fill calculations.
 *
 * @remarks
 * PURITY: Pure helper; does not read component props beyond the arguments passed in.
 *
 * @param value - Candidate magnitude before clamping.
 * @param min - Lower inclusive bound.
 * @param max - Upper inclusive bound.
 */
function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Terminal progress track with optional label placement and trailing percentage text.
 *
 * @remarks
 * USAGE: Label layout branches on `labelPosition`; omit `label` to render bar-only output.
 */
const LabeledProgress = ({
  value,
  max = 100,
  width = 20,
  fillChar = "█",
  emptyChar = "░",
  fillColor = "#00FF00",
  emptyColor = "#666666",
  label,
  labelPosition = "above",
  labelColor = "#FFFFFF",
  showPercentage = true,
  percentageColor = "#CCCCCC",
  percentageDecimals = 0,
}: LabeledProgressProps) => {
  // Clamp value between 0 and max
  const clampedValue = clamp(value, 0, max);

  // Calculate filled and empty portions
  const progressRatio = max > 0 ? clampedValue / max : 0;
  const filled = Math.round(progressRatio * width);
  const empty = Math.max(0, width - filled);

  // Calculate percentage
  const percentage = (progressRatio * 100).toFixed(percentageDecimals);

  /**
   * Renders the filled and empty OpenTUI text spans that form the bar track.
   *
   * @remarks
   * PURITY: Depends only on closed-over layout values from the current render pass.
   */
  const renderBar = () => (
    <box>
      <text fg={fillColor}>{fillChar.repeat(filled)}</text>
      <text fg={emptyColor}>{emptyChar.repeat(empty)}</text>
    </box>
  );

  /**
   * Renders trailing percentage text when `showPercentage` is true; otherwise yields null.
   *
   * @remarks
   * USAGE: Paired with `renderBar` so percentage alignment matches label layout branches.
   */
  const renderPercentage = () => {
    if (!showPercentage) return null;
    return <text fg={percentageColor}>{` ${percentage}%`}</text>;
  };

  // Label above the bar
  if (label && labelPosition === "above") {
    return (
      <box flexDirection="column">
        <text fg={labelColor}>{label}</text>
        <box>
          {renderBar()}
          {renderPercentage()}
        </box>
      </box>
    );
  }

  // Label before the bar
  if (label && labelPosition === "before") {
    return (
      <box>
        <text fg={labelColor}>{`${label} `}</text>
        {renderBar()}
        {renderPercentage()}
      </box>
    );
  }

  // No label, just bar and percentage
  return (
    <box>
      {renderBar()}
      {renderPercentage()}
    </box>
  );
};

export { LabeledProgress };
export default LabeledProgress;
