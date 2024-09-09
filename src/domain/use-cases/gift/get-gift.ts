import { GiftRepository } from "../../repositories/gift.repository";
import { GiftEntity } from "../../entities/gift.entity";

export interface GetGiftUseCase {
    execute(id:number): Promise<GiftEntity>
}

export class GetPaciente implements GetGiftUseCase {
    constructor(
        private readonly repository: GiftRepository
    ){}
    execute(id: number): Promise<GiftEntity> {
        return this.repository.findById(id);
    }
}