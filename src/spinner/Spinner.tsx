/**
 * @fileoverview Shared OpenTUI spinner primitive for frame-based loading indicators.
 *
 * Flow: pick the preset frame sequence, advance it on a timer while the component is mounted,
 * and render the current glyph as the terminal loading state.
 *
 * @example
 * ```tsx
 * <Spinner />
 * <Spinner frames={["◐", "◓", "◑", "◒"]} interval={100} color="#00FF00" />
 * ```
 *
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/spinner/Spinner.tsx');"
 * @testing Browser/manual render: mount the spinner in an OpenTUI surface and confirm the frame loop and color prop both render as expected.
 * @see packages/opentui-ui-kit/src/spinner/index.ts - Barrel that re-exports the spinner primitive for package consumers.
 * @see packages/opentui-ui-kit/src/spinner/types.ts - Prop contract that defines the supported frame, interval, and color inputs.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import { useEffect, useState } from "react";
import type { SpinnerProps } from "./types";
import { defaultPreset } from "./presets";

/**
 * Frame-based loading indicator that advances through the active preset until unmounted.
 */
export function Spinner({
  frames = defaultPreset.frames,
  interval = defaultPreset.interval,
  color,
}: SpinnerProps) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame((f) => (f + 1) % frames.length);
    }, interval);

    return () => clearInterval(timer);
  }, [frames.length, interval]);

  return <text fg={color}>{frames[frame]}</text>;
}

Spinner.displayName = "Spinner";
