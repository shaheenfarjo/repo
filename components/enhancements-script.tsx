import { sectionIds, timeZone } from "@/lib/content"

// The pages ship no framework JavaScript. This inline script is the page's only
// behavior, and everything it does is an enhancement:
// 1. Theme button: switches data-theme on <html> and remembers the choice.
// 2. Footer clock: Baghdad time, updated each second.
// 3. Hero sphere: loads /sphere.js once the page is idle, or shows the static
//    snapshot for reduced motion, Save-Data or low-end phones.
// 4. Language switch links keep the reader on the section they're viewing.
// 5. The mobile disclosure menu closes after a link inside it is chosen.
const source = `(() => {
  const root = document.documentElement;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const toggles = document.querySelectorAll("[data-theme-toggle]");
  const syncTheme = () => {
    const dark = root.dataset.theme === "dark";
    for (const button of toggles) button.setAttribute("aria-pressed", String(dark));
    if (themeColor) themeColor.content = getComputedStyle(root).getPropertyValue("--bg").trim();
  };
  for (const button of toggles) {
    button.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      if (next === "dark") root.dataset.theme = "dark"; else delete root.dataset.theme;
      try { localStorage.setItem("theme", next); } catch {}
      syncTheme();
    });
  }
  syncTheme();

  const clock = document.querySelector("[data-clock]");
  if (clock) {
    const format = new Intl.DateTimeFormat("en-GB", { timeZone: ${JSON.stringify(timeZone)}, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
    const tick = () => { clock.textContent = format.format(new Date()); };
    tick();
    setInterval(tick, 1000);
  }

  const stage = document.querySelector("[data-sphere]");
  if (stage) {
    const coarse = matchMedia("(pointer: coarse)").matches;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = navigator.connection && navigator.connection.saveData;
    const lowEnd = coarse && (navigator.hardwareConcurrency || 8) <= 4;
    const showStatic = () => stage.classList.add("is-static");
    const start = reduced || saveData || lowEnd
      ? showStatic
      : () => import("/sphere.js")
        .then((module) => { if (!module.mountSphere(stage, { detail: coarse ? 32 : 56 })) showStatic(); })
        .catch(showStatic);
    // Either way, wait until the page has loaded and gone idle, so neither the
    // WebGL work nor the snapshot download competes with the text and fonts
    const idle = window.requestIdleCallback || ((callback) => setTimeout(callback, 200));
    if (document.readyState === "complete") idle(start, { timeout: 3000 });
    else addEventListener("load", () => idle(start, { timeout: 3000 }), { once: true });
  }

  const ids = ${JSON.stringify(sectionIds)};
  const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
  const switches = document.querySelectorAll("a[data-lang-switch]");
  let queued = false;
  const update = () => {
    queued = false;
    let current = "";
    for (const section of sections) if (section.getBoundingClientRect().top <= 96) current = section.id;
    for (const link of switches) link.href = link.dataset.langSwitch + (current ? "#" + current : "");
  };
  addEventListener("scroll", () => { if (!queued) { queued = true; requestAnimationFrame(update); } }, { passive: true });
  update();

  const menu = document.querySelector("details[data-menu]");
  if (menu) menu.addEventListener("click", (event) => { if (event.target.closest("a")) menu.open = false; });
})();`

export function EnhancementsScript() {
  return <script dangerouslySetInnerHTML={{ __html: source }} />
}
