document.addEventListener('DOMContentLoaded', () => {
    const jogarBtn = document.getElementById('jogarBtn');
    const resultadoDiv = document.getElementById('resultado');

    jogarBtn.addEventListener('click', jogar);
});

function jogar() {
    const opcoes = ['BITCOIN', 'DÓLAR', 'REAL'];
    const escolhaUsuario = prompt("Escolha sua aposta:\n🪙 BITCOIN\n💵 DÓLAR\n🏦 REAL").toUpperCase();
    
    if (!escolhaUsuario || !opcoes.includes(escolhaUsuario)) {
        mostrarResultado("Escolha inválida! Por favor, selecione BITCOIN, DÓLAR ou REAL.", "erro");
        return;
    }

    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
    const resultado = calcularResultado(escolhaUsuario, escolhaComputador);
    
    mostrarResultado(`
        <p>Sua aposta: ${escolhaUsuario} ${getEmoji(escolhaUsuario)}</p>
        <p>Mercado: ${escolhaComputador} ${getEmoji(escolhaComputador)}</p>
        <h2>${resultado.mensagem}</h2>
        ${resultado.ganhou ? '<div class="bitcoin-reward">⛏️ Minerando seu BTC...</div>' : ''}
    `);

    if (resultado.ganhou) {
        setTimeout(() => {
            const bitcoinGanho = (Math.random() * 0.01).toFixed(8);
            document.querySelector('.bitcoin-reward').innerHTML = `
                🎉 Você minerou <strong>${bitcoinGanho} BTC</strong>!
                <small>(1 BTC = R$469.670,00)</small>
            `;
        }, 1500);
    }
}

function calcularResultado(usuario, computador) {
    if (usuario === computador) {
        return { mensagem: "EMPATE! Nada mudou...", ganhou: false };
    }
    
    const regras = {
        'BITCOIN': ['DÓLAR'],
        'DÓLAR': ['REAL'],
        'REAL': ['BITCOIN']
    };

    return regras[usuario].includes(computador)
        ? { mensagem: "VOCÊ GANHOU! 🎉", ganhou: true }
        : { mensagem: "Você perdeu... 😢", ganhou: false };
}

function mostrarResultado(conteudo, tipo = "") {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<div class="resultado ${tipo}">${conteudo}</div>`;
    resultadoDiv.style.display = 'block';
}

function getEmoji(escolha) {
    const emojis = {
        'BITCOIN': '🪙',
        'DÓLAR': '💵',
        'REAL': '🏦'
    };
    return emojis[escolha] || '';
}