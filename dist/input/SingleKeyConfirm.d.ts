import type { SingleKeyConfirmProps } from "./types.js";
/**
 * Single-key yes/no terminal prompt: Y/N set the answer; Enter applies the default hint.
 *
 * @remarks
 * Keyboard handling is registered via OpenTUI `useKeyboard`; key names are normalized to lowercase.
 */
declare const SingleKeyConfirm: ({ message, defaultValue, onSubmit, hintColor, }: SingleKeyConfirmProps) => import("react").ReactNode;
export { SingleKeyConfirm };
//# sourceMappingURL=SingleKeyConfirm.d.ts.map