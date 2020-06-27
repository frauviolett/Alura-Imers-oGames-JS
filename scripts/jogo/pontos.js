class Pontos {
  constructor() {
    this.pontos = 0
      
  }
  
  exibe () {
   fill('#ffff') 
   textSize(50)
   textAlign(RIGHT) 
   text(parseInt(this.pontos), width -30, 50)
  }
  
  adicionarPonto () {
  this.pontos = this.pontos + 0.2
  }
        
}        


