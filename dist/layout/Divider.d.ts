/**
 * @fileoverview Shared OpenTUI divider primitive for labeled terminal separators.
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/layout/Divider.tsx');"
 * @see packages/opentui-ui-kit/src/layout/index.ts - Barrel.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
export interface DividerProps {
    /** Optional label displayed in the center of the divider */
    label?: string;
    /** Total width of the divider in characters (default: 40) */
    width?: number;
    /** Character used for the line (default: "─") */
    char?: string;
    /**
     * Foreground color of the divider line and label (default: "#6b7280")
     * Uses OpenTUI's fg property
     */
    color?: string;
    /** Padding around the label in characters (default: 1) */
    labelPadding?: number;
}
/**
 * OpenTUI horizontal divider: repeated line characters with an optional centered label.
 *
 * @remarks
 * PURITY: Presentational only; constructs child `<text>` nodes from props and local string math.
 */
export declare function Divider({ label, width, char, color, labelPadding, }: DividerProps): import("react").ReactNode;
export declare namespace Divider {
    var displayName: string;
}
//# sourceMappingURL=Divider.d.ts.map