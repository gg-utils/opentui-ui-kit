/**
 * @fileoverview Type contracts for OpenTUI status indicators and badges shared across script
 * terminal UIs.
 *
 * Flow: closed StatusType and BadgeVariant literals narrow tone, then prop interfaces wire those
 * tokens into StatusIndicator and Badge without duplicating string unions at call sites.
 *
 * @example
 * ```typescript
 * const props: StatusIndicatorProps = { status: "success", label: "Ready" };
 * ```
 *
 * @testing CLI: from repo root, npx tsx -e "await import('./packages/opentui-ui-kit/src/status/types.ts');" verifies ESM resolution.
 * @see packages/opentui-ui-kit/src/status/Badge.tsx - Badge renderer consuming BadgeProps and BadgeVariant from this module.
 * @see packages/opentui-ui-kit/src/status/StatusIndicator.tsx - Indicator renderer consuming StatusIndicatorProps and StatusType here.
 * @see packages/opentui-ui-kit/src/status/index.ts - Barrel forwarding these types with the status components for importers.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
/**
 * Status types supported by StatusIndicator
 */
export type StatusType = "success" | "error" | "warning" | "info" | "pending";

/**
 * Props for the StatusIndicator component
 */
export interface StatusIndicatorProps {
  /** The status type determining color and symbol */
  status: StatusType;
  /** Optional label text (defaults to status value) */
  label?: string;
  /** Whether to show the colored dot symbol */
  showDot?: boolean;
}

/**
 * Badge color variants
 */
export type BadgeVariant =
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "neutral";

/**
 * Props for the Badge component
 */
export interface BadgeProps {
  /** The badge text content */
  children: string;
  /** Color variant of the badge */
  variant?: BadgeVariant;
  /** Optional icon or emoji prefix */
  icon?: string;
  /** Whether to show a border */
  bordered?: boolean;
  /** Whether to use a filled background style */
  filled?: boolean;
}
