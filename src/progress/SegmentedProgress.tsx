/**
 * @fileoverview Shared OpenTUI segmented progress primitive for terminal progress bars.
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/progress/SegmentedProgress.tsx');"
 * @see packages/opentui-ui-kit/src/progress/index.ts - Barrel.
 * @see packages/opentui-ui-kit/src/progress/types.ts - SegmentedProgress prop type definitions.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import { SegmentedProgressProps } from "./types";

/**
 * Clamps a numeric value to an inclusive window before converting progress into segment counts.
 *
 * @remarks
 * Keeps ratio math stable when callers pass out-of-range progress values.
 */
function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Renders a discrete segmented progress bar with filled, partial, and empty
 * segments for terminal output.
 *
 * @remarks
 * Chooses a partial middle segment only when the fractional remainder sits outside near-empty or
 * near-full thresholds so noisy ratios do not flicker extra glyphs.
 */
const SegmentedProgress = ({
  value,
  max = 100,
  segments = 10,
  fillChar = "█",
  emptyChar = "░",
  partialChar = "▒",
  fillColor = "#00FF00",
  emptyColor = "#666666",
  partialColor = "#AAAA00",
  separator = " ",
}: SegmentedProgressProps) => {
  // Clamp value between 0 and max
  const clampedValue = clamp(value, 0, max);

  // Calculate how many segments should be filled
  const progressRatio = max > 0 ? clampedValue / max : 0;
  const filledSegments = progressRatio * segments;
  const fullFilled = Math.floor(filledSegments);
  const partialFill = filledSegments - fullFilled;

  // Determine if we need a partial segment
  const hasPartial = partialFill > 0.1 && partialFill < 0.9;
  const emptySegments = segments - fullFilled - (hasPartial ? 1 : 0);

  /**
   * Renders one styled segment and prefixes it with the separator except for the leading segment.
   *
   * @remarks
   * `key` doubles as the segment index so separators align between filled, partial, and empty runs.
   */
  const renderSegment = (char: string, color: string, key: number) => (
    <text key={key} fg={color}>
      {key > 0 ? separator : ""}
      {char}
    </text>
  );

  return (
    <box>
      {/* Filled segments */}
      {Array.from({ length: fullFilled }, (_, i) =>
        renderSegment(fillChar, fillColor, i),
      )}

      {/* Partial segment */}
      {hasPartial && renderSegment(partialChar, partialColor, fullFilled)}

      {/* Empty segments */}
      {Array.from({ length: Math.max(0, emptySegments) }, (_, i) =>
        renderSegment(
          emptyChar,
          emptyColor,
          fullFilled + (hasPartial ? 1 : 0) + i,
        ),
      )}
    </box>
  );
};

export { SegmentedProgress };
export default SegmentedProgress;
