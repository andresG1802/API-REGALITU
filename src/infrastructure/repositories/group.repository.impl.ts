import { CreateGroupDto, GroupDatasource, GroupEntity, GroupRepository, UpdateGroupDto } from "../../domain";

export class GroupRepositoryImpl implements GroupRepository{
    constructor(
        private readonly datasource: GroupDatasource
    ){}

    create(CreateGroupDto: CreateGroupDto): Promise<GroupEntity>{
        return this.datasource.create(CreateGroupDto);
    }
    getAll(): Promise<GroupEntity[]> {
        return this.datasource.getAll();
    }
    findById(id: number): Promise<GroupEntity> {
        return this.datasource.findById(id);
    }
    updateById(updateGroupDto: UpdateGroupDto): Promise<GroupEntity> {
        return this.datasource.updateById(updateGroupDto);
    }
    deleteById(id: number): Promise<GroupEntity> {
        return this.datasource.deleteById(id);
    }
}

