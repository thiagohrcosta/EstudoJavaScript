
const nome = 'Carlos'
const peso = 80
const altura = 180

const imc = (peso / altura * altura);

function calculoIMC(){
    if (imc < 30){
        console.log(`O(a) paciente ${nome}, tem IMC de ${imc}, estando com peso normal.`)
    } 
    else {
        console.log(`O(a) paciente ${nome}, tem IMC de ${imc}, estando acima do peso normal.`)
    }
}

calculoIMC();

