import { ALTURA, LARGURA } from './Jogo';

class Chao {

  constructor() {
    this.y = ALTURA - 50;
    this.altura = 50;
    this.cor = '#ffdf70';
  }

  desenhar(ctx) {
    ctx.fillStyle = this.cor;
    ctx.fillRect(0, this.y, LARGURA, this.altura);
  }
}

export default Chao;
