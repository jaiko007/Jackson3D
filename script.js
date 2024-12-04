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