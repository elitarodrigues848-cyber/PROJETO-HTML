/* contador.js */

// Passo 1 — variável que muda
let contador = 0;

// Passo 4 — selecionar elementos
const display  = document.querySelector('#valor');
const btnMais  = document.querySelector('#btn-mais');
const btnMenos = document.querySelector('#btn-menos');
const btnReset = document.querySelector('#btn-reset');

// Passo 5 — eventos
btnMais.addEventListener('click', () => {
  contador++;                          // Passo 1
  display.textContent = contador;      // Passo 4

  // Passo 3 — condicional para cor
  if (contador > 0) {
    display.classList.add('positivo');
  }
});

btnMenos.addEventListener('click', () => {
  if (contador > 0) { contador--; }  // não vai negativo
  display.textContent = contador;
  if (contador === 0) {
    display.classList.remove('positivo');
  }
});

btnReset.addEventListener('click', () => {
  contador = 0;
  display.textContent = 0;
  display.classList.remove('positivo');
});