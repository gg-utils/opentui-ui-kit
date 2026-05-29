/**
 * @fileoverview Type contracts for the OpenTUI progress component family.
 *
 * Flow: progress values and step metadata -> reusable progress component prop types.
 *
 * @example
 * ```typescript
 * const props: ProgressBarProps = { value: 50, max: 100 };
 * ```
 *
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/progress/types.ts');"
 * @see packages/opentui-ui-kit/src/progress/index.ts - Barrel export surface for these types.
 * @documentation reviewed=2026-04-11 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */

/**
 * Core props for rendering a single horizontal progress bar with optional width and glyph styling.
 *
 * @remarks
 * Values are clamped by consumers; this module only declares the prop contract shared across OpenTUI progress renderers.
 */
export interface ProgressBarProps {
  /** Current value (0 to max) */
  value: number;
  /** Maximum value (default: 100) */
  max?: number;
  /** Bar width in characters (default: 20) */
  width?: number;
  /** Character for filled portion (default: "█") */
  fillChar?: string;
  /** Character for empty portion (default: "░") */
  emptyChar?: string;
  /** Fill color */
  fillColor?: string;
  /** Empty portion color */
  emptyColor?: string;
}

/**
 * Progress bar props plus optional label placement, percentage rendering, and related colors.
 *
 * @remarks
 * Extends `ProgressBarProps` so labeled variants stay layout-compatible with the base renderer.
 */
export interface LabeledProgressProps extends ProgressBarProps {
  /** Label text to display */
  label?: string;
  /** Position of the label: "above", "before", or "none" (default: "above") */
  labelPosition?: "above" | "before" | "none";
  /** Color for the label text */
  labelColor?: string;
  /** Show percentage after the bar (default: true) */
  showPercentage?: boolean;
  /** Color for the percentage text */
  percentageColor?: string;
  /** Number of decimal places for percentage (default: 0) */
  percentageDecimals?: number;
}

/**
 * Props for a segmented (chunked) progress visualization with partial-fill support between steps.
 *
 * @remarks
 * Consumers map `value`/`max` into discrete segments; glyph and color fields tune per-segment appearance.
 */
export interface SegmentedProgressProps {
  /** Current value (0 to max) */
  value: number;
  /** Maximum value (default: 100) */
  max?: number;
  /** Number of segments (default: 10) */
  segments?: number;
  /** Character for filled segment (default: "█") */
  fillChar?: string;
  /** Character for empty segment (default: "░") */
  emptyChar?: string;
  /** Character for partial segment (default: "▒") */
  partialChar?: string;
  /** Color for filled segments */
  fillColor?: string;
  /** Color for empty segments */
  emptyColor?: string;
  /** Color for partial segments */
  partialColor?: string;
  /** Separator between segments (default: " ") */
  separator?: string;
}

/**
 * Lifecycle state for an individual step row inside a multi-step progress renderer.
 */
export type StepStatus = "pending" | "active" | "completed" | "error";

/**
 * Identifies and labels one step while carrying its current `StepStatus` for matrix-style UIs.
 */
export interface Step {
  /** Unique identifier for the step */
  id: string;
  /** Label text for the step */
  label: string;
  /** Current status of the step */
  status: StepStatus;
}

/**
 * Props for rendering an ordered list of `Step` values with per-state glyphs, colors, and optional labels.
 *
 * @remarks
 * Separator strings and `showLabels` control density; callers should keep `steps` stable across renders to avoid flicker.
 */
export interface MultiStepProgressProps {
  /** Array of steps to display */
  steps: Step[];
  /** Character/style for completed step (default: "✓") */
  completedChar?: string;
  /** Character/style for active step (default: "→") */
  activeChar?: string;
  /** Character/style for pending step (default: "○") */
  pendingChar?: string;
  /** Character/style for error step (default: "✗") */
  errorChar?: string;
  /** Color for completed steps */
  completedColor?: string;
  /** Color for active step */
  activeColor?: string;
  /** Color for pending steps */
  pendingColor?: string;
  /** Color for error steps */
  errorColor?: string;
  /** Separator between steps (default: " → ") */
  separator?: string;
  /** Color for the separator */
  separatorColor?: string;
  /** Show labels under steps (default: true) */
  showLabels?: boolean;
  /** Maximum width for labels before truncation */
  maxLabelWidth?: number;
}
