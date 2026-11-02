// script.js - File Interaktif Utama

document.addEventListener("DOMContentLoaded", function () {
    console.log("Portofolio Sodikin Muhtadun berhasil dimuat!");

    // Efek interaktif tambahan (opsional)
    // Contoh: Menyorot tautan navigasi saat digulir (scroll)
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("text-indigo-600", "font-semibold");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("text-indigo-600", "font-semibold");
            }
        });
    });
});
