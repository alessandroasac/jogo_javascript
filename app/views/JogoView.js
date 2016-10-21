import { LARGURA, ALTURA } from '../controllers/JogoController';

class JogoView {

  constructor(jogo, ctx) {
    this.ctx = ctx;
    this.jogo = jogo;
  }

  desenharJogo() {

    this._desenharCenario()

    if (this.jogo.jogar()) {
      this.ctx.fillStyle = 'green';
      this.ctx.fillRect((LARGURA / 2) - 50, (ALTURA / 2) - 50, 100, 100);
    } else if (this.jogo.perdeu()) {
      this.ctx.fillStyle = 'red';
      this.ctx.fillRect((LARGURA / 2) - 50, (ALTURA / 2) - 50, 100, 100);
    } else if (this.jogo.jogando()) {
      this.jogo.obstaculos.desenhar(this.ctx, this.jogo.chao);
    }
  }

  _desenharCenario() {
    this.ctx.fillStyle = '#80daff';
    this.ctx.fillRect(0, 0, LARGURA, ALTURA);
  }

  _desenharChao() {
    this.ctx.fillStyle = this.cor;
    this.ctx.fillRect(0, this.y, LARGURA, this.altura);
  }

}

export default JogoView;
