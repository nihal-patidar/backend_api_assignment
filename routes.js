import express from 'express';
import { createUser , getAllUser } from './controller/userController.js';

const routes = express.Router();


routes.post('/user',createUser);


routes.get('/users',getAllUser);


export default routes ;