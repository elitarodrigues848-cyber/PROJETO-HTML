let valorAtual = 0;
const btnIncremento = document.querySelector('#btn-mais');
const btnDecremento = document.querySelector('#btn-menos');
const btnReset = document.querySelector('#btn-reset');

btnIncremento.addEventListener('click', () => {
        valorAtual++;
        atualizaValor(valorAtual);
        atualizaMensagem('Valor incrementado com sucesso!');
    }
);

btnDecremento.addEventListener('click', () => {
    if(valorAtual > 0){
        valorAtual--;
        atualizaValor(valorAtual);
        atualizaMensagem('Valor decrementado com sucesso!');
    }
    else{ atualizaMensagem('Sistema não aceita valores negativos!'); }
});

btnReset.addEventListener('click', () => {
    valorAtual = 0;
    atualizaValor(valorAtual);
    atualizaMensagem('Valor resetado com sucesso!');
});

const atualizaValor = (valor) => {
    const display = document.querySelector('#valor');
    display.textContent = valor;
}
const atualizaMensagem = (msg) => {
    const mensagem = document.querySelector('#mensagem');
    mensagem.textContent = msg;
}