// ==============================
// INICIALIZAÇÃO
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Menu Hamburguer carregado!");

    configurarRolagem();
    configurarBotoes();
    configurarAnimacoes();
    configurarCategorias();

});

// ==============================
// ROLAGEM SUAVE
// ==============================

function configurarRolagem() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function(event) {

            const destino = this.getAttribute("href");
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
}

// ==============================
// BOTÕES
// ==============================

function configurarBotoes() {

    const botoes = document.querySelectorAll("button");

    botoes.forEach(botao => {

        botao.addEventListener("click", () => {

            botao.style.transform = "scale(0.96)";

            setTimeout(() => {
                botao.style.transform = "scale(1)";
            }, 120);

        });
    });
}

// ==============================
// ANIMAÇÕES DOS PRODUTOS
// ==============================

function configurarAnimacoes() {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transition = "0.3s";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transition = "0.3s";
        });
    });
}

// ==============================
// FILTRO DE CATEGORIAS
// ==============================

function configurarCategorias() {

    const categorias = document.querySelectorAll(".category");
    const produtos = document.querySelectorAll(".card");

    categorias.forEach(botao => {

        botao.addEventListener("click", () => {

            const categoria = botao.dataset.category;

            categorias.forEach(item => {
                item.classList.remove("active");
            });

            botao.classList.add("active");

            produtos.forEach(produto => {

                const tipo = produto.dataset.category;

                if (categoria === "todos" || tipo === categoria) {
                    produto.style.display = "block";
                } else {
                    produto.style.display = "none";
                }

            });
        });
    });
}

// ==============================
// VOLTAR AO TOPO
// ==============================

window.addEventListener("scroll", () => {

    const distancia = window.scrollY;

    if (distancia > 300) {
        document.body.classList.add("rolando");
    } else {
        document.body.classList.remove("rolando");
    }

});
