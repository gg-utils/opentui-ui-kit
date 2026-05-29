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
export declare const STATUS_COLORS: Record<StatusType, string>;
/**
 * Symbol mapping for each status type
 */
export declare const STATUS_SYMBOLS: Record<StatusType, string>;
/**
 * Terminal status row that renders a semantic tone as colored OpenTUI text with an optional symbol prefix.
 *
 * @remarks
 * Maps `status` through {@link STATUS_COLORS} and {@link STATUS_SYMBOLS}; visible copy prefers `label`, otherwise the raw status token.
 */
export declare function StatusIndicator({ status, label, showDot, }: StatusIndicatorProps): import("react").ReactNode;
export declare namespace StatusIndicator {
    var displayName: string;
}
//# sourceMappingURL=StatusIndicator.d.ts.map