// DANIEL FONTOURA - Turma 7 
// Avaliação Final - Parte 1 e 2


// Micro desafio - Passo 1
// Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.
const { map } = require("./alunos");
const [Aluno, aluno1, aluno2, aluno3, aluno4, aluno5, alunos] = require("./alunos");
const [Curso] = require("./curso");


// // Micro desafio - Passo 2
// // Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.

console.log(aluno1.calcularMedia());
console.log(aluno1.adicionarFalta());
console.log(aluno1);


// // Micro desafio - Passo 3
// // Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma de estudantes lista(um array composto pelos alunos criados no passo 1).

console.log(Curso);



// // Micro desafio - Passo 4
// // 	Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.

console.log(Curso.novoAluno("Aluno Novo"));

console.log(Curso);
    

// // Micro desafio - Passo 5
// // 	Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.

console.log(Curso.alunoPassou(alunos[0]));
console.log(Curso.alunoPassou(alunos[1]));
console.log(Curso.alunoPassou(alunos[2]));
console.log(Curso.alunoPassou(alunos[3]));
console.log(Curso.alunoPassou(alunos[4]));

// // Micro desafio - Passo 6
// // Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não.
// percorrer lista de estudantes dentro do objeto curso, retornando um booleano falando se os alunos aprovaram ou  (só valores booleanos)

// console.log(Curso.aprovados());

// não consegui de jeito nenhum resolver o 6. quebrei a cabeça até duas da manhã Professor, olhei de outros companheiros, mas nada funcionou!
// sempre aparecia algum erro, ou no reduce ou no map, como se o atributo estivesse indefinido
// testei mudando this para nome da const, arrow function ou normal, mil e uma variações e nada funcionou...


// // Micro desafio - Passo 7
// // Importe o módulo
//  estudantes.js, que contém uma lista de alunos, dentro do arquivo que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente).

console.log(Curso.alunosCurso);
