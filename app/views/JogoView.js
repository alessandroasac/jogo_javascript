import { LARGURA, ALTURA } from '../controllers/JogoController';

import { BlocoView, ChaoView, ObstaculosView } from '../views';

class JogoView {

  constructor(ctx, imagem) {
    this.ctx = ctx;
    this.imagem = imagem;

    this.blocoView = new BlocoView(ctx, imagem);
    this.chaoView = new ChaoView(ctx, imagem);
    this.obstaculosView = new ObstaculosView(ctx);
  }

  desenhar({ jogar, jogando, perdeu, score, novoRecord, record, bloco, chao, obstaculos }) {
    this.desenharCenario();

    this.ctx.fillStyle = '#fff';
    this.ctx.font = '50px Arial';
    this.ctx.fillText(score, 30, 68);

    if (jogar) {
      this.ctx.drawImage(this.imagem, 603, 127, 397, 347,
        (LARGURA / 2) - (397 / 2), (ALTURA / 2) - (347 / 2), 397, 347);
    } else if (perdeu) {
      this.ctx.drawImage(this.imagem, 603, 478, 397, 358,
        (LARGURA / 2) - (397 / 2), (ALTURA / 2) - (358 / 2) - (95 / 2), 397, 358);

      this.ctx.drawImage(this.imagem, 28, 879, 441, 95,
        (LARGURA / 2) - (441 / 2), ((ALTURA / 2) + (358 / 2)) - (95 / 2) - 25, 441, 95);

      this.desenharScore(score);
      this.desenharRecord(novoRecord, record);
    }

    this.chaoView.desenhar(chao);
    this.blocoView.desenhar(bloco);

    if (jogando) {
      this.obstaculosView.desenhar(obstaculos);
    }
  }

  desenharCenario() {
    this.ctx.drawImage(this.imagem, 0, 0,
      LARGURA, ALTURA, 0, 0, ALTURA, LARGURA);
  }

  desenharScore(score) {
    this.ctx.fillStyle = '#fff';
    this.ctx.fillText(score, 375, 390);
  }

  desenharRecord(novoRecord, record) {
    if (novoRecord) {
      this.ctx.drawImage(this.imagem, 68, 721, 287, 93,
        (LARGURA / 2) - 180, (ALTURA / 2) + 30, 287, 93);
    }
    this.ctx.fillText(record, 420, 470);
  }

}

export default JogoView;
