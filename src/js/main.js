// Seletores
const jogarBtn = document.getElementById('jogarBtn');
const resultadoDiv = document.getElementById('resultado');

// Event Listener
jogarBtn.addEventListener('click', () => {
    iniciarJogo();
});

// Lógica do jogo
function iniciarJogo() {
    const opcoes = ['BITCOIN', 'DÓLAR', 'REAL'];
    const escolhaUsuario = prompt("Escolha sua aposta:\n🪙 BITCOIN\n💵 DÓLAR\n🏦 REAL").toUpperCase();
    
    if (!opcoes.includes(escolhaUsuario)) {
        resultadoDiv.innerHTML = `<p class="erro">Escolha inválida!</p>`;
        return;
    }

    // Restante da lógica do jogo...
}