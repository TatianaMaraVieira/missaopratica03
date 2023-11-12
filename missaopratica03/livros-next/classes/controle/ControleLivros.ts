import Livro from "../modelo/Livro";

let livros: Livro[] = [
  {
    codigo: 1,
    codEditora: 1,
    titulo: "Use a Cabeça: Java",
    resumo:
      "Use a Cabeça: Java é uma experiência completa de aprendizado em programação orientada a objetos(OO) e Java. ",
    autores: ["Bert Bates","Kathy Sierra"],
  },
  {
    codigo: 2,
    codEditora: 2,
    titulo: "Java, como Programar",
    resumo:
      "Milhões de alunos e prifissionais aprenderam programação e desenvolvimento de software com os livra Deitel.",
    autores: ["Paul Deitel","Hanvey Deitel"],
  },
  {
    codigo: 3,
    codEditora: 3,
    titulo: "Core Java for the Impatient",
    resumo: " Eaders familiar with Horsymann's original, two-volume -Core Java- books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how these new featuares impact the language and core libraries.",
    autores: ["Cay Horstmann"],
  },
];

export class ControleLivros {
  obterLivros = (): Livro[] => {
    return livros;
  };

  incluir = (livro: Livro): void => {
    const codigo =
      livros.reduce((max, livro) => Math.max(max, livro.codigo), 0) + 1;
    livros.push({ ...livro, codigo });
  };

  excluir = (codigo: number): void => {
    const indiceLivro = livros.findIndex((livro) => livro.codigo === codigo);
    if (indiceLivro !== -1) {
      livros.splice(indiceLivro, 1);
    }
  };
}
