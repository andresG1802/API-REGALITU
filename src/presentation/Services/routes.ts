import { Router } from 'express';
import { getGroupByUserAdminId } from './controller';

export class ServicesRoutes {

    static get routes(): Router {
        
        const router = Router();

        router.get('/:id',getGroupByUserAdminId);

        return router;
    }
}