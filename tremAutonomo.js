class TremAutonomo {
  constructor() {
    this.posicao = 0;
    this.movimentosConsecutivos = 0;
    this.direcaoAtual = null;
    this.movimentosTotais = 0;
  }

  executarComandos(comandos) {
    for (let comando of comandos) {
      if (this.movimentosTotais >= 50) {
        console.log("O trem parou após percorrer 50 posições.");
        break;
      }

      if (this.direcaoAtual === comando) {
        this.movimentosConsecutivos++;
      } else {
        this.movimentosConsecutivos = 1;
        this.direcaoAtual = comando;
      }

      if (this.movimentosConsecutivos > 20) {
        console.log(
          "O trem parou após 20 movimentos consecutivos na mesma direção."
        );
        break;
      }

      this.movimentar(comando);
    }

    return this.posicao;
  }

  movimentar(direcao) {
    if (direcao === "DIREITA") {
      this.posicao++;
    } else if (direcao === "ESQUERDA") {
      this.posicao--;
    } else {
      console.log("Comando inválido:", direcao);
    }

    this.movimentosTotais++;
  }
}

const trem = new TremAutonomo();

console.log("Exemplo 1:");
console.log("Posição Final:", trem.executarComandos(["DIREITA", "DIREITA"]));

console.log("Exemplo 2:");
console.log("Posição Final:", trem.executarComandos(["ESQUERDA"]));

console.log("Exemplo 3:");
console.log(
  "Posição Final:",
  trem.executarComandos([
    "ESQUERDA",
    "DIREITA",
    "DIREITA",
    "DIREITA",
    "DIREITA",
    "ESQUERDA",
  ])
);

module.exports = TremAutonomo;
