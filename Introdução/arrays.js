// Usando arrays

const alunos = [
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

/*
const aluno01 = {
    nome: "João",
    nota: 9.1
}

const aluno02 = {
    nome: "Maria",
    nota: 8.0
}

const aluno03 = {
    nome: "Paula",
    nota: 10
}

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3;
const notaMedia = media.toFixed(2);
console.log(`Nota média da turma foi de: ${notaMedia}` );
*/

const mediaAlunos = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;
const mediaTotal = mediaAlunos.toFixed(2);

console.log(mediaTotal);

console.log("==================")

const nomeDeAlunos = ["João Paulo", "Maria Júlia", "Ana Paula"]
console.log(nomeDeAlunos[2]);