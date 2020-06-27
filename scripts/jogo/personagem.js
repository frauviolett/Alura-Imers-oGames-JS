class Personagem extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
   
    this.variacaoY = this.variacaoY;
    this.yInicial = height - altura - variacaoY;
      
    this.velocidadeDoPulo = 0;
    this.gravidade = 5;
    this.dash = 50;
     
    this.contarPulo = 0
      
    } 
  direita(){
    this.x = this.x + this.dash;
  }
  
  esquerda(){
    this.x = this.x - this.dash;
  }
  
  baixo(){
    if (this.y < this.yInicial){
      this.y = this.y + this.dash;
    }
  }
  
  pula(){
    if (this.contarPulo === 1 || this.contarPulo === 2){
      this.velocidadeDoPulo = -50;
      //somDoPulo.play();
      this.contarPulo++; 
    } 
  }
  
  aplicaQueda(){
    if (this.y == this.yInicial){
        if (this.contarPulo != 1 || this.contarPulo != 2){
        this.contarPulo = 1;
        }
    }
  }
  
  aplicaGravidade(){
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    if (this.y > this.yInicial){
      this.y = this.yInicial;
    }
  
  }
  
  estaColidindo(inimigo) {
  const precisao = 0.7;
  const colisao = collideRectRect(
  this.x,
  this.y,
  this.largura * precisao,
  this.altura * precisao,
  inimigo.x,
  inimigo.y,
  inimigo.largura * precisao,
  inimigo.altura* precisao
  )
  return colisao;
  }
}