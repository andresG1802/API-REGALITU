import { GroupRepository } from "../../repositories/group.repository";
import { GroupEntity } from "../../entities/group.entity";
import { UpdateGroupDto } from "../../dtos";

export interface UpdateGroupUseCase{
    execute(dto:UpdateGroupDto): Promise<GroupEntity>
}

export class UpdateGroup implements UpdateGroupUseCase {
    constructor (
        private readonly repository: GroupRepository
    ){}
    execute(dto: UpdateGroupDto): Promise<GroupEntity> {
        return this.repository.updateById(dto);
    }
}