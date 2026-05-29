/**
 * @fileoverview Root barrel for the shared OpenTUI component library used by terminal script CLIs
 * for spinners, progress, confirm flows, multi-select, status rows, and layout dividers.
 *
 * Flow: feature barrels under src/spinner, progress, input, select, status, and layout fold into
 * this file so consumers import one surface instead of deep module paths.
 *
 * @example
 * ```typescript
 * import { Divider, StatusIndicator } from "./index.js";
 * ```
 *
 * @testing CLI: from repo root, npx tsx -e "await import('./packages/opentui-ui-kit/src/index.ts');" verifies ESM resolution.
 * @see packages/opentui-ui-kit/src/layout/index.ts - Layout barrel merged here so Divider ships beside interactive primitives.
 * @see packages/opentui-ui-kit/src/status/index.ts - Status barrel merged here for indicators, badges, and palette token exports.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
/**
 * @gg-utils/opentui-ui-kit
 * Component library for OpenTUI - spinners, progress bars, and input components
 */

// Spinner components
export {
  Spinner,
  LabeledSpinner,
  PresetSpinner,
  SPINNER_PRESETS,
} from "./spinner/index.js";
export type {
  SpinnerProps,
  LabeledSpinnerProps,
  SpinnerPreset,
} from "./spinner/index.js";

// Progress components
export {
  ProgressBar,
  LabeledProgress,
  SegmentedProgress,
  MultiStepProgress,
} from "./progress/index.js";
export type {
  ProgressBarProps,
  LabeledProgressProps,
  SegmentedProgressProps,
  MultiStepProgressProps,
  Step,
  StepStatus,
} from "./progress/index.js";

// Input components
export {
  ConfirmInput,
  SingleKeyConfirm,
  DangerConfirm,
  ConfirmWithDetails,
} from "./input/index.js";
export type {
  ConfirmInputProps,
  SingleKeyConfirmProps,
  DangerConfirmProps,
  ConfirmWithDetailsProps,
} from "./input/index.js";

// Select components
export {
  MultiSelect,
  MultiSelectWithSelectAll,
  TagMultiSelect,
} from "./select/index.js";
export type {
  MultiSelectOption,
  MultiSelectProps,
  MultiSelectWithSelectAllProps,
  TagMultiSelectProps,
} from "./select/index.js";

// Status components
export {
  StatusIndicator,
  Badge,
  STATUS_COLORS,
  STATUS_SYMBOLS,
} from "./status/index.js";
export type {
  StatusType,
  StatusIndicatorProps,
  BadgeVariant,
  BadgeProps,
} from "./status/index.js";

// Layout components
export { Divider } from "./layout/index.js";
export type { DividerProps } from "./layout/index.js";
