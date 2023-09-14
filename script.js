function transferirItens() {
    const listaA = document.getElementById("listaA");
    const listaB = document.getElementById("listaB");
    const itensSelecionadosA = Array.from(listaA.querySelectorAll(".selecionado"));
    const itensSelecionadosB = Array.from(listaB.querySelectorAll(".selecionado"));

    itensSelecionadosA.forEach(item => {
        item.classList.remove("selecionado");
        item.dataset.lista = "B";
        listaB.appendChild(item);
    });

    itensSelecionadosB.forEach(item => {
        item.classList.remove("selecionado");
        item.dataset.lista = "A";
        listaA.appendChild(item);
    });
}

document.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("selecionado");
    }
});


