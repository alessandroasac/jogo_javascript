import { ALTURA, LARGURA, GRAVIDADE } from '../controllers/JogoController';

const MAX_PULOS = 3;

class Bloco {

  constructor() {
    this.x           = 50,
    this.y           = 0,
    this.altura      = 50,
    this.largura     = 50,
    this.cor         = '#ff9239',
    this.velocidade  = 0,
    this.forcaDoPulo = 23.6,
    this.qntPulos    = 0;

  }

  atualizar(chao, perdeu) {
    this.velocidade += GRAVIDADE;
    this.y += this.velocidade;

    if (this.y > chao.y - this.altura && !perdeu) {
      this.y = chao.y - this.altura;
      this.qntPulos = 0;
      this.velocidade = 0;
    }
  }

  pular() {
    if (this.qntPulos < MAX_PULOS) {
      this.velocidade = -this.forcaDoPulo;
      this.qntPulos++;
    }
  }

  sumiu() {
    return this.y >= 2 * ALTURA;
  }

}


export default Bloco;
