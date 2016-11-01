class BlocoView {

  constructor(ctx, imagem) {
    this.ctx = ctx;
    this.imagem = imagem;
  }

  desenhar({ x, y, altura, largura }) {
    this.ctx.drawImage(this.imagem, 618, 16,
      altura, largura, x, y, altura, largura);
  }

}

export default BlocoView;
