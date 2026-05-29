import { jsxs as _jsxs, jsx as _jsx } from "@opentui/react/jsx-runtime";
export const STATUS_COLORS = {
    success: "#22c55e", // Green
    error: "#ef4444", // Red
    warning: "#f59e0b", // Amber
    info: "#3b82f6", // Blue
    pending: "#6b7280", // Gray
};
/**
 * Symbol mapping for each status type
 */
export const STATUS_SYMBOLS = {
    success: "●",
    error: "●",
    warning: "●",
    info: "●",
    pending: "○",
};
/**
 * Terminal status row that renders a semantic tone as colored OpenTUI text with an optional symbol prefix.
 *
 * @remarks
 * Maps `status` through {@link STATUS_COLORS} and {@link STATUS_SYMBOLS}; visible copy prefers `label`, otherwise the raw status token.
 */
export function StatusIndicator({ status, label, showDot = true, }) {
    return (_jsxs("box", { children: [showDot && (_jsxs("text", { style: { fg: STATUS_COLORS[status] }, children: [STATUS_SYMBOLS[status], " "] })), _jsx("text", { style: { fg: STATUS_COLORS[status] }, children: label ?? status })] }));
}
StatusIndicator.displayName = "StatusIndicator";
//# sourceMappingURL=StatusIndicator.js.map