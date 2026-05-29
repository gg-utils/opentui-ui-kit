import type { DangerConfirmProps } from "./types.js";
/**
 * Type-to-confirm prompt for destructive actions in OpenTUI flows.
 *
 * @remarks
 * Calls `onSubmit(true)` only after the user types the confirmation phrase (case-insensitive match)
 * and submits; layout and colors follow `DangerConfirmProps`.
 */
export declare function DangerConfirm({ message, confirmText, onSubmit, warningColor, successColor, pendingColor, }: DangerConfirmProps): import("react").ReactNode;
//# sourceMappingURL=DangerConfirm.d.ts.map