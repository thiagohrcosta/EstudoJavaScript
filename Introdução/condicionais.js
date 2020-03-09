// Criar um programa que calcula a média 
// das notas entre os alunos e envia 
// mensagem do cálculo da média

// Criação de uma variável do tipo STRING
const aluno1 = 'João';
const notaAluno1 = 6.3

const aluno2 = 'Maria';
const notaAluno2 = 7.8

const aluno3 = 'Paula';
const notaAluno3 = 10

// É possível usar template string também

const aluno4 = `Ana ${aluno3}`;
const notaAluno4 = 8.3

// Se a média for maior que 6 parabenizar a turma.

const mediaAlunos = (notaAluno1 + notaAluno2 + notaAluno3 + notaAluno4) / 4;
const notaTotal = mediaAlunos.toFixed(2);

// Adicionando condições para calcular se haverá parabenização da turma por 
// Nota superior a 6

if (mediaAlunos > 6){
    // Faça alguma coisa
    console.log(`Parabéns, turma aprovada a média foi de ${notaTotal}`)
}
else {
    // Faz outra coisa
    console.log(`A turma não alcançou a média mínima.`)
}