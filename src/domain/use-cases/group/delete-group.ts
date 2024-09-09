import { GroupRepository } from "../../repositories/group.repository";
import { CreateGroupDto, UpdateGroupDto } from "../../dtos";
import { GroupEntity } from "../../entities/group.entity";

export interface DeleteGroupUseCase {
    execute(id: number):Promise<GroupEntity>
}

export class DeleteGroup implements DeleteGroupUseCase {
    constructor(
        private readonly repository: GroupRepository,
    ){}
    execute(id: number): Promise<GroupEntity> {
        return this.repository.deleteById(id);
    }
}