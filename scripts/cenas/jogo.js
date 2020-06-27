class Jogo {
  constructor() {
    this.inimigoAtual = 0
  }
  setup() {
    cenario1 = new Cenario(imagemCenario1, 3);
    cenario2 = new Cenario(imagemCenario2, 3);
    cenario3 = new Cenario(imagemCenario3, 1);
    cenario4 = new Cenario(imagemCenario4, 1);
    cenario5 = new Cenario(imagemCenario5, 3);
    cenario6 = new Cenario(imagemCenario6, 7);
    cenario7 = new Cenario(imagemCenario7, 7);

    cenarios.push(cenario1, cenario2, cenario3, cenario4, cenario5, cenario6, cenario7);
    
    pontos = new Pontos()

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 150, 165, 220, 270);

    /*** Inimigos ***/

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 70, 70, 104, 104, 10, 100);
    const inimigo2 = new Inimigo(matrizInimigo2, imagemInimigo2, width, 0, 200, 200, 400, 400, 10, 100);
    const inimigo3 = new Inimigo(matrizInimigo3, imagemInimigo3, width - 52, 200, 100, 75, 200, 150, 10, 100);

    inimigos.push(inimigo)
    inimigos.push(inimigo2)
    inimigos.push(inimigo3)

  }
 
  draw() {
  cenarios.map(function(cenario) {
      cenario.exibe();
      cenario.move();
    });
  
  personagem.exibe();
  personagem.aplicaGravidade();
  personagem.aplicaQueda();
  
  pontos.exibe();
  pontos.adicionarPonto();
   
  const inimigo = inimigos[this.inimigoAtual]
  const inimigoVisivel = inimigo.x < -inimigo.largura
    inimigo.exibe();
    inimigo.move();
 
    if(inimigoVisivel) {
      this.inimigoAtual++
      if(this.inimigoAtual > 2) {
        this.inimigoAtual = 0
      }   
     //inimigo.alteraVelocidade(parseInt(random(10, 20)))   
      } 
  
    if (personagem.estaColidindo(inimigo)){
      image(imagemGameOver, width/2 - 200, height/3 )
      somdoJogo.stop();
     
     noLoop();
    }
  }
}  