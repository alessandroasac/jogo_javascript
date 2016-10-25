import Obstaculo from './Obstaculo';

class Obstaculos {

  constructor(chao, ctx) {
    this.obs = [];
    this.tempoInsere = 0;
    this.chao = chao;
    this.ctx = ctx;
  }

  inserir() {
    this.obs.push(new Obstaculo(this.chao, this.ctx));
    this.tempoInsere = 30 + Math.floor(20 * Math.random());
  }

  atualizar() {
    if (this.tempoInsere === 0) {
      this.inserir();
    } else {
      this.tempoInsere--;
    }

    for (let i = this.obs.length - 1; i >= 0; i--) {
      const obs = this.obs[i];
      obs.atualizar();
      if (obs.sumiu) {
        this.obs.splice(i, 1);
      }
    }
  }

  desenhar() {
    this.obs.forEach(obs => obs.desenhar());
  }

  limpar() {
    this.obs = [];
  }

  colidiramCom(bloco) {
    return this.obs.some(obs => obs.colidiuCom(bloco));
  }
}

export default Obstaculos;
