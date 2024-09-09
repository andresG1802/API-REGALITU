import { GiftRepository } from "../../repositories/gift.repository";
import { GiftEntity } from "../../entities/gift.entity";
import { UpdateGiftDto } from "../../dtos";

export interface UpdateGiftUseCase{
    execute(dto:UpdateGiftDto): Promise<GiftEntity>
}

export class UpdateGift implements UpdateGiftUseCase {
    constructor (
        private readonly repository: GiftRepository
    ){}
    execute(dto: UpdateGiftDto): Promise<GiftEntity> {
        return this.repository.updateById(dto);
    }
}