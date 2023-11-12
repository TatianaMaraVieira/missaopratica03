import Editora from "../modelo/Editora";

const editoras: Editora[] = [
  {
    codEditora: 1,
    nome: "Alta Books",
    autor: "Bert Bates",
  },
  {
    codEditora: 2,
    nome: "Pearson",
    autor: "Paul Deitiel",
  },
  {
    codEditora: 3,
    nome: "Addison Wesley",
    autor: "Cay Horstmann",
  },
];

export class ControleEditora {
  public getEditoras = (): Editora[] => {
    return editoras;
  };

  public getNomeEditora = (codEditora: number): string => {
    const editoraEncontrada = editoras.find(
      (editora) => editora.codEditora === codEditora
    );
    if (editoraEncontrada) {
      return editoraEncontrada.nome;
    } else {
      throw new Error("Editora não encontrada");
    }
  };

  public getEditora = (codEditora: number): Editora | undefined => {
    return editoras.find((editora) => editora.codEditora === codEditora);
  };
}
