import { LARGURA, ALTURA } from '../controllers/JogoController';

class JogoView {

  constructor(ctx) {
    this.ctx = ctx;
  }

  desenhar({ jogar, perdeu, score, novoRecord, record }) {
    this.desenharCenario();

    this.ctx.fillStyle = '#fff';
    this.ctx.font = '50px Arial';
    this.ctx.fillText(score, 30, 68);

    if (jogar) {
      this.ctx.fillStyle = 'green';
      this.ctx.fillRect((LARGURA / 2) - 50, (ALTURA / 2) - 50, 100, 100);
    } else if (perdeu) {
      this.ctx.fillStyle = 'red';
      this.ctx.fillRect((LARGURA / 2) - 50, (ALTURA / 2) - 50, 100, 100);

      this.ctx.save();
      this.ctx.translate(LARGURA / 2, ALTURA / 2);
      this.ctx.fillStyle = '#fff';
      this.desenharScore(score);
      this.desenharRecord(novoRecord, record);
      this.ctx.restore();
    }
  }

  desenharCenario() {
    this.ctx.fillStyle = '#80daff';
    this.ctx.fillRect(0, 0, LARGURA, ALTURA);
  }

  desenharScore(score) {
    let x = -39;
    if (score < 10) {
      x = -13;
    } else if (score < 100) {
      x = -26;
    }

    this.ctx.fillText(score, x, 19);
  }

  desenharRecord(novoRecord, record) {
    if (novoRecord) {
      this.ctx.fillText('Novo Record!', -150, -65);
    } else {
      let x = -125;
      if (record < 10) {
        x = -99;
      } else if (record < 100) {
        x = -112;
      }

      this.ctx.fillText(`Record ${record}`, x, -65);
    }
  }

}

export default JogoView;
