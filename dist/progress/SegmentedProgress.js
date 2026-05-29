import { jsxs as _jsxs } from "@opentui/react/jsx-runtime";
/**
 * Clamps a numeric value to an inclusive window before converting progress into segment counts.
 *
 * @remarks
 * Keeps ratio math stable when callers pass out-of-range progress values.
 */
function clamp(value, min, max) {
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
const SegmentedProgress = ({ value, max = 100, segments = 10, fillChar = "█", emptyChar = "░", partialChar = "▒", fillColor = "#00FF00", emptyColor = "#666666", partialColor = "#AAAA00", separator = " ", }) => {
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
    const renderSegment = (char, color, key) => (_jsxs("text", { fg: color, children: [key > 0 ? separator : "", char] }, key));
    return (_jsxs("box", { children: [Array.from({ length: fullFilled }, (_, i) => renderSegment(fillChar, fillColor, i)), hasPartial && renderSegment(partialChar, partialColor, fullFilled), Array.from({ length: Math.max(0, emptySegments) }, (_, i) => renderSegment(emptyChar, emptyColor, fullFilled + (hasPartial ? 1 : 0) + i))] }));
};
export { SegmentedProgress };
export default SegmentedProgress;
//# sourceMappingURL=SegmentedProgress.js.map