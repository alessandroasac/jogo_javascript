import { LARGURA } from '../controllers/JogoController';

class ChaoView {

  constructor(chao, ctx) {
    this.ctx = ctx;
    this.chao = chao;
  }

  desenharChao() {
    this.ctx.fillStyle = this.chao.cor;
    this.ctx.fillRect(0, this.chao.y, LARGURA, this.chao.altura);
  }

}

export default ChaoView;
