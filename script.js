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
    
const catalogImages = [
    "assets/katalog1.jpg", // Ganti dengan nama file foto katalog pertama
    "assets/katalog2.jpg", // Ganti dengan nama file foto katalog kedua
    "assets/katalog3.jpg"  // Ganti dengan nama file foto katalog ketiga
];

let currentIndex = 0;
const sliderImg = document.getElementById("slider-img");

if (sliderImg) {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % catalogImages.length;
        sliderImg.src = catalogImages[currentIndex];
    }, 3000);
}
        });
    });
});
