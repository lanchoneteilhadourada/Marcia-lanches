/* =========================================================
   MÁRCIA LANCHES
   SCRIPT.JS
   ========================================================= */


/* =========================
   MENU MOBILE
========================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("active");

        const icon = menuButton.querySelector("i");

        if (nav.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* =========================
   FECHAR MENU AO CLICAR
========================= */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("active");
        }

        if (menuButton) {

            const icon = menuButton.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });

});


/* =========================
   FILTRO DO CARDÁPIO
========================= */

function filtrarCardapio(categoria, botao) {

    const produtos = document.querySelectorAll(".menu-card");
    const botoes = document.querySelectorAll(".category");

    /*
       Remove o estado ativo de todos os botões
    */

    botoes.forEach(item => {
        item.classList.remove("active");
    });


    /*
       Ativa o botão selecionado
    */

    if (botao) {
        botao.classList.add("active");
    }


    /*
       Mostra ou esconde os produtos
    */

    produtos.forEach(produto => {

        const categoriaProduto = produto.dataset.category;

        if (
            categoria === "todos" ||
            categoriaProduto === categoria
        ) {

            produto.classList.remove("hidden");

            produto.style.animation = "none";

            void produto.offsetWidth;

            produto.style.animation = "fadeUp 0.4s ease both";

        } else {

            produto.classList.add("hidden");

        }

    });

}


/* =========================
   LINKS DE WHATSAPP
========================= */

const numeroWhatsApp = "5543996462839";

const mensagemWhatsApp =
    "Olá! Vim pelo site da Márcia Lanches e gostaria de fazer um pedido.";

const linksWhatsApp = document.querySelectorAll(
    'a[href*="wa.me"]'
);

linksWhatsApp.forEach(link => {

    /*
       Não altera links que já possuem uma mensagem específica.
    */

    if (!link.href.includes("?text=")) {

        link.href =
            `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
                mensagemWhatsApp
            )}`;

    }

});


/* =========================
   ANIMAÇÃO AO ROLAR
========================= */

const elementosAnimados = document.querySelectorAll(
    ".highlight-card, .menu-card, .about-image, .about-content, .rating-box, .location-content, .map-container"
);


/*
   Se o navegador suportar IntersectionObserver,
   os elementos aparecem suavemente conforme entram
   na tela.
*/

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    elementosAnimados.forEach(elemento => {

        elemento.style.opacity = "0";
        elemento.style.transform = "translateY(25px)";
        elemento.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        observer.observe(elemento);

    });

}


/* =========================
   ESTILO PARA ELEMENTOS VISÍVEIS
========================= */

const styleAnimacao = document.createElement("style");

styleAnimacao.textContent = `

    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

`;

document.head.appendChild(styleAnimacao);


/* =========================
   SCROLL SUAVE
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const destino = this.getAttribute("href");

        if (!destino || destino === "#") {
            return;
        }

        const elemento = document.querySelector(destino);

        if (elemento) {

            event.preventDefault();

            elemento.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================
   HEADER AO ROLAR
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) {
        return;
    }

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 8px 25px rgba(0, 0, 0, 0.07)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =========================
   ANO AUTOMÁTICO NO RODAPÉ
========================= */

const anoAtual = new Date().getFullYear();

const textosRodape = document.querySelectorAll(
    ".footer-bottom p"
);

textosRodape.forEach(texto => {

    if (texto.textContent.includes("2026")) {

        texto.textContent =
            texto.textContent.replace(
                "2026",
                anoAtual
            );

    }

});


/* =========================
   LOG NO CONSOLE
========================= */

console.log(
    "Márcia Lanches — site carregado com sucesso!"
);
