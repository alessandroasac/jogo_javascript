import Obstaculo from './Obstaculo';

class Obstaculos {

  constructor() {
    this._obs = [];
    this.tempoInsere = 0;
  }

  _inserir() {
    this._obs.push( new Obstaculo() );
    this.tempoInsere = 30 + Math.floor(20 * Math.random());
  }

  atualizar() {

    if (this.tempoInsere == 0) {
      this._inserir();
    } else {
      this.tempoInsere--;
    }

    for (let i = this._obs.length - 1; i >= 0; i--) {
      let obs = this._obs[i];
      obs.atualizar();
      if (obs.sumiu) {
        this._obs.splice(i, 1);
      }
    }

  }

  desenhar(ctx, chao) {
    this._obs.forEach(obs => obs.desenhar(ctx, chao));
  }

  limpar() {
    this._obs = [];
  }

  colidiramCom(bloco, chao) {
    return this._obs.some(obs => obs.colidiuCom(bloco, chao));
  }
}

export default Obstaculos;
