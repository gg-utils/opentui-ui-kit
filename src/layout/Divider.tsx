/**
 * @fileoverview Shared OpenTUI divider primitive for labeled terminal separators.
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/layout/Divider.tsx');"
 * @see packages/opentui-ui-kit/src/layout/index.ts - Barrel.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
export interface DividerProps {
  /** Optional label displayed in the center of the divider */
  label?: string;
  /** Total width of the divider in characters (default: 40) */
  width?: number;
  /** Character used for the line (default: "─") */
  char?: string;
  /**
   * Foreground color of the divider line and label (default: "#6b7280")
   * Uses OpenTUI's fg property
   */
  color?: string;
  /** Padding around the label in characters (default: 1) */
  labelPadding?: number;
}

/**
 * OpenTUI horizontal divider: repeated line characters with an optional centered label.
 *
 * @remarks
 * PURITY: Presentational only; constructs child `<text>` nodes from props and local string math.
 */
export function Divider({
  label,
  width = 40,
  char = "─",
  color = "#6b7280",
  labelPadding = 1,
}: DividerProps) {
  if (label) {
    const labelWithPadding =
      " ".repeat(labelPadding) + label + " ".repeat(labelPadding);
    const remainingWidth = Math.max(0, width - labelWithPadding.length);
    const leftWidth = Math.floor(remainingWidth / 2);
    const rightWidth = remainingWidth - leftWidth;

    const leftLine = char.repeat(Math.max(0, leftWidth));
    const rightLine = char.repeat(Math.max(0, rightWidth));

    return (
      <box>
        <text style={{ fg: color }}>{leftLine}</text>
        <text style={{ fg: color }}>{labelWithPadding}</text>
        <text style={{ fg: color }}>{rightLine}</text>
      </box>
    );
  }

  // Simple divider without label
  const line = char.repeat(Math.max(0, width));

  return (
    <box>
      <text style={{ fg: color }}>{line}</text>
    </box>
  );
}

Divider.displayName = "Divider";
