document.addEventListener("DOMContentLoaded", function() {

    const botoes = document.querySelectorAll("button");

    botoes.forEach(function(botao) {
        botao.addEventListener("click", function() {
            console.log("Botão clicado!");
        });
    });

    const links = document.querySelectorAll("nav a");

    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            const destino = link.getAttribute("href");

            if (destino && destino.startsWith("#")) {
                event.preventDefault();

                const secao = document.querySelector(destino);

                if (secao) {
                    secao.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    const titulo = document.querySelector(".hero h1");

    if (titulo) {
        titulo.addEventListener("mouseenter", function() {
            titulo.style.transform = "scale(1.03)";
        });

        titulo.addEventListener("mouseleave", function() {
            titulo.style.transform = "scale(1)";
        });
    }

    console.log("Site carregado com sucesso!");

});
