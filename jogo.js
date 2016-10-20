'use strict';

const MAX_PULOS = 3;
const ALTURA = window.innerWidth > 600 ? 600 : window.innerHeight;
const LARGURA = window.innerWidth > 600 ? 600 : window.innerWidth;
// const ALTURA = window.innerHeight;
// const LARGURA = window.innerWidth;
const GRAVIDADE = 1.5;

class Chao {

  constructor() {
    this.y = ALTURA - 50;
    this.altura = 50;
    this.cor = '#ffdf70';
  }

  desenhar(ctx) {
    ctx.fillStyle = this.cor;
    ctx.fillRect(0, this.y, LARGURA, this.altura);
  }
}

class Bloco {

  constructor() {
    this.x           = 50,
    this.y           = 0,
    this.altura      = 50,
    this.largura     = 50,
    this.cor         = '#ff9239',
    this.velocidade  = 0,
    this.forcaDoPulo = 23.6,
    this.qntPulos    = 0;

  }

  atualizar(chao) {
    this.velocidade += GRAVIDADE;
    this.y += this.velocidade;

    if (this.y > chao.y - this.altura) {
      this.y = chao.y - this.altura;
      this.qntPulos = 0;
    }
  }

  pular() {
    if (this.qntPulos < MAX_PULOS) {
      this.velocidade = -this.forcaDoPulo;
      this.qntPulos++;
    }
  }

  desenhar(ctx) {
    ctx.fillStyle = this.cor;
    ctx.fillRect(this.x, this.y, this.largura, this.altura);
  }
}

class Obstaculos {

  constructor() {
    this._obs = [];
    this.cores = ['#ffbc1c', '#ff1c1c', '#ff85e1', '#52a7ff', '#78ff5d'];
    this.velocidade = 6;
    this.tempoInsere = 0;
  }

  _inserir() {
    this._obs.push({
      x: LARGURA,
      largura: 30 + Math.floor(21 * Math.random()),
      altura: 30 + Math.floor(120 * Math.random()),
      cor: this.cores[Math.floor(5 * Math.random())]
    });

    this.tempoInsere = 30 + Math.floor(20 * Math.random());
  }

  atualizar() {

    if (this.tempoInsere == 0) {
      this._inserir();
    } else {
      this.tempoInsere--;
    }

    for (let i = 0, tam = this._obs.length; i < tam; i++) {
      let obs = this._obs[i];

      obs.x -= this.velocidade;

      if (obs.x <= -obs.largura) {
        this._obs.splice(i, 1);
        tam--;
        i--;
      }
    }
  }

  desenhar(ctx, chao) {
    for (let i = 0; i < this._obs.length; i++) {
      let obs = this._obs[i];
      ctx.fillStyle = obs.cor;
      ctx.fillRect(obs.x, chao.y - obs.altura, obs.largura, obs.altura);
    }
  }
}

class Jogo {

  constructor() {
    this.chao = new Chao();
    this.bloco = new Bloco();
    this.obstaculos = new Obstaculos();
    this.canvas = this._criarCanvas();
    this.ctx = this.canvas.getContext('2d');
    this.frames = 0;
  }

  inicializar() {
    document.body.appendChild(this.canvas);
    document.addEventListener('mousedown', () => this.bloco.pular());
    this._rodar();
  }

  _rodar() {
    this._atualizar(this.bloco);
    this._desenhar(this.bloco, this.ctx, this.chao);

    window.requestAnimationFrame(() => this._rodar(this.bloco, this.ctx, this.chao));
  }

  _atualizar() {
    this.frames++;

    this.bloco.atualizar(this.chao);
    this.obstaculos.atualizar();
  }

  _desenhar() {
    this.ctx.fillStyle = '#80daff';
    this.ctx.fillRect(0, 0, LARGURA, ALTURA);

    this.chao.desenhar(this.ctx);
    this.obstaculos.desenhar(this.ctx, this.chao);
    this.bloco.desenhar(this.ctx);
  }

  _criarCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = LARGURA;
    canvas.height = ALTURA;
    canvas.style.border = '1px solid #000';

    return canvas;
  }

}

new Jogo().inicializar();
