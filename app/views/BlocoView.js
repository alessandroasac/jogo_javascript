import { LARGURA } from '../controllers/JogoController';

class BlocoView {

  desenharBloco(ctx, bloco) {
    ctx.fillStyle = bloco.cor;
    ctx.fillRect(bloco.x, bloco.y, bloco.largura, bloco.altura);
  }

}

export default BlocoView;
