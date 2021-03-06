function preload() {
    imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');

    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
    imagemVida = loadImage('imagens/assets/heart.png');
    somDoJogo = loadSound('sons/trilha_jogo.mp3');
    somDoPulo = loadSound('sons/somPulo.mp3');
    fita = loadJSON('fita/fita.json');
}