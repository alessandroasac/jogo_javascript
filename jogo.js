// Variáveis do jogo
var canvas, ctx, ALTURA, LARGURA, frames = 0;

function clique(e) {
  alert('Clicou!');
}

function main() {
  ALTURA = window.innerHeight;
  LARGURA = window.innerWidth;

  if (LARGURA > 600) {
    LARGURA = 600;
    ALTURA = 600;
  }

  canvas = document.createElement('canvas');
  canvas.width = LARGURA;
  canvas.height = ALTURA;
  canvas.style.border = '1px solid #000';

  ctx = canvas.getContext('2d');
  document.body.appendChild(canvas);
  document.addEventListener('mousedown', clique);

  rodar();
}

function rodar() {
  atualizar();
  desenhar();

  window.requestAnimationFrame(rodar);
}

function atualizar() {
  frames++;
}

function desenhar() {
  ctx.fillStyle = '#50beff';
  ctx.fillRect(0, 0, LARGURA, ALTURA);
}

// Inicializa o jogo
main();
