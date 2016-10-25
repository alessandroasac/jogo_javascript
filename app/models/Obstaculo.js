import { LARGURA } from '../controllers/JogoController';

class Obstaculo {

  constructor(chao) {
    this.cores = ['#ffbc1c', '#ff1c1c', '#ff85e1', '#52a7ff', '#78ff5d'];
    this.velocidade = 6;

    this.x = LARGURA;
    this.largura = 30 + Math.floor(21 * Math.random());
    this.altura = 30 + Math.floor(120 * Math.random());
    this.cor = this.cores[Math.floor(5 * Math.random())];
    this.y = chao.y - this.altura;
  }

  atualizar() {
    this.x -= this.velocidade;
  }

  get visivel() {
    return this.x > -this.largura;
  }

  colidiuCom({ x, y, altura, largura }) {
    return x < this.x + this.largura
      && x + largura >= this.x
      && y + altura >= this.y;
  }

}

export default Obstaculo;
