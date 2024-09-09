import { CreateGiftDto } from "../../dtos";
import { GiftEntity } from "../../entities/gift.entity";
import { GiftRepository } from "../../repositories/gift.repository";

export interface CreateGiftUseCase {
    execute(dto:CreateGiftDto): Promise<GiftEntity>;
}

export class CreateGift implements CreateGiftUseCase {
    constructor(
        private readonly repository: GiftRepository,
    ){}
    execute(dto: CreateGiftDto): Promise<GiftEntity> {
        return this.repository.create(dto);
    }
}