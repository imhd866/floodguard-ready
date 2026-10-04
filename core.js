export const LEVELS = Object.freeze({
  ready: {
    label: "READY",
    title: "Review your plan",
    summary: "Conditions you reported do not show an immediate high-risk signal. Stay alert because conditions can change quickly.",
    actions: [
      "Keep phones charged and place medicines, documents, and a torch in one dry bag.",
      "Agree on a higher, safe meeting point with everyone in your household.",
      "Check drains and routes only from a safe, dry position."
    ]
  },
  act: {
    label: "ACT NOW",
    title: "Prepare to move",
    summary: "Your observations show conditions that could make movement harder. Prepare now and keep a safe route open.",
    actions: [
      "Move essential items, medicines, and documents above expected water level.",
      "Contact anyone who may need help and identify a dry route to higher ground.",
      "Avoid floodwater and monitor official local instructions."
    ]
  },
  leave: {
    label: "LEAVE SAFELY",
    title: "Seek higher ground",
    summary: "Your observations show an urgent safety signal. Do not wait for this tool to confirm danger.",
    actions: [
      "Move away from floodwater toward known higher ground using a clear, dry route.",
      "Help people who need support without entering moving or unknown-depth water.",
      "If anyone is in immediate danger, call 112 or 767. Follow official instructions."
    ]
  }
});

export function calculateSignal(answers) {
  const keys = ["rain", "drain", "water", "route", "support"];
  const values = keys.map((key) => Number(answers[key]));
  if (values.some((value) => !Number.isFinite(value) || value < 0)) {
    throw new TypeError("Every answer must be a non-negative number.");
  }
  const score = values.reduce((sum, value) => sum + value, 0);
  const urgentCondition = values[2] >= 4;
  const key = urgentCondition || score >= 8 ? "leave" : score >= 4 ? "act" : "ready";
  return { score, key, ...LEVELS[key] };
}

export function explanationFor(answers, result) {
  const labels = { rain: "rain", drain: "drainage", water: "route water", route: "safe route", support: "support needs" };
  const parts = Object.entries(answers).map(([key, value]) => `${labels[key]} ${Number(value)} point${Number(value) === 1 ? "" : "s"}`);
  const override = Number(answers.water) >= 4 ? " Above-ankle or moving water always triggers the highest action level." : "";
  return `The five observations total ${result.score} points: ${parts.join(", ")}. Signals are Ready (0–3), Act now (4–7), and Leave safely (8–13).${override}`;
}

export function shareText(result) {
  return `FloodGuard Ready — ${result.label}: ${result.title}. ${result.summary} Next: ${result.actions.join(" ")} This is decision support, not an official alert.`;
}
