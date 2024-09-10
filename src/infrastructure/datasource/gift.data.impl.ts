import { prisma } from "../../data/postgres";
import { CreateGiftDto, GiftDatasource, GiftEntity, UpdateGiftDto } from "../../domain";

export class GiftDatasourceImpl implements GiftDatasource {
    async create (createGiftDto: CreateGiftDto): Promise<GiftEntity> {
        const user = await prisma.gifts.create({
            data: createGiftDto!
        });
        return GiftEntity.fromObject(user);
    }

    async getAll(): Promise<GiftEntity[]> {
        const gifts = await prisma.gifts.findMany();
        return gifts.map(gift=>GiftEntity.fromObject(gift));
    }

    async findById(id: number): Promise<GiftEntity> {
        const gift = await prisma.gifts.findFirst({
            where:{ id }
        });

        if ( !gift ) throw 'Gift with id ${id} not found';

        return GiftEntity.fromObject(gift); 
    }

    async updateById(updateGiftDto: UpdateGiftDto): Promise<GiftEntity> {
        const gift = await this.findById( updateGiftDto.id );
        const updatedGift = await prisma.gifts.update({
            where: {id: updateGiftDto.id },
            data: updateGiftDto!.values
        });
        return GiftEntity.fromObject(updateGiftDto);
        //
        // OJO esto puede estar mal
        //
    }

    async deleteById(id: number): Promise<GiftEntity> {
        await this.findById(id);
        const deleted = await prisma.gifts.delete({
            where: {id}
        });
        return GiftEntity.fromObject(deleted);
    }

}