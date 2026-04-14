// DARK MODE
const toggle = document.getElementById("themeToggle");
if (localStorage.getItem("darkmode") === "true") {
    document.body.classList.add("dark");
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkmode", document.body.classList.contains("dark"));
});

// ACCORDION
function toggleAccordion(id) {
    const item = document.getElementById(id);
    if (!item) return;

    const btn = item.querySelector(".acc-btn");
    const content = item.querySelector(".acc-content");
    const isOpen = content.classList.contains("open");

    // Alle anderen schließen
    document.querySelectorAll(".acc-content").forEach(c => c.classList.remove("open"));
    document.querySelectorAll(".acc-btn").forEach(b => b.classList.remove("active"));

    // Gewähltes öffnen, wenn es vorher zu war
    if (!isOpen) {
        btn.classList.add("active");
        content.classList.add("open");
        
        // Kleiner Timeout für den Scroll, damit die Animation starten kann
        setTimeout(() => {
            item.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
    }
}

// Event Listener für Accordion Buttons
document.querySelectorAll(".acc-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        toggleAccordion(btn.parentElement.id);
    });
});

// Event Listener für Navigations-Buttons
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        const targetId = link.getAttribute("data-target");
        toggleAccordion(targetId);
    });
});







