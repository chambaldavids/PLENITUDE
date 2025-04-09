document.addEventListener("DOMContentLoaded", () => {
    // Navbar dinâmica com scroll
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Minimizar seções
    const toggles = document.querySelectorAll(".toggle-section");
    toggles.forEach(btn => {
        btn.addEventListener("click", () => {
            const section = btn.closest(".toggle-container");
            section.classList.toggle("collapsed");
        });
    });

    // Foco nos inputs
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.style.boxShadow = "0 0 10px rgba(0, 47, 108, 0.4)";
        });
        input.addEventListener("blur", () => {
            input.style.boxShadow = "none";
        });
    });

    // Efeito de digitação (typing effect)
    const heroTitle = document.querySelector(".hero h2");
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = "";
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 70);
            }
        };
        typeWriter();
    }
});
