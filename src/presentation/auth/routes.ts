import { Router } from "express";
import { loginUser } from "./controller";

export class AuthRoutes {

    static get routes(): Router {

        const router = Router();

        router.post('/user',loginUser);

        return router;
    }
}