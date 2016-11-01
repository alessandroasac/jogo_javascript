class ObstaculosView {

  constructor(ctx) {
    this.ctx = ctx;
  }

  desenhar({ obs }) {
    obs.forEach(obstaculo => this.desenharObstaculo(obstaculo));
  }

  desenharObstaculo({ x, y, altura, largura, cor }) {
    this.ctx.fillStyle = cor;
    this.ctx.fillRect(x, y, largura, altura);
  }

}

export default ObstaculosView;
