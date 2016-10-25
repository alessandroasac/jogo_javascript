import { LARGURA } from '../controllers/JogoController';

class ChaoView {

  constructor(ctx) {
    this.ctx = ctx;
  }

  desenhar({ chao }) {
    this.ctx.fillStyle = chao.cor;
    this.ctx.fillRect(0, chao.y, LARGURA, chao.altura);
  }

}

export default ChaoView;
