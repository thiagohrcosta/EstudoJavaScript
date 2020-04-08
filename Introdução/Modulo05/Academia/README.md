# GYM MANAGER
![GymManager](https://github.com/thiagohrcosta/LaunchBase/blob/master/Introdu%C3%A7%C3%A3o/Modulo05/Academia/arquivos/gymmanager.jpg?raw=true)

Projeto desenvolvido com o objetivo de se recriar uma plataforma onde seja possível que os instrutores de uma academia sejam cadastrados, apresentando seus principais dados ao mesmo tempo em que permite que usuários possam se cadastrar na plataforma preenchendo seus principais dados e adicionando com qual instrutor gostaria de ter aulas. 

# Como rodar o Gym Manager?
![GymManagerPC](https://github.com/thiagohrcosta/LaunchBase/blob/master/Introdu%C3%A7%C3%A3o/Modulo05/Academia/arquivos/gymmanager2.jpg?raw=true)
Para rodar a aplicação em sua máquina efetue o download do projeto e após devidamente armazenado em sua máquina inicie o servidor na pasta raiz da aplicação utilizando ferramentas como `git bash` ou `hyper` da seguinte forma:

    npm start

Após iniciar o servidor a aplicação automaticamente será aberta em seu navegador utilizando em regra a porta `3000` onde eventuais alterações feitas no código fonte serão automaticamente aplicadas ao projeto.

![Gym3](https://github.com/thiagohrcosta/LaunchBase/blob/master/Introdu%C3%A7%C3%A3o/Modulo05/Academia/arquivos/gym1.jpg?raw=true)
## O que pode ser feito na aplicação?
Você poderá utilizar tanto para os instrutores quanto para os membros as funções de `cadastrar`; `editar`; `apagar`. Ao cadastrar um novo usuário você poderá determinar com qual instrutor ele estará vinculado. 

![Gym4](https://github.com/thiagohrcosta/LaunchBase/blob/master/Introdu%C3%A7%C3%A3o/Modulo05/Academia/arquivos/gym3.jpg?raw=true)
## Etapas de desenvolvimento

 - 30.03.2020 - Configuração do ambiente de desenvolvimento;
 - 31.03.2020 - Criação de rotas; e iniciando o desenvolvimento front-end;
 - 01.04.2020 - Criando a lógica e estrutura de dados;
 - 02.04.2020 - Finalizando a lógica da estrutura de dados; adicionando formulários de edição; formatando datas e configurando a rota de edição do instrutor;
 - 03.04.2020 - Criando estrutura de edição, atualização, listagem, remoção de dados; aplicando CSS no front-end; estruturando a lógica de membros e menu; crianção do formulário de membros;
 - 04.04.2020 - Formatando a exposição dos dados dos membros; criando edição e remoção de membros; adicionando módulo para confirmar exclusão; Refatorando código; Conectando a aplicação ao banco de dados **PostgreSQL**;
 - 05.04.2020 - Criando estrutura para editar e apagar instrutores;
 - 06.04.2020 - Ajustando membros e criando o relacionamento com o banco de dados;
 - 07.04.2020 - Adicionando relacionamentos e criando filtros de busca;
 - 08.04.2020 - Finalizando lógica da paginação e corrigindo bugs para finalizar aplicação.
 
 ![Gym4](https://github.com/thiagohrcosta/LaunchBase/blob/master/Introdu%C3%A7%C3%A3o/Modulo05/Academia/arquivos/gym2.jpg?raw=true)
 
## O que foi utilizado no desenvolvimento do projeto?
Foi utilizado na presente aplicação o seguinte:
 - [Express](https://github.com/expressjs/express)
 - [Nodemon](https://www.npmjs.com/package/nodemon)
 - [Nunjucks](https://www.npmjs.com/package/nunjucks)
 - [Method-override](https://github.com/expressjs/method-override)
 - [Pg](https://www.npmjs.com/package/pg)
 - [Browser-sync](https://www.npmjs.com/package/browser-sync)
 - [Npm-run-all](https://www.npmjs.com/package/npm-run-all)
 - [PostgreSQL](https://www.postgresql.org/)