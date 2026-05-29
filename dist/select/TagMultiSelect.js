import { jsx as _jsx, jsxs as _jsxs } from "@opentui/react/jsx-runtime";
/**
 * @fileoverview Shared OpenTUI tag-style multi-select primitive for terminal selection chips.
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/select/TagMultiSelect.tsx');"
 * @see packages/opentui-ui-kit/src/select/index.ts - Barrel.
 * @see packages/opentui-ui-kit/src/select/types.ts - TagMultiSelect prop and option type definitions.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import { useKeyboard } from "@opentui/react";
import { useState, useMemo } from "react";
const DEFAULT_MAX_HEIGHT = 10;
// Border characters for different styles
const BORDER_STYLES = {
    single: { h: "─", v: "│", tl: "┌", tr: "┐", bl: "└", br: "┘" },
    double: { h: "═", v: "║", tl: "╔", tr: "╗", bl: "╚", br: "╝" },
    round: { h: "─", v: "│", tl: "╭", tr: "╮", bl: "╰", br: "╯" },
    bold: { h: "━", v: "┃", tl: "┏", tr: "┓", bl: "┗", br: "┛" },
};
/**
 * OpenTUI tag-style multi-select: chip borders with row or column keyboard navigation.
 *
 * @remarks
 * LEFT/RIGHT (row) or UP/DOWN (column) move the cursor among enabled options; SPACE or ENTER
 * toggles the focused value via `onChange`. Column mode window-scrolls with `maxHeight`; disabled
 * options are omitted from focus.
 */
export function TagMultiSelect({ options, selected, onChange, maxHeight = DEFAULT_MAX_HEIGHT, direction = "row", gap = 1, selectedBorderStyle = "single", renderLabel, }) {
    const [cursor, setCursor] = useState(0);
    // Filter out disabled options from navigation
    const enabledOptions = useMemo(() => options.filter((opt) => !opt.disabled), [options]);
    useKeyboard((key) => {
        // Navigate based on direction
        if (direction === "row") {
            if (key.name === "left") {
                setCursor((c) => Math.max(0, c - 1));
                return;
            }
            if (key.name === "right") {
                setCursor((c) => Math.min(enabledOptions.length - 1, c + 1));
                return;
            }
        }
        else {
            if (key.name === "up") {
                setCursor((c) => Math.max(0, c - 1));
                return;
            }
            if (key.name === "down") {
                setCursor((c) => Math.min(enabledOptions.length - 1, c + 1));
                return;
            }
        }
        // Toggle selection with spacebar or enter
        if (key.name === "space" || key.name === "return") {
            const option = enabledOptions[cursor];
            if (!option || option.disabled)
                return;
            const isSelected = selected.includes(option.value);
            onChange(isSelected
                ? selected.filter((v) => v !== option.value)
                : [...selected, option.value]);
        }
    });
    const border = BORDER_STYLES[selectedBorderStyle];
    // Calculate visible window for scrolling (column mode only)
    const visibleStart = direction === "column"
        ? Math.max(0, cursor - Math.floor(maxHeight / 2))
        : 0;
    const visibleEnd = direction === "column"
        ? Math.min(enabledOptions.length, visibleStart + maxHeight)
        : enabledOptions.length;
    const visibleOptions = enabledOptions.slice(visibleStart, visibleEnd);
    return (_jsxs("box", { flexDirection: "column", children: [_jsx("box", { flexDirection: direction, children: visibleOptions.map((option, index) => {
                    const actualIndex = direction === "column" ? visibleStart + index : index;
                    const isSelected = selected.includes(option.value);
                    const isCursor = actualIndex === cursor;
                    const displayLabel = renderLabel
                        ? renderLabel(option, isSelected)
                        : option.label;
                    const labelWidth = displayLabel.length;
                    const showBorder = isSelected || isCursor;
                    if (showBorder) {
                        const topBorder = `${border.tl}${border.h.repeat(labelWidth + 2)}${border.tr}`;
                        const middleBorder = `${border.v} ${displayLabel} ${border.v}`;
                        const bottomBorder = `${border.bl}${border.h.repeat(labelWidth + 2)}${border.br}`;
                        return (_jsxs("box", { flexDirection: "column", marginRight: gap, children: [_jsx("text", { children: topBorder }), _jsx("text", { children: middleBorder }), _jsx("text", { children: bottomBorder }), isCursor && _jsx("text", { children: direction === "row" ? " ^" : " >" })] }, option.value));
                    }
                    return (_jsxs("box", { flexDirection: "column", marginRight: gap, children: [_jsx("text", { children: " ".repeat(labelWidth + 4) }), _jsx("text", { children: `  ${displayLabel}  ` }), _jsx("text", { children: " ".repeat(labelWidth + 4) })] }, option.value));
                }) }), direction === "column" && enabledOptions.length > maxHeight && (_jsxs("text", { children: [visibleStart > 0 ? "↑ " : "  ", "Showing ", visibleStart + 1, "-", visibleEnd, " of ", enabledOptions.length, visibleEnd < enabledOptions.length ? " ↓" : ""] })), _jsxs("box", { flexDirection: "row", marginTop: 1, children: [_jsx("text", { children: "Selected: " }), selected.length === 0 ? (_jsx("text", { children: "(none)" })) : (_jsx("text", { children: selected
                            .map((value) => options.find((opt) => opt.value === value)?.label ?? value)
                            .join(", ") }))] }), _jsx("text", { children: direction === "row"
                    ? "← → to navigate, space/enter to toggle"
                    : "↑ ↓ to navigate, space/enter to toggle" })] }));
}
//# sourceMappingURL=TagMultiSelect.js.map