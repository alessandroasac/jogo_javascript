import { GRAVIDADE, MAX_PULOS } from './Jogo';

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

  atualizar(chao) {
    this.velocidade += GRAVIDADE;
    this.y += this.velocidade;

    if (this.y > chao.y - this.altura) {
      this.y = chao.y - this.altura;
      this.qntPulos = 0;
    }
  }

  pular() {
    if (this.qntPulos < MAX_PULOS) {
      this.velocidade = -this.forcaDoPulo;
      this.qntPulos++;
    }
  }

  desenhar(ctx) {
    ctx.fillStyle = this.cor;
    ctx.fillRect(this.x, this.y, this.largura, this.altura);
  }
}


export default Bloco;
