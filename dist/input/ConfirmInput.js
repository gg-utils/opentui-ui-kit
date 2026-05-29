import { jsxs as _jsxs, jsx as _jsx } from "@opentui/react/jsx-runtime";
/**
 * @fileoverview Shared OpenTUI yes/no confirmation primitive for terminal prompts, turning a
 * message plus a default boolean into a two-option select and boolean submit callback.
 *
 * Flow: message/defaultValue -> select default index -> user choice -> onSubmit(boolean).
 *
 * @example
 * ```tsx
 * <ConfirmInput
 *   message="Do you want to continue?"
 *   defaultValue={true}
 *   onSubmit={(confirmed) => console.log(confirmed)}
 * />
 * ```
 *
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/input/ConfirmInput.tsx');"
 * @testing TypeScript compile: cd packages/opentui-ui-kit && npm run opentui-ui-kit:type-check
 * @see packages/opentui-ui-kit/src/input/index.ts - Barrel that re-exports this confirmation prompt.
 * @see packages/opentui-ui-kit/src/input/types.ts - Prop contract that supplies the message and submit callback.
 * @see packages/opentui-ui-kit/src/input/SingleKeyConfirm.tsx - Related confirmation primitive for the same prompt family.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import { useCallback } from "react";
const DEFAULT_OPTIONS = [
    { name: "Yes", description: "", value: "true" },
    { name: "No", description: "", value: "false" },
];
/**
 * Yes/no terminal prompt implemented as an OpenTUI `<select>` bound to boolean submit semantics.
 *
 * @remarks
 * Option wire values are `"true"` / `"false"` strings; `onSubmit` receives the parsed boolean.
 * Default maps to index 0 (Yes) vs 1 (No).
 */
const ConfirmInput = ({ message, defaultValue = true, onSubmit, }) => {
    const handleSelect = useCallback((_index, option) => {
        onSubmit(option?.value === "true");
    }, [onSubmit]);
    // Map the boolean default directly to the select index (0 = Yes, 1 = No).
    const selectedIndex = defaultValue ? 0 : 1;
    return (_jsxs("box", { children: [_jsxs("text", { children: [message, " "] }), _jsx("select", { options: DEFAULT_OPTIONS, selectedIndex: selectedIndex, onSelect: handleSelect })] }));
};
export { ConfirmInput };
//# sourceMappingURL=ConfirmInput.js.map