/**
 * @fileoverview Shared OpenTUI spinner presets for terminal loading animations.
 *
 * This file owns the named preset catalogue that spinner consumers use to pick a frame sequence and
 * cadence without hand-assembling animation arrays.
 * Flow: preset key -> frame list + interval -> `Spinner` / `PresetSpinner` consumers.
 *
 * @example
 * ```tsx
 * import { Spinner } from "./Spinner";
 * import { presets } from "./presets";
 *
 * <Spinner frames={presets.line.frames} interval={presets.line.interval} />
 * ```
 *
 * @testing Manual import verification: npx tsx -e "await import('./packages/opentui-ui-kit/src/spinner/presets.ts');"
 * @see packages/opentui-ui-kit/src/spinner/index.ts - Barrel that re-exports the preset map and default preset.
 * @see packages/opentui-ui-kit/src/spinner/types.ts - Spinner preset contract that defines the frame and interval shape.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */
import type { SpinnerPresets } from "./types";

/**
 * Collection of predefined spinner animation presets.
 * Choose the preset that best matches the terminal's visual density and the feedback style you want
 * to communicate to the user.
 */
export const presets: SpinnerPresets = {
  /**
   * Classic braille dot spinner for general-purpose loading states.
   * Smooth rotation makes it a good default when you want a familiar, low-noise throbber.
   */
  dots: {
    frames: ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"],
    interval: 80,
  },

  /**
   * Filled braille dot spinner for a bolder loading indicator.
   * Useful when the default dot spinner feels too light or you want stronger visual contrast.
   */
  dots2: {
    frames: ["⣾", "⣽", "⣻", "⢿", "⡿", "⣟", "⣯", "⣷"],
    interval: 80,
  },

  /**
   * Simple ASCII line spinner for conservative terminal environments.
   * Stays readable on terminals that do not render braille or wide glyphs cleanly.
   */
  line: {
    frames: ["-", "\\", "|", "/"],
    interval: 130,
  },

  /**
   * Directional arrow spinner for progress states that benefit from a stronger sense of motion.
   * The eight-frame cycle reads well when arrows are a better fit than dots.
   */
  arrow: {
    frames: ["←", "↖", "↑", "↗", "→", "↘", "↓", "↙"],
    interval: 100,
  },

  /**
   * Bouncing progress-bar spinner for workflows that feel closer to progress than loading.
   * The back-and-forth bar gives a heavier, more mechanical animation than the dot presets.
   */
  bouncingBar: {
    frames: [
      "[    ]",
      "[=   ]",
      "[==  ]",
      "[=== ]",
      "[ ===]",
      "[  ==]",
      "[   =]",
      "[    ]",
    ],
    interval: 120,
  },
};

/**
 * Default preset used when a caller does not choose one explicitly.
 * Dots stay the default because they are compact, recognizable, and work well in most terminals.
 */
export const defaultPreset = presets.dots;
