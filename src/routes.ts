import { Router } from 'express';
import TasksController from './controllers/TasksController';

const routes = Router();

routes.get('/tasks', TasksController.index);
routes.post('/tasks', TasksController.create);
routes.put('/tasks/:id', TasksController.update);
routes.delete('/tasks/:id', TasksController.delete);

export default routes;
