import { Router } from "express";

import { UserRoutes } from "./user/routes";
import { GroupRoutes } from "./group/routes";
import { GiftRoutes } from "./gift/routes";
import { AuthRoutes } from "./auth/routes";
import { ServicesRoutes } from "./Services/routes";

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/api/users', UserRoutes.routes);
        router.use('/api/gifts', GiftRoutes.routes);
        router.use('/api/groups', GroupRoutes.routes);
        router.use('/api/auth', AuthRoutes.routes)
        router.use('/api/services', ServicesRoutes.routes);
        return router;
    }
}