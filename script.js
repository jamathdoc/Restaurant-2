// Accordion behavior:
// - Clicking a section opens it
// - Only one section stays open at a time (optional behavior)
// - Nav links open the correct section + smooth scroll

const sections = Array.from(document.querySelectorAll(".menu-section"));

function closeOthers(exceptId) {
  sections.forEach((d) => {
    if (d.id !== exceptId) d.removeAttribute("open");
  });
}

// Only one open at a time:
sections.forEach((details) => {
  details.addEventListener("toggle", () => {
    if (details.open) closeOthers(details.id);
  });
});

// Nav clicks: open that section then scroll
document.querySelectorAll(".menu-nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href")?.replace("#", "");
    const target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();

    target.setAttribute("open", "");
    closeOthers(id);

    // Smooth scroll after it opens
    setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  });
});
