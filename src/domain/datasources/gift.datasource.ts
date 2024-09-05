import { CreateGiftDto, UpdateGiftDto } from "../dtos";
import { GiftEntity } from "../entities/gift.entity";

export abstract class UserDatasource {
    abstract create(createGiftDto: CreateGiftDto): Promise<GiftEntity>;
    abstract getAll(): Promise<GiftEntity[]>;
    abstract findById(id:number): Promise<GiftEntity>;
    abstract updateById(updateGiftDto: UpdateGiftDto): Promise<GiftEntity>;
    abstract deleteById(id:number): Promise<GiftEntity>;
}