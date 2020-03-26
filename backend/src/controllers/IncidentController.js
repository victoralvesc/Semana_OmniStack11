const connection = require('../database/connection');

module.exports ={
    async create(request, response) {
        const { title, description, value } = request.body;
        const ond_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ond_id
        });

        return response.jso({ id });
    }  
};