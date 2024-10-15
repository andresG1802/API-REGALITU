import { Router } from "express";
import { GroupController } from "./controller";
import { GroupDatasourceImpl } from "../../infrastructure/datasource/group.data.impl";
import { GroupRepositoryImpl } from "../../infrastructure/repositories/group.repository.impl";

export class GroupRoutes {
    static get routes(): Router {

        const router = Router();

        const datasource = new GroupDatasourceImpl();

        const groupRepository = new GroupRepositoryImpl(datasource);

        const groupController = new GroupController(groupRepository);

        router.get('/', groupController.listGroups);
        router.get('/:id', groupController.getGroupById);

        router.post('/', groupController.createGroup );
        router.put('/:id', groupController.updateGroup );
        router.delete('/:id', groupController.deleteGroup );

        return router;
    }
}