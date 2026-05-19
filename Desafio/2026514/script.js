let valorAtual = 0;

const btnIncremento = document.querySelector('#btn-mais');
const btnIncremento10 = document.querySelector('#btn-mais10');

const btnDecremento = document.querySelector('#btn-menos');
const btnDecremento10 = document.querySelector('#btn-menos10');

const btnReset = document.querySelector('#btn-reset');

btnIncremento.addEventListener('click', () => {
    valorAtual++;
    atualizaValor(valorAtual);
    atualizaMensagem('Valor incrementado com sucesso!');
});

btnIncremento10.addEventListener('click', () => {
    valorAtual += 10;
    atualizaValor(valorAtual);
    atualizaMensagem('Valor aumentado em +10!');
});

btnDecremento.addEventListener('click', () => {
    if(valorAtual > 0){
        valorAtual--;
        atualizaValor(valorAtual);
        atualizaMensagem('Valor decrementado com sucesso!');
    }
    else{
        atualizaMensagem('Sistema não aceita valores negativos!');
    }
});

btnDecremento10.addEventListener('click', () => {
    if(valorAtual >= 10){
        valorAtual -= 10;
        atualizaValor(valorAtual);
        atualizaMensagem('Valor diminuído em -10!');
    }
    else{
        atualizaMensagem('Não é possível diminuir 10!');
    }
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