import type { ConfirmInputProps } from "./types.js";
/**
 * Yes/no terminal prompt implemented as an OpenTUI `<select>` bound to boolean submit semantics.
 *
 * @remarks
 * Option wire values are `"true"` / `"false"` strings; `onSubmit` receives the parsed boolean.
 * Default maps to index 0 (Yes) vs 1 (No).
 */
declare const ConfirmInput: ({ message, defaultValue, onSubmit, }: ConfirmInputProps) => import("react").ReactNode;
export { ConfirmInput };
//# sourceMappingURL=ConfirmInput.d.ts.map