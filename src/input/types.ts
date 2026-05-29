/**
 * @fileoverview Type contracts for the OpenTUI confirmation input components.
 *
 * Flow: confirmation component props -> reusable input and detail-item type definitions.
 *
 * @example
 * ```typescript
 * const props: ConfirmInputProps = {
 *   message: "Continue?",
 *   onSubmit: () => {},
 * };
 * ```
 *
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/input/types.ts');"
 * @see packages/opentui-ui-kit/src/input/index.ts - Barrel export surface for these types.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */

/**
 * Base props shared across confirmation input components
 */
export interface ConfirmInputProps {
  /** The message to display to the user */
  message: string;
  /** Default selection value */
  defaultValue?: boolean;
  /** Callback fired when user makes a selection */
  onSubmit: (value: boolean) => void;
}

/**
 * Props for single-key confirmation (Y/n pattern)
 */
export interface SingleKeyConfirmProps {
  /** The message to display to the user */
  message: string;
  /** Default selection value - controls [Y/n] vs [y/N] display */
  defaultValue?: boolean;
  /** Callback fired when user presses y, n, or Enter */
  onSubmit: (value: boolean) => void;
  /** Color for the hint text (default: yellow) */
  hintColor?: string;
}

/**
 * Props for dangerous action confirmation requiring text input
 */
export interface DangerConfirmProps {
  /** Warning message to display */
  message: string;
  /** Text the user must type to confirm */
  confirmText: string;
  /** Callback fired when confirmation is submitted */
  onSubmit: (confirmed: boolean) => void;
  /** Border/warning color (default: red) */
  warningColor?: string;
  /** Color when confirmed (default: green) */
  successColor?: string;
  /** Color when not yet confirmed (default: gray) */
  pendingColor?: string;
}

/**
 * Detail item for ConfirmWithDetails component
 */
export interface ConfirmDetailItem {
  /** Label for the detail */
  label: string;
  /** Value to display */
  value: string;
}

/**
 * Props for confirmation with details panel
 */
export interface ConfirmWithDetailsProps {
  /** The main message/question to display */
  message: string;
  /** Array of detail items to show */
  details?: ConfirmDetailItem[];
  /** Default selection value */
  defaultValue?: boolean;
  /** Callback fired when user makes a selection */
  onSubmit: (value: boolean) => void;
  /** Color for the message highlight (default: cyan) */
  highlightColor?: string;
  /** Label for the confirmation question (default: "Continue?") */
  confirmLabel?: string;
}

/**
 * Option type for Select-based confirmations
 */
export interface ConfirmOption {
  /** Display label */
  label: string;
  /** String value ("true" or "false") */
  value: string;
}
