import Jogo from '../models/Jogo';

import JogoView from '../views/JogoView';
import ChaoView from '../views/ChaoView';
import BlocoView from '../views/BlocoView';
import ObstaculosView from '../views/ObstaculosView';

export const ALTURA = window.innerWidth > 600 ? 600 : window.innerHeight;
export const LARGURA = window.innerWidth > 600 ? 600 : window.innerWidth;
// export const ALTURA = window.innerHeight;
// export const LARGURA = window.innerWidth;

class JogoController {

  constructor() {
    this.canvas = JogoController.criarCanvas();
    this.ctx = this.canvas.getContext('2d');

    const record = localStorage.getItem('record') || 0;

    const views = [
      new JogoView(this.ctx),
      new ChaoView(this.ctx),
      new BlocoView(this.ctx),
      new ObstaculosView(this.ctx),
    ];

    this.jogo = new Jogo(record, views);
  }

  inicializar() {
    document.body.appendChild(this.canvas);
    document.addEventListener('mousedown', () => {
      this.persistirNovoRecord();
      this.jogo.clique();
    });
    this.rodar();
  }

  persistirNovoRecord() {
    if (this.jogo.novoRecord) {
      localStorage.setItem('record', this.jogo.record);
    }
  }

  rodar() {
    this.atualizar();
    window.requestAnimationFrame(() => this.rodar());
  }

  atualizar() {
    this.jogo.atualizar();
  }

  static criarCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = LARGURA;
    canvas.height = ALTURA;
    canvas.style.border = '1px solid #000';
    return canvas;
  }

}

export default JogoController;
