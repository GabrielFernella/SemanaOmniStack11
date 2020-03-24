const express = require('express');

const app = express();

app.use(express.json());

/*
    Métodos HTTP: 
        Get - buscar info
        Post - criar info 
        Put - alterar info
        Delete - deletar info
*/
/* 
    Tipos de parametros
        Query: parametros nomeados na rota após "?" para filtros e paginação
        Route Params: parametros para identificar recursos
        Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/
/**
 * Banco Utilizado SQLite
 * Query Builder:  table('users').slect('*').where()  exemple
 * knext
 */
app.post('/users', (req, res) => {
    return res.json({
        "evento": "Semana Omnistack 11"
    })
})

app.listen(3333);