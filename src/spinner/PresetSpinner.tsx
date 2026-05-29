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
import { presets, defaultPreset } from "./presets";
import { Spinner } from "./Spinner";

/**
 * Renders `Spinner` with frames and interval from the named `presets` entry, falling back when the key is missing.
 *
 * @remarks
 * Presentation-only: resolves against the shared preset map and forwards props to `Spinner` without side effects.
 */
const PresetSpinner = ({ preset = "dots", color }: PresetSpinnerProps) => {
  const selectedPreset = presets[preset] ?? defaultPreset;

  return (
    <Spinner
      frames={selectedPreset.frames}
      interval={selectedPreset.interval}
      color={color}
    />
  );
};

PresetSpinner.displayName = "PresetSpinner";

export { PresetSpinner };
