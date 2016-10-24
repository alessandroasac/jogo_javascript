import { LARGURA } from '../controllers/JogoController';

class Obstaculo {

  constructor() {
    this.cores = ['#ffbc1c', '#ff1c1c', '#ff85e1', '#52a7ff', '#78ff5d'];
    this.velocidade = 6;

    this.x = LARGURA,
    this.largura = 30 + Math.floor(21 * Math.random()),
    this.altura = 30 + Math.floor(120 * Math.random()),
    this.cor = this.cores[Math.floor(5 * Math.random())]
  }

  atualizar() {
    this.x -= this.velocidade;
  }

  desenhar(ctx, chao) {
    ctx.fillStyle = this.cor;
    ctx.fillRect(this.x,
      chao.y - this.altura, this.largura, this.altura);
  }

  get sumiu() {
    return this.x <= -this.largura;
  }

  colidiuCom(bloco, chao) {
    return bloco.x < this.x + this.largura
      && bloco.x + bloco.largura >= this.x
      && bloco.y + bloco.altura >= chao.y - this.altura;
  }

}

export default Obstaculo;
