import { Livro } from '../modelo/Livro';
class ControleLivros {
  livros: Livro[] = [
    {
      codigo: 1,
      codEditora: 3,
      titulo: 'Use a Cabeça: Java',
      resumo:
        'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.',
      autores: ['Bert Bates', 'Kathy Sierra'],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Java, como Programar',
      resumo:
        'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel',
      autores: ['Paul Deitel', 'Harvey Deitel'],
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Core Java for the Impatient',
      resumo: `Readers familiar with Horstmann's original, two-volume "Core Java" books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries.`,
      autores: ['Cay Horstmann'],
    },
  ];

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo =
    this.livros.reduce((max, l) => Math.max(max, l.codigo), 0) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indiceLivro = this.livros.findIndex((livro) => livro.codigo === codigo);
    if (indiceLivro >= 0) {
      this.livros.splice(indiceLivro, 1);
    }
  }
}

export { ControleLivros };
