import express from 'express'
import 'express-async-errors'

import path from 'path'

import cors from 'cors'

// importando o database
import './database/connection'

// importando rotas
import routes from './routes'

// erros
import errorHandler from './errors/handler'

const app = express();

app.use(cors())

// express aceitar JSON
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(3333)


//++++++++++++++++++++++++++++++++++++++ BANCO DE DADOS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Driver nativo => Tem que escrever todo o codigo de consulta do banco
//Query Builder => se escreve o codigo com javascript e depois ele converte para DB Query
//ORM => Object Relational Mapping