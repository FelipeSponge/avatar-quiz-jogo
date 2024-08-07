document.querySelector('.principal__botoes').style.display = 'none';
document.querySelector('.principal__final').style.display = 'none';
document.getElementById('img1').style.display = 'none';
document.getElementById('img2').style.display = 'none';

const perguntas = [];
let perguntaIndex;
let numeroPagina = 1;
let acertos = 0;
let pgtsAcertadas = [];
let pgtsErradas = [];

const pergunta1 = perguntaResposta(
    'Qual a ultima dobra mostrada na abertura?',
    'Fogo',
    'Ar',
    'Terra',
    'Agua',
    'Ar',
);
const pergunta2 = perguntaResposta(
    'Com quantos anos Aang morreu?',
    '141',
    '152',
    '166',
    '66',
    '166',
);
const pergunta3 = perguntaResposta(
    'Qual foi o avatar que viveu mais tempo?',
    'Aang',
    'Wan',
    'Roku',
    'Kioshi',
    'Kioshi',
);
const pergunta4 = perguntaResposta(
    'Qual o nome da mãe do Zuko ?',
    'Rina',
    'Kyoko',
    'Kiyi',
    'Ursa',
    'Ursa',
);
const pergunta5 = perguntaResposta(
    'Qual era o nome do pai de Katara?',
    'Ryota',
    'Yusuke',
    'Kazuki',
    'Hakoda',
    'Hakoda',
);
const pergunta6 = perguntaResposta(
    'Qual é a ordem do Ciclo Avatar?',
    'Fogo, Terra, Água e Ar.',
    'Terra, Fogo, Água e Ár.',
    'Ar, Terra, Água e Fogo.',
    'Fogo, Ar, Água e Terra.',
    'Fogo, Ar, Água e Terra.',
);
const pergunta7 = perguntaResposta(
    'Quem são os únicos capazes de dominar raios na série?',
    'Azula, Ozai, Zuko e Iroh.',
    'Azula, Ozai e Iroh.',
    'Azula, Ozai, Zuko, Iroh e Aang.',
    'Apenas Azula.',
    'Azula, Ozai e Iroh.',
);

perguntas.push(pergunta1[1]);
perguntas.push(pergunta2[1]);
perguntas.push(pergunta3[1]);
perguntas.push(pergunta4[1]);
perguntas.push(pergunta5[1]);
perguntas.push(pergunta6[1]);
perguntas.push(pergunta7[1]);

function exibirConteudo([pergunta, op1, op2, op3, op4]) {
    let pergunta2 = document.querySelector('.principal__pergunta');
    let opcao1 = document.getElementById('btn1');
    let opcao2 = document.getElementById('btn2');
    let opcao3 = document.getElementById('btn3');
    let opcao4 = document.getElementById('btn4');
    pergunta2.innerHTML = pergunta;
    opcao1.innerHTML = op1;
    opcao2.innerHTML = op2;
    opcao3.innerHTML = op3;
    opcao4.innerHTML = op4;
}

function gerarPergunta(pgt, op1, op2, op3, op4) {
    let pergunta = pgt;
    let opcao1 = op1;
    let opcao2 = op2;
    let opcao3 = op3;
    let opcao4 = op4;
    return [pergunta, opcao1, opcao2, opcao3, opcao4];
}

function perguntaResposta(pgt, op1, op2, op3, op4, resp) {
    const pergunta = gerarPergunta(pgt, op1, op2, op3, op4);
    const resposta = resp;
    return [pergunta, resposta];
}

function escolhaJogador(escolha) {
    const valorEscolha = escolha.innerText;
    const i = perguntaIndex;
    const verificar = verificarResposta(valorEscolha, perguntas[i]);
    rodarJogo(proximaPagina());

    return verificar;
}

function verificarResposta(tentativa, resp) {
    if (tentativa == resp) {
        acertos++;
        pgtsAcertadas.push(tentativa);
        return true;
    } else {
        pgtsErradas.push(tentativa);
        return false;
    }
}

function mudarEstilo(obj, cor) {
    obj.style.backgroundColor = cor;
}

function iniciarJogo() {
    document.querySelector('.principal__botoes').style.display = '';
    document.querySelector('.principal__inicio').style.display = 'none';
    document.querySelector('.principal__imagem').style.display = 'none';

    pgtsAcertadas = [];
    pgtsErradas = [];
}

function reiniciarJogo() {
    document.querySelector('.principal__inicio').style.display = '';
    document.querySelector('.principal__imagem').style.display = '';
    document.querySelector('.principal__botoes').style.display = 'none';
    document.querySelector('.principal__final').style.display = 'none';
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img2').style.display = 'none';

    numeroPagina = 0;
    acertos = 0;
    rodarJogo(proximaPagina());
}

function telaFinal() {
    document.querySelector('.principal__imagem').style.display = 'none';
    document.querySelector('.principal__botoes').style.display = 'none';
    document.querySelector('.principal__final').style.display = '';

    let acrts = document.querySelector('.acertos');
    acrts.innerHTML = acertos;
    let expAcertos = document.querySelector('.exp__acertos');
    expAcertos.innerHTML = pgtsAcertadas;

    let errs = document.querySelector('.erros');
    let soma = 7 - acertos;
    errs.innerHTML = soma;
    let expErros = document.querySelector('.exp__erros');
    expErros.innerHTML = pgtsErradas;

    if (acertos > 3) {
        document.querySelector('#img1').style.display = '';
    } else {
        document.querySelector('#img2').style.display = '';
    }
}

function pagina(id) {
    switch (id) {
        case 1:
            perguntaIndex = 0;
            exibirConteudo(pergunta1[0]);
            break;
        case 2:
            perguntaIndex = 1;
            exibirConteudo(pergunta2[0]);
            break;
        case 3:
            perguntaIndex = 2;
            exibirConteudo(pergunta3[0]);
            break;
        case 4:
            perguntaIndex = 3;
            exibirConteudo(pergunta4[0]);
            break;
        case 5:
            perguntaIndex = 4;
            exibirConteudo(pergunta5[0]);
            break;
        case 6:
            perguntaIndex = 5;
            exibirConteudo(pergunta6[0]);
            break;
        case 7:
            perguntaIndex = 6;
            exibirConteudo(pergunta7[0]);
            break;
        case 8:
            telaFinal();
    }
}

function proximaPagina() {
    numeroPagina++;
    return numeroPagina;
}

function rodarJogo(numeroPagina) {
    pagina(numeroPagina);
}

rodarJogo(numeroPagina);
