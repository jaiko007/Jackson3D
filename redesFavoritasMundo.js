console.log('deu certo');
async function redesFavoritasMundo() {

}
async function redesFavoritasMundo() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
}

redesFavoritasMundo()
{Instagram: 16.5, WhatsApp: 16.1, Facebook: 12.8, WeChat: 12.8, TikTok: 7.4, _}
async function redesFavoritasMundo() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = Object.values(dados)
}
const data = [
    {
        values: valores,
        labels: redes,
        type: 'pie',
        textinfo: 'label+percent'
    }
]


redesFavoritasMundo()

import { getCSS } from "./common.js"

// código omitido
// código omitido

const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
        text: 'Redes sociais que os usuários mais gostam',
        x: 0,
        font: {
            color: getCSS('--primary-color'),
            family: getCSS('--font'),
            size: 30
        }
    },
    legend: {
        font: {
            color: getCSS('--primary-color'),
            size: 16
        }
    }
}
import { getCSS } from "./common.js"

async function redesFavoritasMundo() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Redes sociais que os usuários mais gostam',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        legend: {
            font: {
                color: getCSS('--primary-color'),
                size: 16
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

redesFavoritasMundo()
// código omitido

async function redesFavoritasMundo() {
    const layout = {
        legend: {
        
        }
    }

    criarGrafico(data, layout)
        
      incluirText('')
}

redesFavoritasMundo()
// código omitido

async function redesFavoritasMundo() {
    const layout = {
        legend: {
        
        }
    }

    criarGrafico(data, layout)
        
     incluirTexto(`Embora o <span>Instagram</span> ocupe a quarta posição de redes sociais com mais usuários no mundo, ela é a rede social que as pessoas mais gostam. Seguida de WhatsApp e Facebook.`)
}

redesFavoritasMundo()