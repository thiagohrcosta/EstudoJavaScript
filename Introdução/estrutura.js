
const alunosTurmaA = [
    {
        nome: "João César",
        nota: 7.0
    },
    {
        nome: "Maria Paula",
        nota: 8.0 
    },
    {
        nome: "Paula Cristina",
        nota: 10
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

function calculaMedia(alunos){
    for (let i = 0; i < alunos.lenght; i++){
        console.log(i);
    }
}


const media1 = calculaMedia(alunosTurmaA);
// const media2 = calculaMedia(alunosTurmaB);

function enviaMensagem(media, turma){
    if (media > 6){
        console.log(`A média da ${turma} foi de ${media}. Parabéns`)
    }
    else{
        console.log(`A média da ${turma} foi menor que 6. Reprovado.`)
    }
}

