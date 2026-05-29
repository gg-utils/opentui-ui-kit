import { jsx as _jsx } from "@opentui/react/jsx-runtime";
import { presets, defaultPreset } from "./presets";
import { Spinner } from "./Spinner";
/**
 * Renders `Spinner` with frames and interval from the named `presets` entry, falling back when the key is missing.
 *
 * @remarks
 * Presentation-only: resolves against the shared preset map and forwards props to `Spinner` without side effects.
 */
const PresetSpinner = ({ preset = "dots", color }) => {
    const selectedPreset = presets[preset] ?? defaultPreset;
    return (_jsx(Spinner, { frames: selectedPreset.frames, interval: selectedPreset.interval, color: color }));
};
PresetSpinner.displayName = "PresetSpinner";
export { PresetSpinner };
//# sourceMappingURL=PresetSpinner.js.map