class SpriteView {

  constructor(ctx, imagem) {
    this.ctx = ctx;
    this.imagem = imagem;
  }

  desenhar(sprite, xCanvas, yCanvas) {
    this.ctx.drawImage(this.imagem, sprite.x, sprite.y, sprite.largura,
      sprite.altura, xCanvas, yCanvas, sprite.altura, sprite.largura);
  }

}

export default SpriteView;
