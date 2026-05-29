/**
 * @fileoverview Type contracts for the OpenTUI multi-select component family.
 *
 * Flow: option data and selection state -> reusable multi-select prop types.
 *
 * @example
 * ```typescript
 * const props: MultiSelectProps = {
 *   options: [{ label: "A", value: "a" }],
 *   selected: ["a"],
 *   onChange: () => {},
 * };
 * ```
 *
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/select/types.ts');"
 * @see packages/opentui-ui-kit/src/select/index.ts - Barrel export surface for these types.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */

/**
 * Option item for multi-select components
 */
export interface MultiSelectOption {
  /** Display label for the option */
  label: string;
  /** Unique value identifier */
  value: string;
  /** Optional disabled state */
  disabled?: boolean;
}

/**
 * Base props shared across all multi-select components
 */
export interface BaseMultiSelectProps {
  /** Available options to select from */
  options: MultiSelectOption[];
  /** Currently selected values */
  selected: string[];
  /** Callback when selection changes */
  onChange: (selected: string[]) => void;
  /** Maximum height in rows (for scrolling lists) */
  maxHeight?: number;
  /** Color for highlighting the cursor/selected item */
  highlightColor?: string;
  /** Color for checked/selected state */
  selectedColor?: string;
  /** Custom render function for option labels */
  renderLabel?: (option: MultiSelectOption, isSelected: boolean) => string;
}

/**
 * Props for the MultiSelect component
 */
export interface MultiSelectProps extends BaseMultiSelectProps {
  /** Optional title displayed above the list */
  title?: string;
  /** Show help text at bottom */
  showHelp?: boolean;
  /** Custom help text */
  helpText?: string;
}

/**
 * Props for MultiSelectWithSelectAll component
 */
export interface MultiSelectWithSelectAllProps extends BaseMultiSelectProps {
  /** Label for the select all option */
  selectAllLabel?: string;
  /** Optional title displayed above the list */
  title?: string;
  /** Show help text at bottom */
  showHelp?: boolean;
}

/**
 * Props for TagMultiSelect component
 */
export interface TagMultiSelectProps extends BaseMultiSelectProps {
  /** Direction of tag layout */
  direction?: "row" | "column";
  /** Gap between tags */
  gap?: number;
  /** Custom border style for selected tags */
  selectedBorderStyle?: "single" | "double" | "round" | "bold";
  /** Background color for selected tags */
  selectedBackgroundColor?: string;
  /** Background color for unselected tags */
  unselectedBackgroundColor?: string;
}
