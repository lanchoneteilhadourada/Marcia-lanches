/* =====================================================
   MÁRCIA LANCHES
   SCRIPT.JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MENU MOBILE
    ========================== */

    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            nav.classList.toggle("active");

            menuToggle.classList.toggle("active");

        });

    }


    /* =========================
       FECHAR MENU AO CLICAR
    ========================== */

    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            menuToggle.classList.remove("active");

        });

    });


    /* =========================
       FILTRO DO CARDÁPIO
    ========================== */

    const categoryButtons = document.querySelectorAll(".category");
    const menuCards = document.querySelectorAll(".menu-card");

    categoryButtons.forEach(button => {

        button.addEventListener("click", () => {

            const category = button.dataset.category;

            /* Remove active dos outros botões */

            categoryButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            /* Ativa o botão selecionado */

            button.classList.add("active");


            /* Filtra os produtos */

            menuCards.forEach(card => {

                const cardCategory = card.dataset.category;

                if (
                    category === "todos" ||
                    cardCategory === category
                ) {

                    card.style.display = "";

                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "translateY(0)";
                    }, 10);

                } else {

                    card.style.opacity = "0";
                    card.style.transform = "translateY(15px)";

                    setTimeout(() => {
                        card.style.display = "none";
                    }, 250);

                }

            });

        });

    });


    /* =========================
       ROLAGEM SUAVE
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const header = document.querySelector(".header");

            const headerHeight = header
                ? header.offsetHeight
                : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =========================
       HEADER AO ROLAR
    ========================== */

    const header = document.querySelector(".header");

    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* =========================
       ANIMAÇÃO AO APARECER
    ========================== */

    const animatedElements = document.querySelectorAll(
        ".highlight-card, .menu-card, .stat-card, .contact-card"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        animatedElements.forEach(element => {

            element.classList.add("hidden");

            observer.observe(element);

        });

    }


    /* =========================
       ANO AUTOMÁTICO DO RODAPÉ
    ========================== */

    const footerText = document.querySelector(".footer-bottom p");

    if (footerText) {

        const currentYear = new Date().getFullYear();

        footerText.innerHTML =
            `© ${currentYear} Márcia Lanches. Todos os direitos reservados.`;

    }


    /* =========================
       FECHAR MENU AO REDIMENSIONAR
    ========================== */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 760) {

            nav.classList.remove("active");

            menuToggle.classList.remove("active");

        }

    });


    /* =========================
       PROTEÇÃO DOS LINKS EXTERNOS
    ========================== */

    document.querySelectorAll('a[target="_blank"]').forEach(link => {

        link.setAttribute("rel", "noopener noreferrer");

    });


    /* =========================
       BOTÕES DO WHATSAPP
    ========================== */

    const whatsappButtons = document.querySelectorAll(
        'a[href*="wa.me"]'
    );

    whatsappButtons.forEach(button => {

        button.addEventListener("click", () => {

            console.log(
                "Redirecionando para o WhatsApp da Márcia Lanches."
            );

        });

    });


    /* =========================
       LOG
    ========================== */

    console.log(
        "🍔 Márcia Lanches — site carregado com sucesso!"
    );

});
