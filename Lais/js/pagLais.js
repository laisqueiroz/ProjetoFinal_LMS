const historias = document.querySelector(".historias");
const btns = document.querySelectorAll(".btn");
const historia = document.querySelectorAll(".hist");

historias.addEventListener("click", function (e) {
    const id = e.target.dataset.id;

    if (id){
        btns.forEach(function(btn){
            btn.classList.remove("active");
        });

        e.target.classList.add("active");
        historia.forEach(function (artigo){
            artigo.classList.remove("active")
        });

        const elemento = document.getElementById(id);
        elemento.classList.add("active");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const fotosContainer = document.querySelector(".fotos");
    const fotos = document.querySelectorAll(".foto");
    const anteriorBtn = document.getElementById("anterior");
    const proximaBtn = document.getElementById("proxima");

    let fotoAtual = 0;

    proximaBtn.addEventListener("click", function () {
        if (fotoAtual < fotos.length - 1) {
            fotoAtual++;
            updateCarousel();
        }
    });

    anteriorBtn.addEventListener("click", function () {
        if (fotoAtual > 0) {
            fotoAtual--;
            updateCarousel();
        }
    });

    function updateCarousel() {
        const novaPosicao = -fotoAtual * 200; 
        fotosContainer.style.transform = `translateX(${novaPosicao}px)`;
        fotos.forEach((foto, index) => {
            foto.style.width = index === fotoAtual ? "200px" : "200px";
            foto.style.boxShadow = index === fotoAtual ? "0 4px 12px rgba(0, 0, 0, 3)" : "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    }
});