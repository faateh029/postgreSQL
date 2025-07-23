import {Router} from 'express';
import {getController , postController} from '../controllers/appCtrl.js';
export const appRouter = Router();

appRouter.get('/'  , getController);
appRouter.post('/new' , postController);