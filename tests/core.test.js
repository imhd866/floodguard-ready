import test from "node:test";
import assert from "node:assert/strict";
import { calculateSignal, explanationFor, shareText } from "../core.js";

test("low observations produce a ready signal", () => {
  assert.equal(calculateSignal({ rain: 0, drain: 0, water: 0, route: 0, support: 0 }).key, "ready");
});

test("combined concerns produce an act signal", () => {
  const result = calculateSignal({ rain: 2, drain: 1, water: 2, route: 0, support: 0 });
  assert.deepEqual([result.score, result.key], [5, "act"]);
});

test("above-ankle or moving water triggers leave safely", () => {
  assert.equal(calculateSignal({ rain: 0, drain: 0, water: 4, route: 0, support: 0 }).key, "leave");
});

test("high combined score triggers leave safely", () => {
  assert.equal(calculateSignal({ rain: 2, drain: 2, water: 2, route: 3, support: 2 }).key, "leave");
});

test("invalid data is rejected", () => {
  assert.throws(() => calculateSignal({ rain: 0, drain: -1, water: 0, route: 0, support: 0 }), TypeError);
});

test("explanation and share text disclose decision support", () => {
  const answers = { rain: 1, drain: 1, water: 2, route: 0, support: 0 };
  const result = calculateSignal(answers);
  assert.match(explanationFor(answers, result), /total 4 points/);
  assert.match(shareText(result), /not an official alert/);
});
