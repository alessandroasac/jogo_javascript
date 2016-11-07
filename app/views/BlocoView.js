const VELOCIDADE = 6;

class BlocoView {

  constructor(ctx, imagem) {
    this.ctx = ctx;
    this.imagem = imagem;
    this.rotacao = 0;
  }

  desenhar({ x, y, altura, largura }) {
    this.rotacao += (Math.PI / 180) * VELOCIDADE;

    this.ctx.save();

    this.ctx.translate(x + (largura / 2), y + (altura / 2));
    this.ctx.rotate(this.rotacao);

    this.ctx.drawImage(this.imagem, 618, 16,
      largura, altura, -largura / 2, -altura / 2, largura, altura);

    this.ctx.restore();
  }

}

export default BlocoView;
