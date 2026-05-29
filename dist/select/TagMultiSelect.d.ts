import type { TagMultiSelectProps } from "./types";
/**
 * OpenTUI tag-style multi-select: chip borders with row or column keyboard navigation.
 *
 * @remarks
 * LEFT/RIGHT (row) or UP/DOWN (column) move the cursor among enabled options; SPACE or ENTER
 * toggles the focused value via `onChange`. Column mode window-scrolls with `maxHeight`; disabled
 * options are omitted from focus.
 */
export declare function TagMultiSelect({ options, selected, onChange, maxHeight, direction, gap, selectedBorderStyle, renderLabel, }: TagMultiSelectProps): import("react").ReactNode;
//# sourceMappingURL=TagMultiSelect.d.ts.map