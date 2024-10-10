import { Router } from "express";
import { UserController } from "./controller";
import { UserDatasourceImpl } from "../../infrastructure/datasource/user.data.impl";
import { UserRepositoryImpl } from "../../infrastructure/repositories/user.repository.impl";

export class UserRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new UserDatasourceImpl();

        const userRepository = new UserRepositoryImpl(datasource);

        const userController = new UserController(userRepository);

        router.get('/', userController.listUser);
        router.get('/:id', userController.getUserById);
        
        // for some reason, aqui hay un error
        router.post('/', userController.createUser );
        router.put('/:id', userController.updateUser );
        router.delete('/:id', userController.deleteUser );

        return router;
    }
}