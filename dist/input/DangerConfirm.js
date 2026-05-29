import { jsxs as _jsxs, jsx as _jsx } from "@opentui/react/jsx-runtime";
/**
 * @fileoverview Shared OpenTUI type-to-confirm primitive for destructive actions.
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/input/DangerConfirm.tsx');"
 * @see packages/opentui-ui-kit/src/input/index.ts - Barrel.
 * @see packages/opentui-ui-kit/src/input/types.ts - DangerConfirm prop type definitions.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import { useState, useCallback } from "react";
import { TextAttributes } from "@opentui/core";
const DEFAULT_COLORS = {
    warning: "#FF0000",
    success: "#00FF00",
    pending: "#666666",
};
/**
 * Type-to-confirm prompt for destructive actions in OpenTUI flows.
 *
 * @remarks
 * Calls `onSubmit(true)` only after the user types the confirmation phrase (case-insensitive match)
 * and submits; layout and colors follow `DangerConfirmProps`.
 */
export function DangerConfirm({ message, confirmText, onSubmit, warningColor = DEFAULT_COLORS.warning, successColor = DEFAULT_COLORS.success, pendingColor = DEFAULT_COLORS.pending, }) {
    const [inputValue, setInputValue] = useState("");
    const isConfirmed = inputValue.toLowerCase() === confirmText.toLowerCase();
    const handleChange = useCallback((value) => {
        setInputValue(value);
    }, []);
    const handleSubmit = useCallback(() => {
        if (isConfirmed) {
            onSubmit(true);
        }
    }, [isConfirmed, onSubmit]);
    return (_jsxs("box", { border: true, borderColor: warningColor, padding: 1, children: [_jsxs("text", { fg: warningColor, attributes: TextAttributes.BOLD, children: ["\u26A0 ", message] }), _jsxs("text", { marginTop: 1, children: ["Type \"", confirmText, "\" to confirm:"] }), _jsx("box", { marginTop: 1, children: _jsx("input", { value: inputValue, onChange: handleChange, onSubmit: handleSubmit, placeholder: `Type "${confirmText}"...`, width: confirmText.length + 5 }) }), _jsx("text", { fg: isConfirmed ? successColor : pendingColor, marginTop: 1, children: isConfirmed ? "✓ Ready to proceed" : "✗ Confirmation required" })] }));
}
//# sourceMappingURL=DangerConfirm.js.map