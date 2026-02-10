/*
SERVER.JS
Objetivo: O objetivo do server é configurar toda a aplicação

1 - Importar o express pra rodar nosso app.
2 - Importar as rotas que a gente irá utilizar
3 - Criar o app express
4 - Fazer o app usar express formato json
5 - Fazer o app.use mandar para uma URL (ex '/tarefas') o router lá em cima
6 - Criar a porta
7 - Fazer o app listen e rodar o servidor
*/

const express = require('express');

const tarefasRouter = require('../src/routes/tarefas');

const app = express();

app.use(express.json());

app.use('/tarefas', tarefasRouter);

const porta = 3000;

app.listen(porta, () => {
    console.info(`Servidor rodando na porta http://localhost:${porta}`);
});
