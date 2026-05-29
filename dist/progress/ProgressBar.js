import { jsx as _jsx, jsxs as _jsxs } from "@opentui/react/jsx-runtime";
/**
 * Coerces a numeric input into the inclusive `[min, max]` interval.
 *
 * @remarks
 * Keeps progress fill math stable when callers pass out-of-range `value` inputs.
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
/**
 * Renders a two-tone OpenTUI progress bar from a numeric ratio against `max`.
 *
 * @remarks
 * `value` is clamped to `[0, max]` before allocating `width` cells across `fillChar` and
 * `emptyChar` with the configured foreground colors.
 */
const ProgressBar = ({ value, max = 100, width = 20, fillChar = "█", emptyChar = "░", fillColor = "#00FF00", emptyColor = "#666666", }) => {
    // Clamp value between 0 and max
    const clampedValue = clamp(value, 0, max);
    // Calculate filled and empty portions
    const progressRatio = max > 0 ? clampedValue / max : 0;
    const filled = Math.round(progressRatio * width);
    const empty = Math.max(0, width - filled);
    return (_jsxs("box", { children: [_jsx("text", { fg: fillColor, children: fillChar.repeat(filled) }), _jsx("text", { fg: emptyColor, children: emptyChar.repeat(empty) })] }));
};
export { ProgressBar };
export default ProgressBar;
//# sourceMappingURL=ProgressBar.js.map