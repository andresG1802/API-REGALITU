import { Router } from "express";
import { GiftController } from "./controller";
import { GiftDatasourceImpl } from "../../infrastructure/datasource/gift.data.impl";
import { GiftRepositoryImpl } from "../../infrastructure/repositories/gift.repository.impl";

export class GiftRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new GiftDatasourceImpl();

        const giftRepository = new GiftRepositoryImpl(datasource);

        const giftController = new GiftController(giftRepository);

        router.get('/', giftController.listGifts);
        router.get('/:id', giftController.getGiftById );
        
        router.post('/', giftController.createGift );
        router.put('/:id', giftController.updateGift );
        router.delete('/:id', giftController.deleteGift );

        return router;
    }
}