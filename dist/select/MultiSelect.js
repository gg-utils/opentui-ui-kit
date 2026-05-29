import { jsx as _jsx, jsxs as _jsxs } from "@opentui/react/jsx-runtime";
/**
 * @fileoverview Shared OpenTUI multi-select primitive for checkbox-style terminal selection.
 * The flow is option filtering -> keyboard cursor movement -> windowed rendering -> selection
 * toggle emission back to the caller.
 *
 * @example
 * ```tsx
 * <MultiSelect
 *   options={[
 *     { label: "Alpha", value: "alpha" },
 *     { label: "Beta", value: "beta", disabled: true },
 *   ]}
 *   selected={["alpha"]}
 *   onChange={(nextSelected) => setSelected(nextSelected)}
 * />
 * ```
 *
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/select/MultiSelect.tsx');"
 * @testing Terminal smoke: render the component in the shared OpenTUI harness and verify up/down move the cursor and space toggles the focused enabled option.
 * @see packages/opentui-ui-kit/src/select/index.ts - Barrel.
 * @see packages/opentui-ui-kit/src/select/types.ts - Props and option types.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import { useKeyboard } from "@opentui/react";
import { useState, useMemo } from "react";
const DEFAULT_MAX_HEIGHT = 10;
/**
 * OpenTUI multi-select: keyboard-driven checkbox list with a bounded scroll window.
 *
 * @remarks
 * UP/DOWN move the cursor among enabled options only; SPACE toggles the focused value and calls
 * `onChange` with the next selection array. Disabled options stay visible but are skipped for
 * focus. Long lists use a sliding viewport centered on the cursor (`maxHeight` rows).
 */
export function MultiSelect({ options, selected, onChange, maxHeight = DEFAULT_MAX_HEIGHT, title, showHelp = true, helpText = "Press space to toggle, arrows to navigate", renderLabel, }) {
    const [cursor, setCursor] = useState(0);
    // Disabled entries stay visible, but navigation only targets enabled options.
    const enabledOptions = useMemo(() => options.filter((opt) => !opt.disabled), [options]);
    useKeyboard((key) => {
        // Arrow keys move the cursor within the enabled-option range.
        if (key.name === "up") {
            setCursor((c) => Math.max(0, c - 1));
            return;
        }
        // The cursor stops at the last enabled option instead of wrapping.
        if (key.name === "down") {
            setCursor((c) => Math.min(enabledOptions.length - 1, c + 1));
            return;
        }
        // Space toggles the currently focused enabled option and emits the new selection.
        if (key.name === "space") {
            const option = enabledOptions[cursor];
            if (!option || option.disabled)
                return;
            const isSelected = selected.includes(option.value);
            onChange(isSelected
                ? selected.filter((v) => v !== option.value)
                : [...selected, option.value]);
        }
    });
    // Keep the cursor near the middle of the rendered window so long lists stay readable.
    const visibleStart = Math.max(0, cursor - Math.floor(maxHeight / 2));
    const visibleEnd = Math.min(enabledOptions.length, visibleStart + maxHeight);
    const visibleOptions = enabledOptions.slice(visibleStart, visibleEnd);
    return (_jsxs("box", { flexDirection: "column", children: [title && _jsx("text", { children: title }), visibleOptions.map((option, index) => {
                const actualIndex = visibleStart + index;
                const isSelected = selected.includes(option.value);
                const isCursor = actualIndex === cursor;
                const displayLabel = renderLabel
                    ? renderLabel(option, isSelected)
                    : option.label;
                return (_jsxs("box", { children: [_jsx("text", { children: isCursor ? "> " : "  " }), _jsx("text", { children: isSelected ? "[✓] " : "[ ] " }), _jsx("text", { children: displayLabel })] }, option.value));
            }), enabledOptions.length > maxHeight && (_jsxs("text", { children: [visibleStart > 0 ? "↑ " : "  ", "Showing ", visibleStart + 1, "-", visibleEnd, " of ", enabledOptions.length, visibleEnd < enabledOptions.length ? " ↓" : ""] })), showHelp && _jsx("text", { children: helpText })] }));
}
//# sourceMappingURL=MultiSelect.js.map