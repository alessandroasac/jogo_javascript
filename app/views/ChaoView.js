import { LARGURA } from '../controllers/JogoController';

class ChaoView {

  constructor(ctx, imagem) {
    this.ctx = ctx;
    // this.cor = '#ffdf70';
    this.imagem = imagem;
  }

  desenhar({ x, y, altura }) {
    this.ctx.drawImage(this.imagem, 0, 604,
      LARGURA, altura, x, y, LARGURA, altura);

    this.ctx.drawImage(this.imagem, 0, 604,
      LARGURA, altura, x + LARGURA, y, LARGURA, altura);
  }

}

export default ChaoView;
