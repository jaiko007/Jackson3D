const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {

}
async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
}

vizualizarInformacoesGlobais()
{
    paragrafo.classList.add('graficos-container__texto')
   paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas.`
    console.log(paragrafo)
  }
  
  <p class="graficos-container_texto">
Você sabia que o mundo tem 7888000000 de pessoas e que aproximadamente 5040000000 estão conectadas em alguma rede social e passam em média 2.38 horas conectadas."
</p>
// código omitido

const container = document.getElementById('graficos-container')
container.appendChild(paragrafo)