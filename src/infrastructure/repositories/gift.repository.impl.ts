import { CreateGiftDto, GiftDatasource, GiftEntity, GiftRepository, UpdateGiftDto } from "../../domain";

export class GiftRepositoryImpl implements GiftRepository{
    constructor(
        private readonly datasource: GiftDatasource
    ){}

    create(CreateGiftDto: CreateGiftDto): Promise<GiftEntity>{
        return this.datasource.create(CreateGiftDto);
    }
    getAll(): Promise<GiftEntity[]> {
        return this.datasource.getAll();
    }
    findById(id: number): Promise<GiftEntity> {
        return this.datasource.findById(id);
    }
    updateById(updateGiftDto: UpdateGiftDto): Promise<GiftEntity> {
        return this.datasource.updateById(updateGiftDto);
    }
    deleteById(id: number): Promise<GiftEntity> {
        return this.datasource.deleteById(id);
    }
}