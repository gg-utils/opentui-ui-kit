/**
 * @fileoverview Shared OpenTUI labeled spinner that pairs the frame loop with adjacent status text.
 *
 * Flow: timer-driven frame index -> glyph render -> optional label beside or above/below the spinner.
 *
 * @example
 * ```tsx
 * import { LabeledSpinner } from "./LabeledSpinner";
 *
 * <LabeledSpinner label="Fetching…" labelPosition="right" />
 * ```
 *
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/spinner/LabeledSpinner.tsx');"
 * @see packages/opentui-ui-kit/src/spinner/Spinner.tsx - Core frame loop primitive this component wraps with label layout.
 * @see packages/opentui-ui-kit/src/spinner/types.ts - `LabeledSpinnerProps` contract for label placement, gap, and colors.
 * @see packages/opentui-ui-kit/src/spinner/index.ts - Barrel that re-exports this component for CLI surfaces.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import { useEffect, useState } from "react";
import type { LabeledSpinnerProps } from "./types";
import { defaultPreset } from "./presets";

/**
 * OpenTUI spinner row that advances preset frames on an interval beside optional label text.
 *
 * @remarks
 * Label placement uses `labelPosition`; when omitted or `right`, the spinner leads and the label trails.
 */
const LabeledSpinner = ({
  frames = defaultPreset.frames,
  interval = defaultPreset.interval,
  color,
  label,
  labelPosition = "right",
  gap = 1,
  labelColor,
  dimLabel = false,
}: LabeledSpinnerProps) => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame((f) => (f + 1) % frames.length);
    }, interval);

    return () => clearInterval(timer);
  }, [frames.length, interval]);

  const gapSpaces = " ".repeat(gap);

  const spinnerElement = <text fg={color}>{frames[frame]}</text>;

  const labelElement = (
    <text fg={labelColor ?? (dimLabel ? "#666666" : undefined)}>{label}</text>
  );

  if (labelPosition === "left") {
    return (
      <box>
        {labelElement}
        <text>{gapSpaces}</text>
        {spinnerElement}
      </box>
    );
  }

  return (
    <box>
      {spinnerElement}
      <text>{gapSpaces}</text>
      {labelElement}
    </box>
  );
};

LabeledSpinner.displayName = "LabeledSpinner";

export { LabeledSpinner };
