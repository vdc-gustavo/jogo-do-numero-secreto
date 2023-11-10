let numero = Math.floor(Math.random() * 101);
let chute = Number(
  prompt(
    "Bem vindo ao jogo do número secreto, aqui você deve advinhar um número aleatório entre 0 e 100. Insira o seu primeiro chute"
  )
);
let tentativas;

for (let i = 0; chute != numero; i++) {
  if (chute < numero) {
    chute = Number(
      prompt(
        "O seu chute é menor do que o número secreto.\nDigite outro número e clique em OK para uma nova tentativa.\nClique em Cancelar para sair do jogo."
      )
    );
  } else if (chute > numero) {
    chute = Number(
      prompt(
        "O seu chute é maior do que o número secreto.\nDigite outro número e clique em OK para uma nova tentativa.\nClique em Cancelar para sair do jogo."
      )
    );
  }
  if (chute === numero) {
    alert(
      `Parabéns, você acertou o número secreto.\nVocê usou ${tentativas} tentativas para acertar o número, clique em Ok para terminar o jogo`
    );
  }
  tentativas = i;
}
