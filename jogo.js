'use strict';

const MAX_PULOS = 3;

// Variáveis do jogo
let canvas, ctx, ALTURA, LARGURA, frames = 0;

let chao = {
  y: 550,
  altura: 50,
  cor: '#ffdf70',

  desenhar: function() {
    ctx.fillStyle = this.cor;
    ctx.fillRect(0, this.y, LARGURA, this.altura);
  }
};

let bloco = {
  x: 50,
  y: 0,
  altura: 50,
  largura: 50,
  cor: '#ff4e4e',
  gravidade: 1.5,
  velocidade: 0,
  forcaDoPulo: 15,
  qntPulos: 0,

  atualizar: function() {
    this.velocidade += this.gravidade;
    this.y += this.velocidade;

    if (this.y > chao.y - this.altura) {
      this.y = chao.y - this.altura;
      this.qntPulos = 0;
    }
  },

  pular: function() {
    if (this.qntPulos < MAX_PULOS) {
      this.velocidade = -this.forcaDoPulo;
      this.qntPulos++;
    }
  },

  desenhar: function() {
    ctx.fillStyle = this.cor;
    ctx.fillRect(this.x, this.y, this.largura, this.altura);
  }
};

function clique(e) {
  bloco.pular();
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

  bloco.atualizar();
}

function desenhar() {
  ctx.fillStyle = '#50beff';
  ctx.fillRect(0, 0, LARGURA, ALTURA);

  chao.desenhar();
  bloco.desenhar();
}

// Inicializa o jogo
main();
