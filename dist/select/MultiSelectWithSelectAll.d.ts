import type { MultiSelectWithSelectAllProps } from "./types";
/**
 * OpenTUI multi-select with a leading select-all row and separator before enabled options.
 *
 * @remarks
 * Row 0 is select-all; row 1 is a non-interactive separator; remaining rows are enabled options
 * only (disabled options are hidden from the list). UP/DOWN move the cursor across those rows;
 * SPACE bulk-toggles on row 0, is a no-op on the separator, and toggles a single value on option
 * rows. Long lists use a sliding viewport of at most `maxHeight` rows around the cursor.
 */
export declare function MultiSelectWithSelectAll({ options, selected, onChange, maxHeight, selectAllLabel, title, showHelp, renderLabel, }: MultiSelectWithSelectAllProps): import("react").ReactNode;
//# sourceMappingURL=MultiSelectWithSelectAll.d.ts.map