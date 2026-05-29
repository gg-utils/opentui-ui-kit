/**
 * @fileoverview Barrel exports for the OpenTUI confirmation input components used by repo CLIs.
 *
 * Matrix: ConfirmInput (yes/no select), SingleKeyConfirm (Y/n keys), DangerConfirm (type-to-match),
 * ConfirmWithDetails (yes/no plus detail list).
 *
 * @example
 * ```tsx
 * import { ConfirmInput, SingleKeyConfirm } from "./index.js";
 *
 * <ConfirmInput message="Continue?" onSubmit={(confirmed) => console.log(confirmed)} />
 * <SingleKeyConfirm message="Overwrite?" defaultValue={false} onSubmit={(confirmed) => console.log(confirmed)} />
 * ```
 *
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/input/index.ts');"
 * @see packages/opentui-ui-kit/src/input/ConfirmInput.tsx - Yes/no confirmation component re-exported here.
 * @see packages/opentui-ui-kit/src/input/DangerConfirm.tsx - Type-to-confirm destructive-action guard re-exported here.
 * @see packages/opentui-ui-kit/src/input/SingleKeyConfirm.tsx - Single-key confirmation variant re-exported here.
 * @see packages/opentui-ui-kit/src/input/ConfirmWithDetails.tsx - Confirmation with optional detail panel re-exported here.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
export { ConfirmInput } from "./ConfirmInput.js";
export { SingleKeyConfirm } from "./SingleKeyConfirm.js";
export { DangerConfirm } from "./DangerConfirm.js";
export { ConfirmWithDetails } from "./ConfirmWithDetails.js";
export type { ConfirmInputProps, SingleKeyConfirmProps, DangerConfirmProps, ConfirmWithDetailsProps, ConfirmDetailItem, ConfirmOption, } from "./types.js";
//# sourceMappingURL=index.d.ts.map