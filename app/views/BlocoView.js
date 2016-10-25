class BlocoView {

  constructor(ctx) {
    this.ctx = ctx;
  }

  desenhar({ bloco }) {
    this.ctx.fillStyle = bloco.cor;
    this.ctx.fillRect(bloco.x, bloco.y, bloco.largura, bloco.altura);
  }

}

export default BlocoView;
