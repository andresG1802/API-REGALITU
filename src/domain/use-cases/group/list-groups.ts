import { GroupRepository } from "../../repositories/group.repository";
import { GroupEntity } from "../../entities/group.entity";

export interface ListGroupsUseCase{
    execute(): Promise<GroupEntity[]>
}

export class ListGroups implements ListGroupsUseCase {
    constructor(
        private readonly repository: GroupRepository,
    ){}
    execute(): Promise<GroupEntity[]> {
        return this.repository.getAll();
    }
}