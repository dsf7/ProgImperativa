// // Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma de estudantes lista(um array composto pelos alunos criados no passo 1).

const [Aluno, aluno1, aluno2, aluno3, aluno4, aluno5, alunos] = require("./alunos");

const Curso = {
    nomeCurso: "CTD",
    notaCorte: 7,
    limiteFaltas: 2,
    alunosCurso: alunos,

    novoAluno: (a) => {
        alunos.push(new Aluno(a));
        return "Novo aluno cadastrado.";
    },

    alunoPassou: (aluno) => { 
        return (aluno.calcularMedia() >= Curso.notaCorte
        && aluno.faltas < Curso.limiteFaltas)
        || (aluno.calcularMedia() >= (Curso.notaCorte * 1.1)
        && aluno.faltas == Curso.limiteFaltas);
    },

    aprovados: () => {
        // return alunos.alunos.map(aluno => {
        //     return Curso.alunoPassou(aluno)
        // })

        let resultado = [];
        Curso.alunosCurso.forEach((elemento, index) => {
            resultado[index] = Curso.alunoPassou(elemento);
        })
        return resultado;
        
    }

}

module.exports = [Curso, Aluno];