import { jsx as _jsx, jsxs as _jsxs } from "@opentui/react/jsx-runtime";
/**
 * OpenTUI horizontal divider: repeated line characters with an optional centered label.
 *
 * @remarks
 * PURITY: Presentational only; constructs child `<text>` nodes from props and local string math.
 */
export function Divider({ label, width = 40, char = "─", color = "#6b7280", labelPadding = 1, }) {
    if (label) {
        const labelWithPadding = " ".repeat(labelPadding) + label + " ".repeat(labelPadding);
        const remainingWidth = Math.max(0, width - labelWithPadding.length);
        const leftWidth = Math.floor(remainingWidth / 2);
        const rightWidth = remainingWidth - leftWidth;
        const leftLine = char.repeat(Math.max(0, leftWidth));
        const rightLine = char.repeat(Math.max(0, rightWidth));
        return (_jsxs("box", { children: [_jsx("text", { style: { fg: color }, children: leftLine }), _jsx("text", { style: { fg: color }, children: labelWithPadding }), _jsx("text", { style: { fg: color }, children: rightLine })] }));
    }
    // Simple divider without label
    const line = char.repeat(Math.max(0, width));
    return (_jsx("box", { children: _jsx("text", { style: { fg: color }, children: line }) }));
}
Divider.displayName = "Divider";
//# sourceMappingURL=Divider.js.map