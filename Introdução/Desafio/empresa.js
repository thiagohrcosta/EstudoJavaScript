// Desafio. Crie um usuário que trabalha em uma empresa, constando nome do usuário, nome da empresa, e seu endereço. 
// Imprima o endereço e nome da empresa.

const usuario = {
    nome: "Carlos Henrique",
    empresa: {
        nome: "WallMart",
    },
    endereco: {
        logradouro: "Avenida",
        rua: "Afonso Pena",
        numero: 1040,
        cidade: "Belo Horizonte",
        estado: "Minas Gerais"
    }
}

console.log(`A empersa ${usuario.empresa.nome} está localizada na(o) ${usuario.endereco.logradouro + " " 
                                                                        + usuario.endereco.rua + ", " 
                                                                        + usuario.endereco.numero + ", " 
                                                                        + usuario.endereco.cidade + ", " 
                                                                        + usuario.endereco.estado}`);