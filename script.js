// =============================
// DARK MODE TOGGLE (global)
// =============================
const toggle = document.getElementById("themeToggle");

// Dark Mode Zustand laden
if (localStorage.getItem("darkmode") === "true") {
    document.body.classList.add("dark");
}

// Button nur aktivieren, wenn er existiert
if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        // Zustand speichern
        localStorage.setItem("darkmode", document.body.classList.contains("dark"));
    });
}


// Nur auf Hauptseite
function toggleAccordion(id) {
    const item = document.getElementById(id);
    if (!item) return;

    const btn = item.querySelector(".acc-btn");
    const content = item.querySelector(".acc-content");

    const isOpen = content.classList.contains("open");

    // Wenn bereits offen -> schließen
    if (isOpen) {
        btn.classList.remove("active");
        content.classList.remove("open");
        return;
    }

    // Zuerst andere schließen
    document.querySelectorAll(".acc-btn").forEach(b => {
        b.classList.remove("active");
        b.nextElementSibling.classList.remove("open");
    });

    // Diesen öffnen
    btn.classList.add("active");
    content.classList.add("open");

    // Smooth scroll
    item.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Accordion per Klick (nur wenn vorhanden)
document.querySelectorAll(".acc-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.parentElement.id;
        toggleAccordion(id);
    });
});

// Navigation per Klick (nur wenn vorhanden)
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        const target = link.dataset.target;
        toggleAccordion(target);
    });
});







