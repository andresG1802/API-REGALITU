import { GroupRepository } from "../../repositories/group.repository";
import { GroupEntity } from "../../entities/group.entity";
import { CreateGroupDto } from "../../dtos";

export interface CreateGroupUseCase {
    execute(dto:CreateGroupDto): Promise<GroupEntity>;
}

export class CreateGroup implements CreateGroupUseCase {
    constructor (
        private readonly repository: GroupRepository,
    ){}
    execute(dto: CreateGroupDto): Promise<GroupEntity> {
        return this.repository.create(dto);
    }
}