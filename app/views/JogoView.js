import { LARGURA, ALTURA } from '../controllers/JogoController';

class JogoView {

  constructor(ctx) {
    this.ctx = ctx;
  }

  desenhar({ jogar, perdeu }) {
    this.desenharCenario();

    if (jogar) {
      this.ctx.fillStyle = 'green';
      this.ctx.fillRect((LARGURA / 2) - 50, (ALTURA / 2) - 50, 100, 100);
    } else if (perdeu) {
      this.ctx.fillStyle = 'red';
      this.ctx.fillRect((LARGURA / 2) - 50, (ALTURA / 2) - 50, 100, 100);
    }
  }

  desenharCenario() {
    this.ctx.fillStyle = '#80daff';
    this.ctx.fillRect(0, 0, LARGURA, ALTURA);
  }

}

export default JogoView;
