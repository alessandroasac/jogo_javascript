class BlocoView {

  constructor(ctx, imagem) {
    this.ctx = ctx;
    this.imagem = imagem;
  }

  desenhar({ x, y, altura, largura }) {
    this.ctx.drawImage(this.imagem, 618, 16,
      largura, altura, x, y, largura, altura);
  }

}

export default BlocoView;
