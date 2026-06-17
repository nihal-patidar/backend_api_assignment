import express from 'express';
import { createUser , getAllUser, getUser, updateUser ,deleteUser} from './controller/userController.js';

const routes = express.Router();


routes.post('/user',createUser);

routes.get('/users',getAllUser);

routes.get('/users/:id',getUser);

routes.put('/users/:id',updateUser);

routes.delete('/users/:id',deleteUser);

export default routes ;