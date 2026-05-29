import { jsxs as _jsxs, jsx as _jsx } from "@opentui/react/jsx-runtime";
/**
 * @fileoverview Shared OpenTUI single-key confirmation primitive for terminal prompts.
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/input/SingleKeyConfirm.tsx');"
 * @see packages/opentui-ui-kit/src/input/index.ts - Barrel.
 * @see packages/opentui-ui-kit/src/input/types.ts - SingleKeyConfirm component prop types.
 * @documentation reviewed=2026-05-07 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import { useKeyboard } from "@opentui/react";
const DEFAULT_HINT_COLOR = "#FFFF00";
/**
 * Single-key yes/no terminal prompt: Y/N set the answer; Enter applies the default hint.
 *
 * @remarks
 * Keyboard handling is registered via OpenTUI `useKeyboard`; key names are normalized to lowercase.
 */
const SingleKeyConfirm = ({ message, defaultValue = true, onSubmit, hintColor = DEFAULT_HINT_COLOR, }) => {
    useKeyboard((event) => {
        const key = event.name.toLowerCase();
        if (key === "y") {
            onSubmit(true);
        }
        else if (key === "n") {
            onSubmit(false);
        }
        else if (key === "return" || key === "enter") {
            // Enter key submits default
            onSubmit(defaultValue);
        }
    });
    // Show [Y/n] when default is true, [y/N] when default is false
    const hint = defaultValue ? "[Y/n]" : "[y/N]";
    return (_jsxs("box", { children: [_jsxs("text", { children: [message, " "] }), _jsx("text", { fg: hintColor, children: hint })] }));
};
export { SingleKeyConfirm };
//# sourceMappingURL=SingleKeyConfirm.js.map