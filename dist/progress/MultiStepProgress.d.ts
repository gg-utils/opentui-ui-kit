/**
 * @fileoverview Shared OpenTUI multi-step progress primitive for terminal workflows.
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/progress/MultiStepProgress.tsx');"
 * @see packages/opentui-ui-kit/src/progress/index.ts - Barrel.
 * @see packages/opentui-ui-kit/src/progress/types.ts - Step status and component props.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import { MultiStepProgressProps } from "./types";
/**
 * OpenTUI column layout that renders step markers and optional aligned labels for wizard flows.
 *
 * @remarks
 * PURITY: Presentational; maps `Step.status` to configured chars and colors without side effects.
 */
declare const MultiStepProgress: ({ steps, completedChar, activeChar, pendingChar, errorChar, completedColor, activeColor, pendingColor, errorColor, separator, separatorColor, showLabels, maxLabelWidth, }: MultiStepProgressProps) => import("react").ReactNode;
export { MultiStepProgress };
export default MultiStepProgress;
//# sourceMappingURL=MultiStepProgress.d.ts.map