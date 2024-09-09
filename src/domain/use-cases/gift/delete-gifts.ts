import { CreateGiftDto, UpdateGiftDto } from "../../dtos";
import { GiftEntity } from "../../entities/gift.entity";
import { GiftRepository } from "../../repositories/gift.repository";

export interface DeleteGiftUseCase{
    execute(id: number):Promise<GiftEntity>
}

export class DeleteGift implements DeleteGiftUseCase {
    constructor(
        private readonly repository: GiftRepository,
    ){}
    execute(id:number): Promise<GiftEntity> {
        return this.repository.deleteById(id);
    }
}