const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }           
            
        ]
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: [
                    "No início ficou com medo do que essa tecnologia pode fazer.",
                    "Achou assustador pensar na velocidade na qual a tecnologia está avançando."
                ]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "Quis saber como usar IA no seu dia a dia.",
                    "Pensou que IA pode ajudar em tarefas da sua vida."
                ]
            }
        ]
        function aleatorio (lista){
            const posicao = Math.floor(Math.random()* lista.length);
            return lista[posicao];
    }
    function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
}
export const perguntas = [
    // Trecho de código suprimido
    ]
    export function aleatorio (lista){
        // Trecho de código suprimido
        }
        import {aleatorio} from './aleatorio.js';
        import {perguntas} from './perguntas.js';
        <!-- Trecho de código suprimido -->

<script type="module" src="js/aleatorio.js"></script>
<script type="module" src="js/perguntas.js"></script>
<script type="module" src="js/script.js"></script>
const botaoJogarNovamente = document.querySelector(".novamente-btn");
function jogaNovamente(){
    atual = 0;
    historiaFinal = "";
    mostraPergunta();
}
function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    botaoJogarNovamente.addEventListener("click", jogaNovamente());
}
function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add("mostrar");
    botaoJogarNovamente.addEventListener("click", jogaNovamente());
}
function jogaNovamente(){
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}
function mostraResultado() {
    //código da função omitido
        botaoJogarNovamente.addEventListener("click", jogaNovamente);
    }
    import {aleatorio, nome} from './aleatorio.js';
    caixaPerguntas.textContent = `Em 2049, ${nome}`;
    function substituiNome(){
        for(const pergunta of perguntas){
            pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
        }
    }
    substituiNome();
    export const perguntas = [
        {
            enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
            alternativas: [
                {
                    texto: "Isso é assustador!",
                    afirmacao: [
                        "No início ficou com medo do que essa tecnologia pode fazer.",
                        "Achou assustador pensar na velocidade na qual a tecnologia está avançando."
                    ],
                    proxima: 1,
                },
                {
                    texto: "Isso é maravilhoso!",
                    afirmacao: [
                        "Quis saber como usar IA no seu dia a dia.",
                        "Pensou que IA pode ajudar em tarefas da sua vida."
                    ],
                    proxima: 2,
                },
            ]
        },
        {
            enunciado: "Utilizar uma IA pode ser aterrorizante mesmo, e foi pensando nisso que uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
            alternativas: [
                {
                    texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                    afirmacao: [
                        "Conseguiu utilizar a IA para buscar informações úteis.",
                        "Percebeu que a IA pode ajudar a encontrar informações úteis na internet de forma mais rápida e direcionada.",
                        "Percebeu que a IA consegue explicar termos complicados de forma simplificada e isso ajudou muito suas pesquisas sobre assuntos complexos."
                                            
    // código omitido
    function respostaSelecionada(opcaoSelecionada) {
        const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
        historiaFinal += afirmacoes + " ";
            atual++;
        if(opcaoSelecionada.proxima !== undefined){
            atual = opcaoSelecionada.proxima;
        }else{
            mostraResultado();
            return;
        }
        mostraPergunta();
    }
    function respostaSelecionada(opcaoSelecionada) {
        const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
        historiaFinal += afirmacoes + " ";
        if(opcaoSelecionada.proxima !== undefined){
            atual = opcaoSelecionada.proxima;
        }else{
            mostraResultado();
            return;
        }
        mostraPergunta();
    }
    const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");
botaoIniciar.addEventListener('click', iniciaJogo);
function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}
]substituiNome();
// removemos o mostraPergunta();