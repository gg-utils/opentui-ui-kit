/**
 * @fileoverview Barrel exporting OpenTUI status indicators, badge chips, and shared color or symbol
 * maps for script terminal layouts.
 *
 * Flow: Badge.tsx, StatusIndicator.tsx, and types.ts stay implementation-private while this index
 * exposes the supported public import paths for status UI kit consumers.
 *
 * @example
 * ```typescript
 * import { Badge, StatusIndicator } from "./index.js";
 * ```
 *
 * @testing CLI: from repo root, npx tsx -e "await import('./packages/opentui-ui-kit/src/status/index.ts');" verifies ESM resolution.
 * @see packages/opentui-ui-kit/src/status/Badge.tsx - Badge implementation surfaced here next to type re-exports.
 * @see packages/opentui-ui-kit/src/status/StatusIndicator.tsx - Indicator, STATUS_COLORS, and STATUS_SYMBOLS implementation surfaced here.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
export { StatusIndicator, STATUS_COLORS, STATUS_SYMBOLS, } from "./StatusIndicator.js";
export { Badge } from "./Badge.js";
//# sourceMappingURL=index.js.map