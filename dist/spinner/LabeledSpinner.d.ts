import type { LabeledSpinnerProps } from "./types";
/**
 * OpenTUI spinner row that advances preset frames on an interval beside optional label text.
 *
 * @remarks
 * Label placement uses `labelPosition`; when omitted or `right`, the spinner leads and the label trails.
 */
declare const LabeledSpinner: {
    ({ frames, interval, color, label, labelPosition, gap, labelColor, dimLabel, }: LabeledSpinnerProps): import("react").ReactNode;
    displayName: string;
};
export { LabeledSpinner };
//# sourceMappingURL=LabeledSpinner.d.ts.map