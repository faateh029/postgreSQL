import {Router} from 'express';
import {getController , postController , deleteController} from '../controllers/appCtrl.js';
export const appRouter = Router();
appRouter.get('/'  , getController);
appRouter.post('/new' , postController);
appRouter.get('/delete' , deleteController);