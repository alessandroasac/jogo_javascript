import { LARGURA, ALTURA } from '../controllers/JogoController';

class JogoView {

  constructor(ctx) {
    this.ctx = ctx;
  }

  desenhar({ jogar, perdeu, score }) {
    this.desenharCenario();

    if (jogar) {
      this.ctx.fillStyle = 'green';
      this.ctx.fillRect((LARGURA / 2) - 50, (ALTURA / 2) - 50, 100, 100);
    } else if (perdeu) {
      this.ctx.fillStyle = 'red';
      this.ctx.fillRect((LARGURA / 2) - 50, (ALTURA / 2) - 50, 100, 100);

      this.desenharScore(score);
    }
  }

  desenharCenario() {
    this.ctx.fillStyle = '#80daff';
    this.ctx.fillRect(0, 0, LARGURA, ALTURA);
  }

  desenharScore(score) {
    this.ctx.fillStyle = '#fff';
    this.ctx.font = '50px Arial';
    this.ctx.fillText(score, 30, 68);

    this.ctx.save();
    this.ctx.translate(LARGURA / 2, ALTURA / 2);
    this.ctx.fillStyle = '#fff';

    let x = -39;
    if (score < 10) {
      x = -13;
    } else if (score < 100) {
      x = -26;
      this.ctx.fillText(score, x, 19);
    }
    this.ctx.restore();
  }

}

export default JogoView;
