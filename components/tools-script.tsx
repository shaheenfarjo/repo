import type { Content } from "@/lib/content"

// Inline behavior for the tools page only (other pages don't carry it). It
// reads the visitor's answers, writes results into the page, and builds the
// WhatsApp link. Nothing is stored and no request is made.
export function ToolsScript({ t }: { t: Content }) {
  const strings = {
    areas: t.healthCheck.areas.map((area) => area.name),
    score: t.healthCheck.score,
    weakest: t.healthCheck.weakest,
    allGood: t.healthCheck.allGood,
    message: t.healthCheck.message,
    currency: t.breakEven.currency,
    separator: t.lang === "ar" ? "، " : ", ",
  }
  const source = `(() => {
  const s = ${JSON.stringify(strings)};
  // Accept Western or Arabic-Indic digits, with or without separators
  const toNumber = (value) => {
    const digits = value.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d)).replace(/[^0-9.]/g, "");
    return digits ? Number(digits) : NaN;
  };
  const format = (n) => Math.round(n).toLocaleString("en-US");

  const hc = document.querySelector("[data-health-check]");
  if (hc) {
    const total = s.areas.length * 4;
    const send = hc.querySelector("[data-hc-send]");
    const baseHref = send.href;
    hc.addEventListener("submit", (event) => event.preventDefault());
    hc.addEventListener("change", () => {
      const checked = [...hc.querySelectorAll("input[type=radio]:checked")];
      const complete = checked.length === s.areas.length * 2;
      hc.querySelector("[data-hc-incomplete]").hidden = complete;
      hc.querySelector("[data-hc-result]").hidden = !complete;
      if (!complete) return;
      const scores = s.areas.map(() => 0);
      for (const input of checked) scores[Number(input.dataset.areaIndex)] += Number(input.value);
      const score = scores.reduce((a, b) => a + b, 0);
      // Areas at half marks or below, weakest first
      const weak = s.areas.map((name, i) => ({ name, score: scores[i] })).filter((a) => a.score <= 2).sort((a, b) => a.score - b.score);
      const scoreLine = s.score.replace("{score}", score).replace("{total}", total);
      const summary = weak.length ? s.weakest.replace("{areas}", weak.map((a) => a.name).join(s.separator)) : s.allGood;
      hc.querySelector("[data-hc-score]").textContent = scoreLine;
      hc.querySelector("[data-hc-summary]").textContent = summary;
      const list = hc.querySelector("[data-hc-areas]");
      list.replaceChildren(...s.areas.map((name, i) => {
        const li = document.createElement("li");
        li.className = "t-body flex justify-between gap-4 border-b border-hairline py-2";
        const label = document.createElement("span");
        label.textContent = name;
        const value = document.createElement("span");
        value.className = "t-num text-ink";
        value.dir = "ltr";
        value.textContent = scores[i] + "/4";
        li.append(label, value);
        return li;
      }));
      const lines = [s.message, scoreLine, ...s.areas.map((name, i) => name + ": " + scores[i] + "/4"), summary];
      // Keep the source tag from the server-rendered link, after the result
      const tag = decodeURIComponent(baseHref.split("text=")[1] || "").split("\\n\\n").slice(1).join("\\n\\n");
      send.href = baseHref.split("text=")[0] + "text=" + encodeURIComponent(lines.join("\\n") + (tag ? "\\n\\n" + tag : ""));
    });
  }

  const be = document.querySelector("[data-break-even]");
  if (be) {
    be.addEventListener("submit", (event) => event.preventDefault());
    be.addEventListener("input", () => {
      const fixed = toNumber(be.fixed.value), price = toNumber(be.price.value), variable = toNumber(be.variable.value);
      const ready = [fixed, price, variable].every((n) => Number.isFinite(n)) && price > 0;
      const margin = price - variable;
      be.querySelector("[data-be-empty]").hidden = ready;
      be.querySelector("[data-be-loss]").hidden = !ready || margin > 0;
      be.querySelector("[data-be-result]").hidden = !ready || margin <= 0;
      if (!ready || margin <= 0) return;
      const units = Math.ceil(fixed / margin);
      be.querySelector('[data-be="units"]').textContent = format(units);
      be.querySelector('[data-be="revenue"]').textContent = format(units * price) + " " + s.currency;
      be.querySelector('[data-be="margin"]').textContent = format(margin) + " " + s.currency + " (" + Math.round((margin / price) * 100) + "%)";
    });
  }
})();`
  return <script dangerouslySetInnerHTML={{ __html: source }} />
}
