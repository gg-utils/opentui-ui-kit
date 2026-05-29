/**
 * @fileoverview Shared OpenTUI confirmation primitive with contextual details.
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/input/ConfirmWithDetails.tsx');"
 * @see packages/opentui-ui-kit/src/input/index.ts - Barrel.
 * @see packages/opentui-ui-kit/src/input/types.ts - Component prop and detail type definitions.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import { useCallback } from "react";
import type { SelectOption } from "@opentui/core";
import { TextAttributes } from "@opentui/core";
import type { ConfirmWithDetailsProps, ConfirmDetailItem } from "./types.js";

/** Default highlight color for the message */
const DEFAULT_HIGHLIGHT_COLOR = "#00FFFF";

/** Default confirmation question label */
const DEFAULT_CONFIRM_LABEL = "Continue?";

/** Yes/No options for the Select component */
const CONFIRM_OPTIONS: SelectOption[] = [
  { name: "Yes", description: "", value: "true" },
  { name: "No", description: "", value: "false" },
];

/**
 * OpenTUI confirmation prompt with optional labeled detail lines and a Yes/No select.
 *
 * @remarks
 * Invokes `onSubmit` when the user selects an option; maps option values `"true"` / `"false"` to booleans.
 */
export function ConfirmWithDetails({
  message,
  details = [],
  defaultValue = true,
  onSubmit,
  highlightColor = DEFAULT_HIGHLIGHT_COLOR,
  confirmLabel = DEFAULT_CONFIRM_LABEL,
}: ConfirmWithDetailsProps) {
  const hasDetails = details.length > 0;

  const handleSelect = useCallback(
    (_index: number, option: SelectOption | null) => {
      onSubmit(option?.value === "true");
    },
    [onSubmit],
  );

  // Convert defaultValue boolean to selectedIndex (0 for Yes, 1 for No)
  const selectedIndex = defaultValue ? 0 : 1;

  return (
    <box border padding={1}>
      {/* Main message */}
      <text attributes={TextAttributes.BOLD} fg={highlightColor}>
        {message}
      </text>

      {/* Details list */}
      {hasDetails && (
        <box marginTop={1}>
          {details.map((detail: ConfirmDetailItem, index: number) => (
            <text key={index} attributes={TextAttributes.DIM}>
              {"  "}
              {detail.label}: {detail.value}
            </text>
          ))}
        </box>
      )}

      {/* Confirmation selection */}
      <box marginTop={1}>
        <text>{confirmLabel} </text>
        <select
          options={CONFIRM_OPTIONS}
          selectedIndex={selectedIndex}
          onSelect={handleSelect}
        />
      </box>
    </box>
  );
}
