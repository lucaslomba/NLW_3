import express from 'express'

// importando o database
import './database/connection'

// importando rotas
import routes from './routes'

const app = express();

// express aceitar JSON
app.use(express.json())
app.use(routes)

app.listen(3333)


//++++++++++++++++++++++++++++++++++++++ BANCO DE DADOS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Driver nativo => Tem que escrever todo o codigo de consulta do banco
//Query Builder => se escreve o codigo com javascript e depois ele converte para DB Query
//ORM => Object Relational Mapping