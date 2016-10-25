class ObstaculosView {

  constructor(ctx) {
    this.ctx = ctx;
  }

  desenhar({ jogando, obstaculos }) {
    if (jogando) {
      obstaculos.obs.forEach(obs => this.desenharObstaculo(obs));
    }
  }

  desenharObstaculo({ x, y, altura, largura, cor }) {
    this.ctx.fillStyle = cor;
    this.ctx.fillRect(x, y, largura, altura);
  }

}

export default ObstaculosView;
