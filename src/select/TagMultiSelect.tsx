/**
 * @fileoverview Shared OpenTUI tag-style multi-select primitive for terminal selection chips.
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/select/TagMultiSelect.tsx');"
 * @see packages/opentui-ui-kit/src/select/index.ts - Barrel.
 * @see packages/opentui-ui-kit/src/select/types.ts - TagMultiSelect prop and option type definitions.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import { useKeyboard } from "@opentui/react";
import type { KeyEvent } from "@opentui/core";
import { useState, useMemo } from "react";
import type { TagMultiSelectProps } from "./types";

const DEFAULT_MAX_HEIGHT = 10;

// Border characters for different styles
const BORDER_STYLES = {
  single: { h: "─", v: "│", tl: "┌", tr: "┐", bl: "└", br: "┘" },
  double: { h: "═", v: "║", tl: "╔", tr: "╗", bl: "╚", br: "╝" },
  round: { h: "─", v: "│", tl: "╭", tr: "╮", bl: "╰", br: "╯" },
  bold: { h: "━", v: "┃", tl: "┏", tr: "┓", bl: "┗", br: "┛" },
};

/**
 * OpenTUI tag-style multi-select: chip borders with row or column keyboard navigation.
 *
 * @remarks
 * LEFT/RIGHT (row) or UP/DOWN (column) move the cursor among enabled options; SPACE or ENTER
 * toggles the focused value via `onChange`. Column mode window-scrolls with `maxHeight`; disabled
 * options are omitted from focus.
 */
export function TagMultiSelect({
  options,
  selected,
  onChange,
  maxHeight = DEFAULT_MAX_HEIGHT,
  direction = "row",
  gap = 1,
  selectedBorderStyle = "single",
  renderLabel,
}: TagMultiSelectProps) {
  const [cursor, setCursor] = useState(0);

  // Filter out disabled options from navigation
  const enabledOptions = useMemo(
    () => options.filter((opt) => !opt.disabled),
    [options],
  );

  useKeyboard((key: KeyEvent) => {
    // Navigate based on direction
    if (direction === "row") {
      if (key.name === "left") {
        setCursor((c) => Math.max(0, c - 1));
        return;
      }
      if (key.name === "right") {
        setCursor((c) => Math.min(enabledOptions.length - 1, c + 1));
        return;
      }
    } else {
      if (key.name === "up") {
        setCursor((c) => Math.max(0, c - 1));
        return;
      }
      if (key.name === "down") {
        setCursor((c) => Math.min(enabledOptions.length - 1, c + 1));
        return;
      }
    }

    // Toggle selection with spacebar or enter
    if (key.name === "space" || key.name === "return") {
      const option = enabledOptions[cursor];
      if (!option || option.disabled) return;

      const isSelected = selected.includes(option.value);
      onChange(
        isSelected
          ? selected.filter((v) => v !== option.value)
          : [...selected, option.value],
      );
    }
  });

  const border = BORDER_STYLES[selectedBorderStyle];

  // Calculate visible window for scrolling (column mode only)
  const visibleStart =
    direction === "column"
      ? Math.max(0, cursor - Math.floor(maxHeight / 2))
      : 0;
  const visibleEnd =
    direction === "column"
      ? Math.min(enabledOptions.length, visibleStart + maxHeight)
      : enabledOptions.length;
  const visibleOptions = enabledOptions.slice(visibleStart, visibleEnd);

  return (
    <box flexDirection="column">
      {/* Tags container */}
      <box flexDirection={direction}>
        {visibleOptions.map((option, index) => {
          const actualIndex =
            direction === "column" ? visibleStart + index : index;
          const isSelected = selected.includes(option.value);
          const isCursor = actualIndex === cursor;

          const displayLabel = renderLabel
            ? renderLabel(option, isSelected)
            : option.label;

          const labelWidth = displayLabel.length;
          const showBorder = isSelected || isCursor;

          if (showBorder) {
            const topBorder = `${border.tl}${border.h.repeat(labelWidth + 2)}${border.tr}`;
            const middleBorder = `${border.v} ${displayLabel} ${border.v}`;
            const bottomBorder = `${border.bl}${border.h.repeat(labelWidth + 2)}${border.br}`;

            return (
              <box key={option.value} flexDirection="column" marginRight={gap}>
                <text>{topBorder}</text>
                <text>{middleBorder}</text>
                <text>{bottomBorder}</text>
                {isCursor && <text>{direction === "row" ? " ^" : " >"}</text>}
              </box>
            );
          }

          return (
            <box key={option.value} flexDirection="column" marginRight={gap}>
              <text>{" ".repeat(labelWidth + 4)}</text>
              <text>{`  ${displayLabel}  `}</text>
              <text>{" ".repeat(labelWidth + 4)}</text>
            </box>
          );
        })}
      </box>

      {/* Scroll indicator for column mode */}
      {direction === "column" && enabledOptions.length > maxHeight && (
        <text>
          {visibleStart > 0 ? "↑ " : "  "}
          Showing {visibleStart + 1}-{visibleEnd} of {enabledOptions.length}
          {visibleEnd < enabledOptions.length ? " ↓" : ""}
        </text>
      )}

      {/* Selection summary */}
      <box flexDirection="row" marginTop={1}>
        <text>Selected: </text>
        {selected.length === 0 ? (
          <text>(none)</text>
        ) : (
          <text>
            {selected
              .map(
                (value) =>
                  options.find((opt) => opt.value === value)?.label ?? value,
              )
              .join(", ")}
          </text>
        )}
      </box>

      {/* Help text */}
      <text>
        {direction === "row"
          ? "← → to navigate, space/enter to toggle"
          : "↑ ↓ to navigate, space/enter to toggle"}
      </text>
    </box>
  );
}
