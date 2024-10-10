import { GiftRepository } from "../../repositories/gift.repository";
import { GiftEntity } from "../../entities/gift.entity";

export interface ListGiftsUseCase{
    execute(): Promise<GiftEntity[]>
}

export class ListGifts implements ListGiftsUseCase {
    constructor(
        private readonly repostory: GiftRepository,
    ){}
    execute(): Promise<GiftEntity[]> {
        return this.repostory.getAll();
    }
}