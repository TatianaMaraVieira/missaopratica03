import Livro from "../modelo/Livro";

const livros: Array<Livro> = [
  {
    codigo: 1,
    codEditora: 1,
    titulo: "Use a cabeça: Java",
    resumo: "Use a Cabeça: Java é uma experiência completa de aprendizado em programação orientada a objetos(OO) e Java. ",
    autores: ["Bert Bates", "Kathy Sierra"],
  },
  {
    codigo: 2,
    codEditora: 2,
    titulo: "Arquitetura Limpa",
    resumo: "Milhões de alunos e prifissionais aprenderam programação e desenvolvimento de software com os livra Deitel.",
    autores: ["Paul deitel", "Harvey Deitel"],
  },
  {
    codigo: 3,
    codEditora: 3,
    titulo: "Core Java for the impatient",
    resumo: " Eaders familiar with Horsymann's original, two-volume -Core Java- books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how these new featuares impact the language and core libraries.",
    autores: ["Maurício Samy Silva"],
  },
];

export default class ControleLivro {
  incluir(livro: Livro) {
    livro.codigo = livros.length > 0 ? livros.at(-1)!.codigo + 1 : 1;
    livros.push(livro);
  }

  excluir(codigo: number) {
    const index = livros.findIndex((livro) => livro.codigo === codigo);
    livros.splice(index, 1);
  }

  obterLivros() {
    return livros;
  }
}
