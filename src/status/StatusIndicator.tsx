/**
 * @fileoverview Shared OpenTUI status indicator that maps semantic status types to colored dot and
 * label text for terminal state rows.
 *
 * Flow: StatusIndicatorProps pick STATUS_COLORS and STATUS_SYMBOLS entries, then render toggles
 * the leading dot while defaulting visible copy to label or raw status.
 *
 * @testing CLI: from repo root, npx tsx -e "await import('./packages/opentui-ui-kit/src/status/StatusIndicator.tsx');" verifies ESM resolution.
 * @see packages/opentui-ui-kit/src/status/index.ts - Status barrel that re-exports this component, STATUS_COLORS, and STATUS_SYMBOLS.
 * @see packages/opentui-ui-kit/src/status/types.ts - Owns StatusType and StatusIndicatorProps consumed by this renderer.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import type { StatusType, StatusIndicatorProps } from "./types.js";

export const STATUS_COLORS: Record<StatusType, string> = {
  success: "#22c55e", // Green
  error: "#ef4444", // Red
  warning: "#f59e0b", // Amber
  info: "#3b82f6", // Blue
  pending: "#6b7280", // Gray
};

/**
 * Symbol mapping for each status type
 */
export const STATUS_SYMBOLS: Record<StatusType, string> = {
  success: "●",
  error: "●",
  warning: "●",
  info: "●",
  pending: "○",
};

/**
 * Terminal status row that renders a semantic tone as colored OpenTUI text with an optional symbol prefix.
 *
 * @remarks
 * Maps `status` through {@link STATUS_COLORS} and {@link STATUS_SYMBOLS}; visible copy prefers `label`, otherwise the raw status token.
 */
export function StatusIndicator({
  status,
  label,
  showDot = true,
}: StatusIndicatorProps) {
  return (
    <box>
      {showDot && (
        <text style={{ fg: STATUS_COLORS[status] }}>
          {STATUS_SYMBOLS[status]}{" "}
        </text>
      )}
      <text style={{ fg: STATUS_COLORS[status] }}>{label ?? status}</text>
    </box>
  );
}

StatusIndicator.displayName = "StatusIndicator";
