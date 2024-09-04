// tremAutonomo.test.js
const TremAutonomo = require("./tremAutonomo"); // Importe a classe

describe("TremAutonomo", () => {
  let trem;

  beforeEach(() => {
    trem = new TremAutonomo(); // Cria uma nova instância antes de cada teste
  });

  test("Deve iniciar na posição 0", () => {
    expect(trem.posicao).toBe(0);
  });

  test("Deve se mover para a direita corretamente", () => {
    trem.executarComandos(["DIREITA"]);
    expect(trem.posicao).toBe(1);
  });

  test("Deve se mover para a esquerda corretamente", () => {
    trem.executarComandos(["ESQUERDA"]);
    expect(trem.posicao).toBe(-1);
  });

  test("Deve parar após 50 movimentos totais", () => {
    const comandos = Array(21).fill("DIREITA");
    trem.executarComandos(comandos);
    expect(trem.posicao).toBe(20);
  });

  test("Deve parar após 20 movimentos consecutivos na mesma direção", () => {
    const comandos = Array(21).fill("DIREITA");
    trem.executarComandos(comandos);
    expect(trem.posicao).toBe(20);
  });

  test("Deve lidar com comandos inválidos", () => {
    const consoleSpy = jest.spyOn(console, "log");
    trem.executarComandos(["INVALIDO"]);
    expect(consoleSpy).toHaveBeenCalledWith("Comando inválido:", "INVALIDO");
    consoleSpy.mockRestore();
  });

  test("Deve alternar entre as direções corretamente", () => {
    trem.executarComandos(["DIREITA", "ESQUERDA"]);
    expect(trem.posicao).toBe(0);
  });
});
