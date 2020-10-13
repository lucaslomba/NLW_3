import express from 'express'
import { getRepository } from 'typeorm'
import Orphanage from './models/Orphanage'

// importando o database
import './database/connection'

const app = express();

// express aceitar JSON
app.use(express.json())


//ROTA => Conjunto 
//RECURSO => /users
//MÉTODOS HTTP => GET, POST, PUT, DELETE
//PARAMETROS 
//Query Params: http://localhost:3333/users?search=lucas
//Route Params: http://localhost:3333/users/1 (identficar um recurso)
//Body: http://localhost:3333/users
app.post('/orphanages', async (request, response) => {
    
    // console.log(request.query)
    // console.log(request.params)
    // console.log(request.body)

    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage)

    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    })

    await orphanagesRepository.save(orphanage)

    return response.json({message: 'Hello World'});
})

app.listen(3333)


//++++++++++++++++++++++++++++++++++++++ BANCO DE DADOS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Driver nativo => Tem que escrever todo o codigo de consulta do banco
//Query Builder => se escreve o codigo com javascript e depois ele converte para DB Query
//ORM => Object Relational Mapping