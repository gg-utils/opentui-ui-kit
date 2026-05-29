import { jsx as _jsx, jsxs as _jsxs } from "@opentui/react/jsx-runtime";
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
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
/**
 * Terminal progress track with optional label placement and trailing percentage text.
 *
 * @remarks
 * USAGE: Label layout branches on `labelPosition`; omit `label` to render bar-only output.
 */
const LabeledProgress = ({ value, max = 100, width = 20, fillChar = "█", emptyChar = "░", fillColor = "#00FF00", emptyColor = "#666666", label, labelPosition = "above", labelColor = "#FFFFFF", showPercentage = true, percentageColor = "#CCCCCC", percentageDecimals = 0, }) => {
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
    const renderBar = () => (_jsxs("box", { children: [_jsx("text", { fg: fillColor, children: fillChar.repeat(filled) }), _jsx("text", { fg: emptyColor, children: emptyChar.repeat(empty) })] }));
    /**
     * Renders trailing percentage text when `showPercentage` is true; otherwise yields null.
     *
     * @remarks
     * USAGE: Paired with `renderBar` so percentage alignment matches label layout branches.
     */
    const renderPercentage = () => {
        if (!showPercentage)
            return null;
        return _jsx("text", { fg: percentageColor, children: ` ${percentage}%` });
    };
    // Label above the bar
    if (label && labelPosition === "above") {
        return (_jsxs("box", { flexDirection: "column", children: [_jsx("text", { fg: labelColor, children: label }), _jsxs("box", { children: [renderBar(), renderPercentage()] })] }));
    }
    // Label before the bar
    if (label && labelPosition === "before") {
        return (_jsxs("box", { children: [_jsx("text", { fg: labelColor, children: `${label} ` }), renderBar(), renderPercentage()] }));
    }
    // No label, just bar and percentage
    return (_jsxs("box", { children: [renderBar(), renderPercentage()] }));
};
export { LabeledProgress };
export default LabeledProgress;
//# sourceMappingURL=LabeledProgress.js.map