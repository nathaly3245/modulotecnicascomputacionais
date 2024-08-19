const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Todos os lugares do mundo tem acesso a cuidados para a saúde?",
        alternativas: [
            {
                texto: "não.",
                afirmação: "pois em cidades pequenas normalmente tem menos acesso aos medicamentos e atendimentos necessários.",
                ""
            },
            {
                texto: "nao",
                afirmação: "a tribo entende que a reprodução é necessario e nao deve ser contida."
            }
        ]
    },
    {
        enunciado: "Usar roupas enfeitadas na festa junina é necessário?",

        alternativas: [
            {.
                texto: "sim",
                afirmacao: "Depende da festa e oque ela esta pedindo como traje."
            },
            {
                texto: "Em outras nao tanto.",
                afirmacao: "mas a maioria das  festas é sim necessário ir com roupas enfeitadas"

            }
        ]
    },
    {
        enunciado: "Todos os lixos recicláveis devem ser reciclados corretamente?",

        alternativas: [
            {
                texto: "sim",
                afirmacao: "para ter um meio ambiente mais limpo."
            },
            {
                texto: "para ter um meio ambiente melhor sim",
                afirmacao: "sem lixo acumulado."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

function aleatoria(lista){
    const posicao = Math.random()*lista.length;
}

mostraPergunta();


	



