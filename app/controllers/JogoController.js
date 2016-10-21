import Jogo from '../models/Jogo';

import JogoView from '../views/JogoView';
import ChaoView from '../views/ChaoView';
import BlocoView from '../views/BlocoView';

export const ALTURA = window.innerWidth > 600 ? 600 : window.innerHeight;
export const LARGURA = window.innerWidth > 600 ? 600 : window.innerWidth;
// export const ALTURA = window.innerHeight;
// export const LARGURA = window.innerWidth;
export const GRAVIDADE = 1.5;

class JogoController {

  constructor() {
    this.canvas = this._criarCanvas();
    this.ctx = this.canvas.getContext('2d');

    this.jogo = new Jogo();

    this.jogoView = new JogoView(this.jogo, this.ctx);
    this.chaoView = new ChaoView(this.jogo.chao, this.ctx);
    this.blocoView = new BlocoView();

    this.frames = 0;
  }

  inicializar() {
    document.body.appendChild(this.canvas);
    this.jogo.inicializar();
    this._rodar();
  }

  _rodar() {
    this._atualizar();
    this.jogoView.desenharJogo();
    this.chaoView.desenharChao();
    this.blocoView.desenharBloco(this.ctx, this.jogo.bloco);

    window.requestAnimationFrame(() => this._rodar());
  }

  _atualizar() {
    this.frames++;
    this.jogo.atualizar();
  }

  _criarCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = LARGURA;
    canvas.height = ALTURA;
    canvas.style.border = '1px solid #000';

    return canvas;
  }

}

export default JogoController;
