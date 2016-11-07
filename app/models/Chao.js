import { ALTURA, LARGURA } from '../controllers/JogoController';


const VELOCIDADE = 6;

class Chao {

  constructor() {
    this.y = ALTURA - 50;
    this.altura = 50;
    this.x = 0;
  }

  atualizar() {
    this.x -= VELOCIDADE;
    if (this.x <= -LARGURA) {
      this.x = 0;
    }
  }

}

export default Chao;
