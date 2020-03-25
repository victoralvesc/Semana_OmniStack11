const  express = require('express');

const app = express();

app.use(express.json) 

/* Rotas e recursus*/

/* Metodo HTTP:

*GET - Utilizado para obter retorno - BUSCAR/LISTAR uma informaçãodo backend
*POST - Utilizado para CRIAR/CADASTRAR uma informação no backend
*PUT - Utilizado para ALTERAR uma informação no backend
*DELETE - DELETAR uma informação no backend

*/

/* TIPOS DE PARAMETROS 

*QUERY Params: Parametros nomeados enviados na rota apos "?" (geralmente serve para filtros, paginação)

ex:app.get('/users', (request, response) => {
    const params = request.query;
    console.log(params);

    return response.json ({
    evento: 'Semana OmniStack11',
    aluno: 'Victor Antonio Alves'
    });

*ROUTE Params: Parametros utlizados para identificar recursos (identificar recursos id)

ex:app.post('/users/:id', (request, response) => {
    const params = request.params;
    console.log(params);

    return response.json ({
    evento: 'Semana OmniStack11',
    aluno: 'Victor Antonio Alves'
    });

    

})

*REQUEST Body: Corpo de requisição, utilizado para criar ou alterar recursos

ex:app.post('/users', (request, response) => {
    const body = request.body;
    console.log(body);

    return response.json ({
    evento: 'Semana OmniStack11',
    aluno: 'Victor Antonio Alves'
    });

})

*/


app.post('/users', (request, response) => {
    return response.json ({
    evento: 'Semana OmniStack11',
    aluno: 'Victor Antonio Alves'
    });
}); /*rota raiz do node*/

app.listen(3333);

