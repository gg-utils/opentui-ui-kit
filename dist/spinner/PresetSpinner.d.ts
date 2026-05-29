/**
 * @fileoverview Shared OpenTUI preset spinner that maps a named key from `presets` into `Spinner` frames and cadence.
 *
 * Flow: preset name -> `presets` lookup -> `Spinner` with resolved frames/interval.
 *
 * @example
 * ```tsx
 * import { PresetSpinner } from "./PresetSpinner";
 *
 * <PresetSpinner preset="dots" color="#00FF00" />
 * ```
 *
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/spinner/PresetSpinner.tsx');"
 * @see packages/opentui-ui-kit/src/spinner/presets.ts - Named frame catalogue consumed when resolving the preset prop.
 * @see packages/opentui-ui-kit/src/spinner/types.ts - `PresetSpinnerProps` contract for preset key and color overrides.
 * @see packages/opentui-ui-kit/src/spinner/index.ts - Barrel that re-exports this wrapper next to `Spinner` and presets.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import type { PresetSpinnerProps } from "./types";
/**
 * Renders `Spinner` with frames and interval from the named `presets` entry, falling back when the key is missing.
 *
 * @remarks
 * Presentation-only: resolves against the shared preset map and forwards props to `Spinner` without side effects.
 */
declare const PresetSpinner: {
    ({ preset, color }: PresetSpinnerProps): import("react").ReactNode;
    displayName: string;
};
export { PresetSpinner };
//# sourceMappingURL=PresetSpinner.d.ts.map