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
import type { BadgeVariant, BadgeProps } from "./types.js";

const BADGE_COLORS: Record<
  BadgeVariant,
  { fg: string; border: string; bg: string }
> = {
  primary: {
    fg: "#3b82f6", // Blue
    border: "#3b82f6",
    bg: "#eff6ff",
  },
  success: {
    fg: "#22c55e", // Green
    border: "#22c55e",
    bg: "#f0fdf4",
  },
  warning: {
    fg: "#f59e0b", // Amber
    border: "#f59e0b",
    bg: "#fffbeb",
  },
  error: {
    fg: "#ef4444", // Red
    border: "#ef4444",
    bg: "#fef2f2",
  },
  neutral: {
    fg: "#6b7280", // Gray
    border: "#6b7280",
    bg: "#f3f4f6",
  },
};

/**
 * OpenTUI badge chip for variant-colored labels with optional border, soft fill, and leading icon.
 *
 * @remarks
 * Palette tokens resolve via `BADGE_COLORS`; layout uses nested `box`/`text` primitives only (pure render).
 */
const Badge = ({
  children,
  variant = "neutral",
  icon,
  bordered = true,
  filled = false,
}: BadgeProps) => {
  const colors = BADGE_COLORS[variant];

  return (
    <box
      borderStyle={bordered ? "single" : undefined}
      borderColor={bordered ? colors.border : undefined}
      backgroundColor={filled ? colors.bg : undefined}
    >
      <box paddingLeft={1} paddingRight={1}>
        {icon && <text style={{ fg: colors.fg }}>{icon} </text>}
        <text style={{ fg: colors.fg }}>{children}</text>
      </box>
    </box>
  );
};

Badge.displayName = "Badge";

export { Badge };
