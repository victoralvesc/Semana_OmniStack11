const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
    const body = request.body;    
    
    console.log(body);
    
    return response.json({
        evento: 'Semana OmniStack11',
        aluno: 'Victor Antonio Alves'
    });
}); /*rota raiz do node*/

module.exports = routes;