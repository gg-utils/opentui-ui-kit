/**
 * @fileoverview Barrel exports for the OpenTUI spinner component family (frame spinners, presets, labeled variants).
 *
 * Flow: spinner implementations and preset catalogue -> re-exported animation surface plus `SPINNER_PRESETS` alias.
 *
 * @example
 * ```typescript
 * import { Spinner, SPINNER_PRESETS } from "./index.js";
 * ```
 *
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/spinner/index.ts');"
 * @see packages/opentui-ui-kit/src/spinner/Spinner.tsx - Spinner implementation re-exported here.
 * @see packages/opentui-ui-kit/src/spinner/presets.ts - Spinner presets re-exported here.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */

// Component exports
export { Spinner } from "./Spinner";
export { LabeledSpinner } from "./LabeledSpinner";
export { PresetSpinner } from "./PresetSpinner";

// Preset exports
export { presets, presets as SPINNER_PRESETS, defaultPreset } from "./presets";

// Type exports
export type {
  SpinnerProps,
  LabeledSpinnerProps,
  SpinnerPreset,
  SpinnerPresets,
  SpinnerPresetName,
  PresetSpinnerProps,
} from "./types";
