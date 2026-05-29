/**
 * @fileoverview Shared OpenTUI multi-step progress primitive for terminal workflows.
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/progress/MultiStepProgress.tsx');"
 * @see packages/opentui-ui-kit/src/progress/index.ts - Barrel.
 * @see packages/opentui-ui-kit/src/progress/types.ts - Step status and component props.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import { MultiStepProgressProps, Step } from "./types";

/**
 * Resolves the marker character for a step using its status and the configured char map.
 */
function getStepChar(
  step: Step,
  chars: {
    completed: string;
    active: string;
    pending: string;
    error: string;
  },
): string {
  switch (step.status) {
    case "completed":
      return chars.completed;
    case "active":
      return chars.active;
    case "error":
      return chars.error;
    case "pending":
    default:
      return chars.pending;
  }
}

/**
 * Resolves the foreground color token for a step using its status and the configured palette.
 */
function getStepColor(
  step: Step,
  colors: {
    completed: string;
    active: string;
    pending: string;
    error: string;
  },
): string {
  switch (step.status) {
    case "completed":
      return colors.completed;
    case "active":
      return colors.active;
    case "error":
      return colors.error;
    case "pending":
    default:
      return colors.pending;
  }
}

/**
 * Truncates a label to fit the layout width, suffixing an ellipsis when shortened.
 */
function truncateLabel(label: string, maxWidth: number): string {
  if (label.length <= maxWidth) return label;
  return label.slice(0, maxWidth - 1) + "…";
}

/**
 * OpenTUI column layout that renders step markers and optional aligned labels for wizard flows.
 *
 * @remarks
 * PURITY: Presentational; maps `Step.status` to configured chars and colors without side effects.
 */
const MultiStepProgress = ({
  steps,
  completedChar = "✓",
  activeChar = "→",
  pendingChar = "○",
  errorChar = "✗",
  completedColor = "#00FF00",
  activeColor = "#00AAFF",
  pendingColor = "#666666",
  errorColor = "#FF0000",
  separator = " → ",
  separatorColor = "#888888",
  showLabels = true,
  maxLabelWidth = 12,
}: MultiStepProgressProps) => {
  const charMap = {
    completed: completedChar,
    active: activeChar,
    pending: pendingChar,
    error: errorChar,
  };

  const colorMap = {
    completed: completedColor,
    active: activeColor,
    pending: pendingColor,
    error: errorColor,
  };

  return (
    <box flexDirection="column">
      {/* Step indicators row */}
      <box>
        {steps.map((step, index) => {
          const char = getStepChar(step, charMap);
          const color = getStepColor(step, colorMap);
          const isLast = index === steps.length - 1;

          return (
            <box key={step.id}>
              <text fg={color}>{char}</text>
              {!isLast && <text fg={separatorColor}>{separator}</text>}
            </box>
          );
        })}
      </box>

      {/* Labels row */}
      {showLabels && (
        <box marginTop={1}>
          {steps.map((step, index) => {
            const color = getStepColor(step, colorMap);
            const isLast = index === steps.length - 1;
            const truncatedLabel = truncateLabel(step.label, maxLabelWidth);

            // Calculate spacing to roughly align under the step indicators
            const separatorLength = separator.length;
            const spacing = isLast
              ? ""
              : " ".repeat(
                  Math.max(0, separatorLength - (truncatedLabel.length - 1)),
                );

            return (
              <box key={`label-${step.id}`}>
                <text fg={color}>{truncatedLabel}</text>
                {!isLast && <text>{spacing}</text>}
              </box>
            );
          })}
        </box>
      )}
    </box>
  );
};

export { MultiStepProgress };
export default MultiStepProgress;
