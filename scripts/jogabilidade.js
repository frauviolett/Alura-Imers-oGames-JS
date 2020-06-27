function keyPressed() {
  if (key === 'ArrowUp') {
      personagem.pula();
      somdoPulo.play()
  }
  if (key === "ArrowRight"){
    personagem.direita();
  }
  if (key === "ArrowLeft"){
    personagem.esquerda();
  }
  if (key === "ArrowDown"){
    personagem.baixo();
  } 
} 

