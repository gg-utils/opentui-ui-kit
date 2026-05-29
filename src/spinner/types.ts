/**
 * @fileoverview Type contracts for the OpenTUI spinner component family.
 *
 * Flow: spinner and preset configuration values -> props and preset type contracts.
 *
 * @example
 * ```typescript
 * const spinnerProps: SpinnerProps = { frames: ["-", "\\"], interval: 80 };
 * ```
 *
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/spinner/types.ts');"
 * @see packages/opentui-ui-kit/src/spinner/Spinner.tsx - Base spinner component that consumes these contracts.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */

/**
 * Configuration props for rendering a text-based animated spinner.
 */
export interface SpinnerProps {
  /**
   * Ordered sequence of glyph strings shown in succession to create the animation illusion.
   * @defaultValue ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]
   */
  frames?: string[];

  /**
   * Interval between frame changes in milliseconds
   * @default 80
   */
  interval?: number;

  /**
   * Foreground color of the spinner
   * Can be a hex color string (e.g., "#00FF00") or named color
   */
  color?: string;

  /**
   * Background color of the spinner
   * Can be a hex color string (e.g., "#0000FF") or named color
   */
  backgroundColor?: string;
}

/**
 * Props for the LabeledSpinner component
 * Extends base SpinnerProps with label-related properties
 */
export interface LabeledSpinnerProps extends SpinnerProps {
  /**
   * The label text to display next to the spinner
   */
  label: string;

  /**
   * Position of the label relative to the spinner
   * @default "right"
   */
  labelPosition?: "left" | "right";

  /**
   * Gap between the spinner and the label (in characters)
   * @default 1
   */
  gap?: number;

  /**
   * Color for the label text
   * Can be a hex color string (e.g., "#00FF00") or named color
   */
  labelColor?: string;

  /**
   * Whether to dim the label text
   * @default false
   */
  dimLabel?: boolean;
}

/**
 * Predefined spinner animation preset names
 */
export type SpinnerPresetName =
  | "dots"
  | "dots2"
  | "line"
  | "arrow"
  | "bouncingBar";

/**
 * Configuration for a spinner preset
 */
export interface SpinnerPreset {
  /**
   * Array of frame characters
   */
  frames: string[];

  /**
   * Recommended interval for this preset in milliseconds
   */
  interval: number;
}

/**
 * Record of all available spinner presets
 */
export type SpinnerPresets = Record<SpinnerPresetName, SpinnerPreset>;

/**
 * Props for the PresetSpinner component
 */
export interface PresetSpinnerProps
  extends Omit<SpinnerProps, "frames" | "interval" | "backgroundColor"> {
  /**
   * The preset key to use for the spinner animation
   * @default "dots"
   */
  preset?: SpinnerPresetName;
}
