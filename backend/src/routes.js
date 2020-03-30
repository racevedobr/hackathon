import { Router } from 'express';

import UserController from './app/controllers/UserController';
import CompanyController from './app/controllers/CompanyController';
import JobOpportunityController from './app/controllers/JobOpportunityController';
import SessionUserController from './app/controllers/SessionUserController';
import SessionCompanyController from './app/controllers/SessionCompanyController';
import ChatController from './app/controllers/ChatController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/companies', CompanyController.store);

routes.post('/user-sessions', SessionUserController.store);

routes.post('/company-sessions', SessionCompanyController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/job-opportunities', JobOpportunityController.store);

routes.get('/chattoken', ChatController.post);

export default routes;
