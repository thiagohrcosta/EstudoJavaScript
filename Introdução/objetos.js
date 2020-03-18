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

console.log(aluno01.nome, aluno02.nota)

/*
inteiro ano,idade,nascimento
ano=2019
idade=40
nascimento = ano - idade
escreva(“Seu ano de nascimento é: “ + nascimento) */

const ano = 2019
const idade = 40
const nascimento = ano - idade;

console.log("Seu ano de nascimento e: " + nascimento);