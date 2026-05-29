import { jsx as _jsx, jsxs as _jsxs } from "@opentui/react/jsx-runtime";
/**
 * @fileoverview Shared OpenTUI confirmation primitive with contextual details.
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/input/ConfirmWithDetails.tsx');"
 * @see packages/opentui-ui-kit/src/input/index.ts - Barrel.
 * @see packages/opentui-ui-kit/src/input/types.ts - Component prop and detail type definitions.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import { useCallback } from "react";
import { TextAttributes } from "@opentui/core";
/** Default highlight color for the message */
const DEFAULT_HIGHLIGHT_COLOR = "#00FFFF";
/** Default confirmation question label */
const DEFAULT_CONFIRM_LABEL = "Continue?";
/** Yes/No options for the Select component */
const CONFIRM_OPTIONS = [
    { name: "Yes", description: "", value: "true" },
    { name: "No", description: "", value: "false" },
];
/**
 * OpenTUI confirmation prompt with optional labeled detail lines and a Yes/No select.
 *
 * @remarks
 * Invokes `onSubmit` when the user selects an option; maps option values `"true"` / `"false"` to booleans.
 */
export function ConfirmWithDetails({ message, details = [], defaultValue = true, onSubmit, highlightColor = DEFAULT_HIGHLIGHT_COLOR, confirmLabel = DEFAULT_CONFIRM_LABEL, }) {
    const hasDetails = details.length > 0;
    const handleSelect = useCallback((_index, option) => {
        onSubmit(option?.value === "true");
    }, [onSubmit]);
    // Convert defaultValue boolean to selectedIndex (0 for Yes, 1 for No)
    const selectedIndex = defaultValue ? 0 : 1;
    return (_jsxs("box", { border: true, padding: 1, children: [_jsx("text", { attributes: TextAttributes.BOLD, fg: highlightColor, children: message }), hasDetails && (_jsx("box", { marginTop: 1, children: details.map((detail, index) => (_jsxs("text", { attributes: TextAttributes.DIM, children: ["  ", detail.label, ": ", detail.value] }, index))) })), _jsxs("box", { marginTop: 1, children: [_jsxs("text", { children: [confirmLabel, " "] }), _jsx("select", { options: CONFIRM_OPTIONS, selectedIndex: selectedIndex, onSelect: handleSelect })] })] }));
}
//# sourceMappingURL=ConfirmWithDetails.js.map