#!/usr/bin/env bun
/**
 * @fileoverview Interactive OpenTUI demo entrypoint for the shared component set.
 * @testing Manual smoke: bun packages/opentui-ui-kit/examples/demo.tsx
 * @see packages/opentui-ui-kit/src/index.ts - Barrel.
 * @documentation reviewed=2026-04-13 standard=FILE_OVERVIEW_STANDARDS_TYPESCRIPT@3
 */

import React, { useState } from "react";
import { render, useApp } from "@opentui/react";
import {
  Spinner,
  LabeledSpinner,
  PresetSpinner,
  SegmentedProgress,
  LabeledProgress,
  MultiStepProgress,
  ConfirmInput,
  StatusIndicator,
  Badge,
  Divider,
  MultiSelect,
} from "../src/index.js";

/**
 * Interactive demo shell that exercises shared OpenTUI components.
 *
 * @remarks
 * Terminal lifecycle uses OpenTUI `useApp`; `render` is invoked at module bottom.
 */
const DemoApp = () => {
  useApp();
  const [currentDemo] = useState(0);
  const [progress] = useState(45);
  const [selected, setSelected] = useState<string[]>(["opt1"]);
  const [confirmed, setConfirmed] = useState<boolean | null>(null);

  const demos = [
    "Spinners",
    "Progress Bars",
    "Status & Badges",
    "Confirm Inputs",
    "Multi Select",
  ];

  const multiSelectOptions = [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
    { label: "Option 3", value: "opt3" },
    { label: "Option 4", value: "opt4" },
  ];

  const steps = [
    { label: "Configure", status: "completed" as const },
    { label: "Install", status: "completed" as const },
    { label: "Setup", status: "active" as const },
    { label: "Deploy", status: "pending" as const },
  ];

  return (
    <box border padding={1} direction="column">
      <text bold underline color="#00FFFF">
        OpenTUI Components Demo
      </text>

      <box marginTop={1}>
        <text dimColor>
          Demo {currentDemo + 1}/{demos.length}:{" "}
        </text>
        <text bold>{demos[currentDemo]}</text>
      </box>

      <Divider width={40} marginTop={1} marginBottom={1} />

      {/* Spinner Demo */}
      {currentDemo === 0 && (
        <box direction="column">
          <box>
            <text>Basic: </text>
            <Spinner />
          </box>
          <box marginTop={1}>
            <text>Labeled: </text>
            <LabeledSpinner label="Loading..." />
          </box>
          <box marginTop={1}>
            <text>Preset (dots2): </text>
            <PresetSpinner preset="dots2" />
          </box>
          <box marginTop={1}>
            <text>Preset (line): </text>
            <PresetSpinner preset="line" color="#FFFF00" />
          </box>
        </box>
      )}

      {/* Progress Demo */}
      {currentDemo === 1 && (
        <box direction="column">
          <LabeledProgress
            value={progress}
            label="Installation Progress"
            showPercentage
          />
          <box marginTop={1}>
            <SegmentedProgress value={progress} segments={10} />
          </box>
          <box marginTop={1}>
            <MultiStepProgress steps={steps} currentStep={2} />
          </box>
        </box>
      )}

      {/* Status & Badges Demo */}
      {currentDemo === 2 && (
        <box direction="column">
          <box>
            <StatusIndicator status="success" label="Connected" />
          </box>
          <box marginTop={1}>
            <StatusIndicator status="warning" label="Warning" />
          </box>
          <box marginTop={1}>
            <StatusIndicator status="error" label="Failed" />
          </box>
          <box marginTop={1}>
            <text>Badges: </text>
            <Badge variant="primary">v1.0</Badge>
            <text> </text>
            <Badge variant="success">Pass</Badge>
            <text> </text>
            <Badge variant="error" filled>
              Error
            </Badge>
          </box>
        </box>
      )}

      {/* Confirm Demo */}
      {currentDemo === 3 && (
        <box direction="column">
          {confirmed === null ? (
            <ConfirmInput
              message="Continue with installation?"
              defaultValue={true}
              onSubmit={(value) => setConfirmed(value)}
            />
          ) : (
            <box>
              <text>You selected: </text>
              <text bold color={confirmed ? "#00FF00" : "#FF0000"}>
                {confirmed ? "YES" : "NO"}
              </text>
            </box>
          )}
        </box>
      )}

      {/* MultiSelect Demo */}
      {currentDemo === 4 && (
        <box direction="column">
          <text bold>Select options (space to toggle):</text>
          <MultiSelect
            options={multiSelectOptions}
            selected={selected}
            onChange={setSelected}
            maxHeight={4}
          />
          <box marginTop={1}>
            <text>Selected: </text>
            <text color="#00FFFF">{selected.join(", ") || "none"}</text>
          </box>
        </box>
      )}

      <Divider width={40} marginTop={1} marginBottom={1} />

      <text dimColor>Press Tab to cycle demos, Ctrl+C to exit</text>
    </box>
  );
};

render(<DemoApp />);
