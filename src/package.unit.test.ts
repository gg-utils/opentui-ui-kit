import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";
import { defaultPreset, presets } from "./spinner/presets.js";

void test("spinner presets provide usable animation frames and timing", () => {
  for (const preset of Object.values(presets)) {
    assert.ok(preset.frames.length > 0);
    assert.ok(preset.frames.every((frame) => frame.length > 0));
    assert.ok(preset.interval > 0);
  }
  assert.ok(Object.values(presets).includes(defaultPreset));
});

void test("every public package entry exists as JavaScript or a declaration", () => {
  const manifest: unknown = JSON.parse(readFileSync("package.json", "utf8"));
  function check(value: unknown): void {
    if (typeof value === "string") {
      assert.ok(existsSync(value), value);
      assert.match(value, /\.(?:js|ts|json)$/u);
    } else if (value !== null && typeof value === "object") {
      for (const child of Object.values(value)) check(child);
    }
  }
  assert.ok(manifest !== null && typeof manifest === "object" && "exports" in manifest);
  check(manifest.exports);
});
