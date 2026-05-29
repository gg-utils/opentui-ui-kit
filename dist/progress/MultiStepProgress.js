import { jsx as _jsx, jsxs as _jsxs } from "@opentui/react/jsx-runtime";
/**
 * Resolves the marker character for a step using its status and the configured char map.
 */
function getStepChar(step, chars) {
    switch (step.status) {
        case "completed":
            return chars.completed;
        case "active":
            return chars.active;
        case "error":
            return chars.error;
        case "pending":
        default:
            return chars.pending;
    }
}
/**
 * Resolves the foreground color token for a step using its status and the configured palette.
 */
function getStepColor(step, colors) {
    switch (step.status) {
        case "completed":
            return colors.completed;
        case "active":
            return colors.active;
        case "error":
            return colors.error;
        case "pending":
        default:
            return colors.pending;
    }
}
/**
 * Truncates a label to fit the layout width, suffixing an ellipsis when shortened.
 */
function truncateLabel(label, maxWidth) {
    if (label.length <= maxWidth)
        return label;
    return label.slice(0, maxWidth - 1) + "…";
}
/**
 * OpenTUI column layout that renders step markers and optional aligned labels for wizard flows.
 *
 * @remarks
 * PURITY: Presentational; maps `Step.status` to configured chars and colors without side effects.
 */
const MultiStepProgress = ({ steps, completedChar = "✓", activeChar = "→", pendingChar = "○", errorChar = "✗", completedColor = "#00FF00", activeColor = "#00AAFF", pendingColor = "#666666", errorColor = "#FF0000", separator = " → ", separatorColor = "#888888", showLabels = true, maxLabelWidth = 12, }) => {
    const charMap = {
        completed: completedChar,
        active: activeChar,
        pending: pendingChar,
        error: errorChar,
    };
    const colorMap = {
        completed: completedColor,
        active: activeColor,
        pending: pendingColor,
        error: errorColor,
    };
    return (_jsxs("box", { flexDirection: "column", children: [_jsx("box", { children: steps.map((step, index) => {
                    const char = getStepChar(step, charMap);
                    const color = getStepColor(step, colorMap);
                    const isLast = index === steps.length - 1;
                    return (_jsxs("box", { children: [_jsx("text", { fg: color, children: char }), !isLast && _jsx("text", { fg: separatorColor, children: separator })] }, step.id));
                }) }), showLabels && (_jsx("box", { marginTop: 1, children: steps.map((step, index) => {
                    const color = getStepColor(step, colorMap);
                    const isLast = index === steps.length - 1;
                    const truncatedLabel = truncateLabel(step.label, maxLabelWidth);
                    // Calculate spacing to roughly align under the step indicators
                    const separatorLength = separator.length;
                    const spacing = isLast
                        ? ""
                        : " ".repeat(Math.max(0, separatorLength - (truncatedLabel.length - 1)));
                    return (_jsxs("box", { children: [_jsx("text", { fg: color, children: truncatedLabel }), !isLast && _jsx("text", { children: spacing })] }, `label-${step.id}`));
                }) }))] }));
};
export { MultiStepProgress };
export default MultiStepProgress;
//# sourceMappingURL=MultiStepProgress.js.map