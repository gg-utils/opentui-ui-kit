/**
 * @fileoverview Shared OpenTUI type-to-confirm primitive for destructive actions.
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/input/DangerConfirm.tsx');"
 * @see packages/opentui-ui-kit/src/input/index.ts - Barrel.
 * @see packages/opentui-ui-kit/src/input/types.ts - DangerConfirm prop type definitions.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import { useState, useCallback } from "react";
import { TextAttributes } from "@opentui/core";
import type { DangerConfirmProps } from "./types.js";

const DEFAULT_COLORS = {
  warning: "#FF0000",
  success: "#00FF00",
  pending: "#666666",
} as const;

/**
 * Type-to-confirm prompt for destructive actions in OpenTUI flows.
 *
 * @remarks
 * Calls `onSubmit(true)` only after the user types the confirmation phrase (case-insensitive match)
 * and submits; layout and colors follow `DangerConfirmProps`.
 */
export function DangerConfirm({
  message,
  confirmText,
  onSubmit,
  warningColor = DEFAULT_COLORS.warning,
  successColor = DEFAULT_COLORS.success,
  pendingColor = DEFAULT_COLORS.pending,
}: DangerConfirmProps) {
  const [inputValue, setInputValue] = useState("");

  const isConfirmed = inputValue.toLowerCase() === confirmText.toLowerCase();

  const handleChange = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  const handleSubmit = useCallback(() => {
    if (isConfirmed) {
      onSubmit(true);
    }
  }, [isConfirmed, onSubmit]);

  return (
    <box border borderColor={warningColor} padding={1}>
      {/* Warning header */}
      <text fg={warningColor} attributes={TextAttributes.BOLD}>
        ⚠ {message}
      </text>

      {/* Instruction */}
      <text marginTop={1}>Type "{confirmText}" to confirm:</text>

      {/* Confirmation input */}
      <box marginTop={1}>
        <input
          value={inputValue}
          onChange={handleChange}
          onSubmit={handleSubmit}
          placeholder={`Type "${confirmText}"...`}
          width={confirmText.length + 5}
        />
      </box>

      {/* Status indicator */}
      <text fg={isConfirmed ? successColor : pendingColor} marginTop={1}>
        {isConfirmed ? "✓ Ready to proceed" : "✗ Confirmation required"}
      </text>
    </box>
  );
}
