import type { SpinnerProps } from "./types.js";
/**
 * Frame-based loading indicator that advances through the active preset until unmounted.
 */
export declare function Spinner({ frames, interval, color, }: SpinnerProps): import("react").ReactNode;
export declare namespace Spinner {
    var displayName: string;
}
