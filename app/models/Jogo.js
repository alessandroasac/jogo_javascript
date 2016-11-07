import { Chao, Bloco, Obstaculos } from '.';


class Jogo {

  constructor(record, jogoView) {
    this.chao = new Chao();
    this.bloco = new Bloco();
    this.obstaculos = new Obstaculos(this.chao);

    this.jogoView = jogoView;

    this.setarJogar();

    this.record = record;
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
    this.chao.atualizar();
    this.bloco.atualizar(this);

    if (this.jogando) {
      const blocosRemovidos = this.obstaculos.atualizar();

      this.score += blocosRemovidos;

      if (this.obstaculos.colidiramCom(this.bloco)) {
        this.setarPerdeu();
        this.atualizarRecord();
      }
    }

    // Notificando à view que houve atualização
    this.jogoView.desenhar(this);
  }

  atualizarRecord() {
    if (this.score > this.record) {
      this.record = this.score;
      this.novoRecord = true;
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
    this.score = 0;
    this.novoRecord = false;
  }

  setarJogando() {
    this.estadoAtual = 1;
  }

  setarPerdeu() {
    this.estadoAtual = 2;
  }

}

export default Jogo;
