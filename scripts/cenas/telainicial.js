class TelaInicial {
  constructor() {
  }

  draw() {
    this._fundo()
    this._botao()
  }

  _fundo() {
    image(imagemTelaInicial, 0, 0, width, height)
  }
  
  _botao() {
    botaoGerenciador.y = height / 7 * 4
    botaoGerenciador.draw()
  }  
}