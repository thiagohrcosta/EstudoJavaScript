const alunosTurmaA = [
    {
        nome: "João César",
        nota: 4.0
    },
    {
        nome: "Maria Paula",
        nota: 8.0 
    },
    {
        nome: "Paula Cristina",
        nota: 10.0
    },
    {
        nome: "Antônio Roberto",
        nota: 9.3
    },
    {
        nome: "Ricardo Almeida",
        nota: 5.2
    }
]


// Marcar aluno como reprovado se a nota for menor que 6

// console.log(alunosTurmaA[0].reprovado)


function marcarComoReprovado(alunos){
    for (let aluno of alunos){
        aluno.reprovado = false;
        if (aluno.nota < 6){
            aluno.reprovado = true;
        }
    }
    console.table(alunos);
}

marcarComoReprovado(alunosTurmaA);