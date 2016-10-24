import Chao from './Chao';
import Bloco from './Bloco';
import Obstaculos from './Obstaculos';


class Jogo {

  constructor() {
    this.chao = new Chao();
    this.bloco = new Bloco();
    this.obstaculos = new Obstaculos();

    this.setarJogar();
  }

  clique() {
    if (this.jogando) {
      this.bloco.pular()
    } else if (this.jogar) {
      this.setarJogando();
    } else if (this.perdeu && this.bloco.sumiu) {
      this.setarJogar();
      this.bloco.y = 0;
      this.bloco.velocidade = 0;
    }
  }

  atualizar() {

    this.bloco.atualizar(this.chao, this.perdeu);

    if (this.jogando) {

      this.obstaculos.atualizar();

      if (this.obstaculos.colidiramCom(this.bloco, this.chao)) {
        this.setarPerdeu();
        this.obstaculos.limpar();
      }
    }
  }

  get jogar() {
    return this.estadoAtual === 0;
  }

  get jogando() {
    return this.estadoAtual === 1;
  }

  get perdeu() {
    return this.estadoAtual === 2;
  }

  setarJogar() {
    this.estadoAtual = 0;
  }

  setarJogando() {
    this.estadoAtual = 1;
  }

  setarPerdeu() {
    this.estadoAtual = 2;
  }

}

export default Jogo;
