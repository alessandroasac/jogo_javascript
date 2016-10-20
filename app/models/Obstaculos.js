import { LARGURA } from './Jogo';

class Obstaculos {

  constructor() {
    this._obs = [];
    this.cores = ['#ffbc1c', '#ff1c1c', '#ff85e1', '#52a7ff', '#78ff5d'];
    this.velocidade = 6;
    this.tempoInsere = 0;
  }

  _inserir() {
    this._obs.push({
      x: LARGURA,
      largura: 30 + Math.floor(21 * Math.random()),
      altura: 30 + Math.floor(120 * Math.random()),
      cor: this.cores[Math.floor(5 * Math.random())]
    });

    this.tempoInsere = 30 + Math.floor(20 * Math.random());
  }

  atualizar() {

    if (this.tempoInsere == 0) {
      this._inserir();
    } else {
      this.tempoInsere--;
    }

    for (let i = 0, tam = this._obs.length; i < tam; i++) {
      let obs = this._obs[i];

      obs.x -= this.velocidade;

      if (obs.x <= -obs.largura) {
        this._obs.splice(i, 1);
        tam--;
        i--;
      }
    }
  }

  desenhar(ctx, chao) {
    for (let i = 0; i < this._obs.length; i++) {
      let obs = this._obs[i];
      ctx.fillStyle = obs.cor;
      ctx.fillRect(obs.x, chao.y - obs.altura, obs.largura, obs.altura);
    }
  }
}

export default Obstaculos;
