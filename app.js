import { calculateSignal, explanationFor, shareText } from "./core.js";

const form = document.querySelector("#risk-form");
const resultPanel = document.querySelector("#result");
let currentResult;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const answers = Object.fromEntries(["rain", "drain", "water", "route", "support"].map((key) => [key, data.get(key)]));
  currentResult = calculateSignal(answers);
  resultPanel.dataset.level = currentResult.key;
  document.querySelector("#result-level").textContent = currentResult.label;
  document.querySelector("#result-title").textContent = currentResult.title;
  document.querySelector("#result-score").textContent = `${currentResult.score}/13`;
  document.querySelector("#result-summary").textContent = currentResult.summary;
  document.querySelector("#result-explanation").textContent = explanationFor(answers, currentResult);
  document.querySelector("#result-actions").replaceChildren(...currentResult.actions.map((action) => {
    const item = document.createElement("li"); item.textContent = action; return item;
  }));
  resultPanel.hidden = false;
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  document.querySelector("#result-title").focus({ preventScroll: true });
});

form.addEventListener("reset", () => { resultPanel.hidden = true; currentResult = undefined; });
document.querySelector("#print-button").addEventListener("click", () => window.print());
document.querySelector("#copy-button").addEventListener("click", async (event) => {
  if (!currentResult) return;
  await navigator.clipboard.writeText(shareText(currentResult));
  const button = event.currentTarget; button.textContent = "Copied";
  setTimeout(() => { button.textContent = "Copy summary"; }, 1800);
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("./service-worker.js");
}
