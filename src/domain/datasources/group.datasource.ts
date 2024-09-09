import { CreateGroupDto, UpdateGroupDto } from "../dtos";
import { GroupEntity } from "../entities/group.entity";

export abstract class GroupDatasource {
    abstract create(createGroupDto: CreateGroupDto): Promise<GroupEntity>;
    abstract getAll(): Promise<GroupEntity[]>;
    abstract findById(id:number): Promise<GroupEntity>;
    abstract updateById(updateGroupDto: UpdateGroupDto): Promise<GroupEntity>;
    abstract deleteById(id:number): Promise<GroupEntity>;
}