import Chao from './Chao';
import Bloco from './Bloco';
import Obstaculos from './Obstaculos';


class Jogo {

  constructor(views) {
    this.chao = new Chao();
    this.bloco = new Bloco();
    this.obstaculos = new Obstaculos(this.chao);

    this.views = views;

    this.setarJogar();
  }

  clique() {
    if (this.jogando) {
      this.bloco.pular();
    } else if (this.jogar) {
      this.setarJogando();
    } else if (this.perdeu && this.bloco.sumiu) {
      this.setarJogar();
      this.obstaculos.limpar();
      this.bloco.resetar();
    }
  }

  atualizar() {
    this.bloco.atualizar(this);

    if (this.jogando) {
      const blocosRemovidos = this.obstaculos.atualizar();

      this.score += blocosRemovidos;

      if (this.obstaculos.colidiramCom(this.bloco)) {
        this.setarPerdeu();
      }
    }

    // Notificando às views que houve atualização
    this.views.forEach(view => view.desenhar(this));
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
    this.score = 0;
  }

  setarJogando() {
    this.estadoAtual = 1;
  }

  setarPerdeu() {
    this.estadoAtual = 2;
  }

}

export default Jogo;
