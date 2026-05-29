/**
 * @fileoverview Barrel exports for the OpenTUI multi-select components used by repo CLIs.
 *
 * Matrix: MultiSelect (checkbox list), MultiSelectWithSelectAll (bulk toggle), TagMultiSelect (tag/chip layout).
 *
 * @example
 * ```tsx
 * import { MultiSelect, TagMultiSelect } from "./index.js";
 *
 * <MultiSelect
 *   options={[{ label: "A", value: "a" }]}
 *   selected={selected}
 *   onChange={setSelected}
 * />
 * <TagMultiSelect
 *   options={[{ label: "Tag A", value: "a" }]}
 *   selected={selected}
 *   onChange={setSelected}
 *   direction="row"
 * />
 * ```
 *
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/select/index.ts');"
 * @see packages/opentui-ui-kit/src/select/MultiSelect.tsx - Checkbox multi-select component re-exported here.
 * @see packages/opentui-ui-kit/src/select/MultiSelectWithSelectAll.tsx - Select-all helper variant re-exported here.
 * @see packages/opentui-ui-kit/src/select/TagMultiSelect.tsx - Tag-style multi-select component re-exported here.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
export { MultiSelect } from "./MultiSelect";
export { MultiSelectWithSelectAll } from "./MultiSelectWithSelectAll";
export { TagMultiSelect } from "./TagMultiSelect";
export type { MultiSelectOption, BaseMultiSelectProps, MultiSelectProps, MultiSelectWithSelectAllProps, TagMultiSelectProps, } from "./types";
//# sourceMappingURL=index.d.ts.map