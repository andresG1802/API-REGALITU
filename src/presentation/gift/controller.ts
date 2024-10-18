import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateGiftDto, UpdateGiftDto } from "../../domain";
import { CreateGift, DeleteGift, ListGifts, GetGift, GiftRepository, UpdateGift } from "../../domain";

export class GiftController {

    constructor(
        private readonly giftRepository: GiftRepository,
    ){}

    public listGifts = (req:Request, res:Response) => {
        new ListGifts(this.giftRepository)
            .execute()
            .then(gifts => res.json(gifts))
            .catch(error => res.status(400).json({error}));
    };

    public getGiftById = (req:Request, res:Response) => {
        const id = +req.params.id;

        new GetGift(this.giftRepository)
            .execute(id)
            .then(gift => res.json(gift))
            .catch(error=>res.status(400).json({error}))
    }

    public createGift = (req:Request, res:Response): void => {
        const [error, createGiftDto] = CreateGiftDto.create(req.body);
        if (error){ res.status(400).json({error}); return; }

        new CreateGift(this.giftRepository)
            .execute( createGiftDto! )
            .then(gift => res.json(gift))
            .catch(error=>res.status(400).json({error}));
    };

    public updateGift = (req:Request, res:Response ): void =>{
        const id =+req.params.id;

        const [error, updateGiftDto] = UpdateGiftDto.create({...req.body, id});
        if(error) { res.status(400).json({error}); return; }

        new UpdateGift(this.giftRepository)
            .execute(updateGiftDto!)
            .then(gift => res.json(gift))
            .catch(error=>res.status(400).json({error}));
    };

    public deleteGift = (req: Request, res: Response) => {
        const id = + req.params.id;
        new DeleteGift(this.giftRepository)
            .execute(id)
            .then(gift => res.json(gift))
            .catch(error=>res.status(400).json({error}))
    };

}