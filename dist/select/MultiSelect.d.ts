import type { MultiSelectProps } from "./types";
/**
 * OpenTUI multi-select: keyboard-driven checkbox list with a bounded scroll window.
 *
 * @remarks
 * UP/DOWN move the cursor among enabled options only; SPACE toggles the focused value and calls
 * `onChange` with the next selection array. Disabled options stay visible but are skipped for
 * focus. Long lists use a sliding viewport centered on the cursor (`maxHeight` rows).
 */
export declare function MultiSelect({ options, selected, onChange, maxHeight, title, showHelp, helpText, renderLabel, }: MultiSelectProps): import("react").ReactNode;
//# sourceMappingURL=MultiSelect.d.ts.map