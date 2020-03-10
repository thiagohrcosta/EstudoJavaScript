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

const alunosTurmaB = [
    {
        nome: "Fernando",
        nota: 4.0
    },
    {
        nome: "Fernanda",
        nota: 2.0 
    },
    {
        nome: "Ana Maria",
        nota: 9.4
    },
    {
        nome: "Carlos Alberto",
        nota: 6.7
    }
]


function marcarComoReprovado(aluno){
    aluno.reprovado = false;
    if (aluno.nota < 6){
        aluno.reprovado = true;
    }
}


function enviarMensagemReprovado(aluno){
    if(aluno.reprovado){
        console.log(`O aluno ${aluno.nome} está reprovado!`)
    }
}

function alunoReprovado(alunos){
    for (let aluno of alunos){
      marcarComoReprovado(aluno);
      enviarMensagemReprovado(aluno);
    }
}

alunoReprovado(alunosTurmaA);
alunoReprovado(alunosTurmaB);
