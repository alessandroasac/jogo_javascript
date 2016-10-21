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

  inicializar() {
    document.addEventListener('mousedown', () => {
      if (this.jogando()) {
        this.bloco.pular()
      } else if (this.jogar()) {
        this.setarJogando();
      } else if (this.perdeu() && this.bloco.sumiu()) {
        this.setarJogar();
        this.bloco.y = 0;
        this.bloco.velocidade = 0;
      }
    });
  }

  atualizar() {

    this.bloco.atualizar(this.chao, this.perdeu());

    if (this.jogando()) {

      this.obstaculos.atualizar();

      for (let i = 0, tam = this.obstaculos._obs.length; i < tam; i++) {
        let obs = this.obstaculos._obs[i];
        if (this.bloco.x < obs.x + obs.largura
          && this.bloco.x + this.bloco.largura >= obs.x
          && this.bloco.y + this.bloco.altura >= this.chao.y - obs.altura) {
          this.setarPerdeu();
          this.obstaculos.limpar();
          break;
        }
      }
    }
  }

  jogar() {
    return this.estadoAtual === 0;
  }

  jogando() {
    return this.estadoAtual === 1;
  }

  perdeu() {
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
