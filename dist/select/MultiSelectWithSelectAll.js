import { jsx as _jsx, jsxs as _jsxs } from "@opentui/react/jsx-runtime";
/**
 * @fileoverview Shared OpenTUI multi-select primitive with select-all support.
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/select/MultiSelectWithSelectAll.tsx');"
 * @see packages/opentui-ui-kit/src/select/index.ts - Barrel.
 * @see packages/opentui-ui-kit/src/select/types.ts - MultiSelectWithSelectAll prop type definitions.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import { useKeyboard } from "@opentui/react";
import { useState, useMemo } from "react";
const DEFAULT_MAX_HEIGHT = 10;
const DEFAULT_SELECT_ALL_LABEL = "Select All";
const SEPARATOR = "─".repeat(30);
/**
 * OpenTUI multi-select with a leading select-all row and separator before enabled options.
 *
 * @remarks
 * Row 0 is select-all; row 1 is a non-interactive separator; remaining rows are enabled options
 * only (disabled options are hidden from the list). UP/DOWN move the cursor across those rows;
 * SPACE bulk-toggles on row 0, is a no-op on the separator, and toggles a single value on option
 * rows. Long lists use a sliding viewport of at most `maxHeight` rows around the cursor.
 */
export function MultiSelectWithSelectAll({ options, selected, onChange, maxHeight = DEFAULT_MAX_HEIGHT, selectAllLabel = DEFAULT_SELECT_ALL_LABEL, title, showHelp = true, renderLabel, }) {
    const [cursor, setCursor] = useState(0);
    // Filter out disabled options from navigation
    const enabledOptions = useMemo(() => options.filter((opt) => !opt.disabled), [options]);
    // Calculate select all state
    const enabledValues = enabledOptions.map((opt) => opt.value);
    const allSelected = enabledValues.length > 0 &&
        enabledValues.every((value) => selected.includes(value));
    const someSelected = enabledValues.some((value) => selected.includes(value)) && !allSelected;
    // Total items including "Select All" option and separator row
    const totalItems = enabledOptions.length + 2; // +2 for Select All and separator
    useKeyboard((key) => {
        // Navigate up
        if (key.name === "up") {
            setCursor((c) => Math.max(0, c - 1));
            return;
        }
        // Navigate down
        if (key.name === "down") {
            setCursor((c) => Math.min(totalItems - 1, c + 1));
            return;
        }
        // Toggle selection with spacebar
        if (key.name === "space") {
            // Select All option
            if (cursor === 0) {
                if (allSelected) {
                    // Deselect all
                    onChange(selected.filter((v) => !enabledValues.includes(v)));
                }
                else {
                    // Select all enabled options
                    const newSelected = new Set(selected);
                    enabledValues.forEach((v) => newSelected.add(v));
                    onChange(Array.from(newSelected));
                }
                return;
            }
            // Skip separator
            if (cursor === 1) {
                return;
            }
            // Regular option
            const optionIndex = cursor - 2;
            const option = enabledOptions[optionIndex];
            if (!option)
                return;
            const isSelected = selected.includes(option.value);
            onChange(isSelected
                ? selected.filter((v) => v !== option.value)
                : [...selected, option.value]);
        }
    });
    // Calculate visible window for scrolling
    const visibleStart = Math.max(0, cursor - Math.floor(maxHeight / 2));
    const visibleEnd = Math.min(totalItems, visibleStart + maxHeight);
    return (_jsxs("box", { flexDirection: "column", children: [title && _jsx("text", { children: title }), visibleStart === 0 && (_jsxs("box", { children: [_jsx("text", { children: cursor === 0 ? "> " : "  " }), _jsx("text", { children: allSelected ? "[✓] " : someSelected ? "[-] " : "[ ] " }), _jsx("text", { children: selectAllLabel })] })), visibleStart <= 1 && visibleEnd > 1 && (_jsx("box", { children: _jsxs("text", { children: [" ", SEPARATOR] }) })), enabledOptions
                .slice(Math.max(0, visibleStart - 2), Math.max(0, visibleEnd - 2))
                .map((option, index) => {
                const actualIndex = index + 2;
                const isSelected = selected.includes(option.value);
                const isCursor = actualIndex === cursor;
                const displayLabel = renderLabel
                    ? renderLabel(option, isSelected)
                    : option.label;
                return (_jsxs("box", { children: [_jsx("text", { children: isCursor ? "> " : "  " }), _jsx("text", { children: isSelected ? "[✓] " : "[ ] " }), _jsx("text", { children: displayLabel })] }, option.value));
            }), totalItems > maxHeight && (_jsxs("text", { children: [visibleStart > 0 ? "↑ " : "  ", "Showing ", visibleStart + 1, "-", visibleEnd, " of ", totalItems, visibleEnd < totalItems ? " ↓" : ""] })), _jsxs("text", { children: ["Selected: ", selected.length, " / ", enabledOptions.length] }), showHelp && _jsx("text", { children: "Press space to toggle, arrows to navigate" })] }));
}
//# sourceMappingURL=MultiSelectWithSelectAll.js.map