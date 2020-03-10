const alunosTurmaA = [{
        nome: "João César",
        nota: 10
    },
    {
        nome: "Maria Paula",
        nota: 8.0
    },
    {
        nome: "Paula Cristina",
        nota: 10
    },
    {
        nome: "Antônio Roberto",
        nota: 9.3
    }
]


const alunosTurmaB = [{
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

function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.lenght; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.lenght;
    return media;
}


const media1 = calculaMedia(alunosTurmaA);
const media2 = calculaMedia(alunosTurmaB);

function enviaMensagem(media, turma) {
    if (media > 6) {
        console.log(`A média da ${turma} foi de ${media}. Parabéns`)
    } else {
        console.log(`A média da ${turma} foi menor que 6. Reprovado.`)
    }
}

enviaMensagem(media1.toFixed(2), 'Turma A');
enviaMensagem(media2.toFixed(2), 'Turma B');

console.log()