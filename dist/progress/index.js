/**
 * @fileoverview Barrel exports for the OpenTUI progress component family.
 *
 * Flow: progress implementation files -> re-exported progress component and type surface.
 *
 * @example
 * ```typescript
 * import { ProgressBar, MultiStepProgress } from "./index.js";
 * ```
 *
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/progress/index.ts');"
 * @see packages/opentui-ui-kit/src/progress/ProgressBar.tsx - Base progress bar re-exported here.
 * @see packages/opentui-ui-kit/src/progress/MultiStepProgress.tsx - Multi-step progress component re-exported here.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
export { ProgressBar } from "./ProgressBar";
export { LabeledProgress } from "./LabeledProgress";
export { SegmentedProgress } from "./SegmentedProgress";
export { MultiStepProgress } from "./MultiStepProgress";
export { default } from "./ProgressBar";
//# sourceMappingURL=index.js.map