import { Router } from 'express'

// importando o metodo do controller
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router();

//ROTA => Conjunto 
//RECURSO => /users
//MÉTODOS HTTP => GET, POST, PUT, DELETE
//PARAMETROS 
//Query Params: http://localhost:3333/users?search=lucas
//Route Params: http://localhost:3333/users/1 (identficar um recurso)
//Body: http://localhost:3333/users
routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages', OrphanagesController.create)

export default routes;