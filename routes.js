import express from 'express';
import { createUser , getAllUser, getUser, updateUser } from './controller/userController.js';

const routes = express.Router();


routes.post('/user',createUser);

routes.get('/users',getAllUser);

routes.get('/users/:id',getUser);

routes.put('/users/:id',updateUser);

export default routes ;