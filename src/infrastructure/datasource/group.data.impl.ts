import { prisma } from "../../data/postgres";
import { CreateGroupDto, GroupDatasource, GroupEntity, UpdateGroupDto } from "../../domain";

export class GroupDatasourceImpl implements GroupDatasource {
    async create (createGroupDto: CreateGroupDto): Promise<GroupEntity> {
        const group = await prisma.group.create({
            data: createGroupDto!
        });
        return GroupEntity.fromObject(group);
    }

    async getAll(): Promise<GroupEntity[]> {
        const groups = await prisma.group.findMany();
        return groups.map(group=>GroupEntity.fromObject(group));
    }

    async findById(id: number): Promise<GroupEntity> {
        const group = await prisma.group.findFirst({
            where:{ id }
        });

        if ( !group ) throw 'Gift with id ${id} not found';

        return GroupEntity.fromObject(group); 
    }

    async updateById(updateGroupDto: UpdateGroupDto): Promise<GroupEntity> {
        const group = await this.findById( updateGroupDto.id );
        const updatedGroup = await prisma.group.update({
            where: {id: updateGroupDto.id },
            data: updateGroupDto!.values
        });
        return GroupEntity.fromObject(updateGroupDto);
        //
        // OJO esto puede estar mal
        //
    }

    async deleteById(id: number): Promise<GroupEntity> {
        await this.findById(id);
        const deleted = await prisma.group.delete({
            where: {id}
        });
        return GroupEntity.fromObject(deleted);
    }

}