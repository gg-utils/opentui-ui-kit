import type { ConfirmWithDetailsProps } from "./types.js";
/**
 * OpenTUI confirmation prompt with optional labeled detail lines and a Yes/No select.
 *
 * @remarks
 * Invokes `onSubmit` when the user selects an option; maps option values `"true"` / `"false"` to booleans.
 */
export declare function ConfirmWithDetails({ message, details, defaultValue, onSubmit, highlightColor, confirmLabel, }: ConfirmWithDetailsProps): import("react").ReactNode;
//# sourceMappingURL=ConfirmWithDetails.d.ts.map