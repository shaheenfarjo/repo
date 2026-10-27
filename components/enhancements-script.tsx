import { sectionIds } from "@/lib/content"

// The pages ship no framework JavaScript. This small inline script is the only
// JS, and the page works fully without it:
// 1. Language switch links keep the reader on the section they're viewing.
// 2. The mobile disclosure menu closes after a link inside it is chosen.
const source = `(() => {
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
