/**
 * @fileoverview Shared OpenTUI badge primitive that renders a bordered or filled terminal chip from
 * variant-driven palette tokens.
 *
 * Flow: BadgeProps select BADGE_COLORS, then the layout toggles border, fill, and optional icon
 * prefix around the label text inside nested OpenTUI box primitives.
 *
 * @testing CLI: from repo root, npx tsx -e "await import('./packages/opentui-ui-kit/src/status/Badge.tsx');" verifies ESM resolution.
 * @see packages/opentui-ui-kit/src/status/index.ts - Status barrel that re-exports Badge next to StatusIndicator for script CLIs.
 * @see packages/opentui-ui-kit/src/status/types.ts - Owns BadgeVariant and BadgeProps consumed by this renderer.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import type { BadgeProps } from "./types.js";
/**
 * OpenTUI badge chip for variant-colored labels with optional border, soft fill, and leading icon.
 *
 * @remarks
 * Palette tokens resolve via `BADGE_COLORS`; layout uses nested `box`/`text` primitives only (pure render).
 */
declare const Badge: {
    ({ children, variant, icon, bordered, filled, }: BadgeProps): import("react").ReactNode;
    displayName: string;
};
export { Badge };
//# sourceMappingURL=Badge.d.ts.map