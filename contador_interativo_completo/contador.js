let contador = 0;

const valor = document.getElementById("valor");
const btnMais = document.getElementById("btn-mais");
const btnMenos = document.getElementById("btn-menos");
const btnReset = document.getElementById("btn-reset");

function atualizar() {
    valor.textContent = contador;

    if (contador > 0) {
        valor.classList.add("positivo");
    } else {
        valor.classList.remove("positivo");
    }
}

btnMais.addEventListener("click", () => {
    contador++;
    atualizar();
});

btnMenos.addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        atualizar();
    }
});

btnReset.addEventListener("click", () => {
    contador = 0;
    atualizar();
});