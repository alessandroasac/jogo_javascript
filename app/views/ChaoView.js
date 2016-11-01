import { LARGURA } from '../controllers/JogoController';

class ChaoView {

  constructor(ctx) {
    this.ctx = ctx;
    this.cor = '#ffdf70';
  }

  desenhar({ y, altura }) {
    this.ctx.fillStyle = this.cor;
    this.ctx.fillRect(0, y, LARGURA, altura);
  }

}

export default ChaoView;
