import Chao from './Chao';
import Bloco from './Bloco';
import Obstaculos from './Obstaculos';

export const MAX_PULOS = 3;
export const ALTURA = window.innerWidth > 600 ? 600 : window.innerHeight;
export const LARGURA = window.innerWidth > 600 ? 600 : window.innerWidth;
// export const ALTURA = window.innerHeight;
// export const LARGURA = window.innerWidth;
export const GRAVIDADE = 1.5;


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

export default Jogo;
