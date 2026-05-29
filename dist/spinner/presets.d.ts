/**
 * @fileoverview Shared OpenTUI spinner presets for terminal loading animations.
 *
 * This file owns the named preset catalogue that spinner consumers use to pick a frame sequence and
 * cadence without hand-assembling animation arrays.
 * Flow: preset key -> frame list + interval -> `Spinner` / `PresetSpinner` consumers.
 *
 * @example
 * ```tsx
 * import { Spinner } from "./Spinner";
 * import { presets } from "./presets";
 *
 * <Spinner frames={presets.line.frames} interval={presets.line.interval} />
 * ```
 *
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/spinner/presets.ts');"
 * @see packages/opentui-ui-kit/src/spinner/index.ts - Barrel that re-exports the preset map and default preset.
 * @see packages/opentui-ui-kit/src/spinner/types.ts - Spinner preset contract that defines the frame and interval shape.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import type { SpinnerPresets } from "./types";
/**
 * Collection of predefined spinner animation presets.
 * Choose the preset that best matches the terminal's visual density and the feedback style you want
 * to communicate to the user.
 */
export declare const presets: SpinnerPresets;
/**
 * Default preset used when a caller does not choose one explicitly.
 * Dots stay the default because they are compact, recognizable, and work well in most terminals.
 */
export declare const defaultPreset: import("./types").SpinnerPreset;
//# sourceMappingURL=presets.d.ts.map