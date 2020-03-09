// Criar um programa que calcula a média 
// das notas entre os alunos e envia 
// mensagem do cálculo da média

// Criação de uma variável do tipo STRING
const aluno1 = 'João';
const aluno2 = 'Maria';
const aluno3 = 'Paula';

// É possível usar template string também

const aluno4 = `Ana ${aluno3}`;

// imprimindo resultado

console.log(aluno3);
console.log(aluno4);

// adicionando notas - trabalhando com NUMBER

const notaAluno1 = 6.3
const notaAluno2 = 7.8
const notaAluno3 = 10
const notaAluno4 = 8.3

// Descobrir o tipo da variável
console.log(typeof aluno1);
console.log(typeof notaAluno1);

// Realizar a média

const mediaAlunos = (notaAluno1 + notaAluno2 + notaAluno3 + notaAluno4) / 4;
const notaMedia = mediaAlunos.toFixed(2);
console.log(notaMedia)

