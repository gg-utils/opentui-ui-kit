import { jsxs as _jsxs, jsx as _jsx } from "@opentui/react/jsx-runtime";
const BADGE_COLORS = {
    primary: {
        fg: "#3b82f6", // Blue
        border: "#3b82f6",
        bg: "#eff6ff",
    },
    success: {
        fg: "#22c55e", // Green
        border: "#22c55e",
        bg: "#f0fdf4",
    },
    warning: {
        fg: "#f59e0b", // Amber
        border: "#f59e0b",
        bg: "#fffbeb",
    },
    error: {
        fg: "#ef4444", // Red
        border: "#ef4444",
        bg: "#fef2f2",
    },
    neutral: {
        fg: "#6b7280", // Gray
        border: "#6b7280",
        bg: "#f3f4f6",
    },
};
/**
 * OpenTUI badge chip for variant-colored labels with optional border, soft fill, and leading icon.
 *
 * @remarks
 * Palette tokens resolve via `BADGE_COLORS`; layout uses nested `box`/`text` primitives only (pure render).
 */
const Badge = ({ children, variant = "neutral", icon, bordered = true, filled = false, }) => {
    const colors = BADGE_COLORS[variant];
    return (_jsx("box", { borderStyle: bordered ? "single" : undefined, borderColor: bordered ? colors.border : undefined, backgroundColor: filled ? colors.bg : undefined, children: _jsxs("box", { paddingLeft: 1, paddingRight: 1, children: [icon && _jsxs("text", { style: { fg: colors.fg }, children: [icon, " "] }), _jsx("text", { style: { fg: colors.fg }, children: children })] }) }));
};
Badge.displayName = "Badge";
export { Badge };
//# sourceMappingURL=Badge.js.map