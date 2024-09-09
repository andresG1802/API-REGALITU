import { GroupRepository } from "../../repositories/group.repository";
import { GroupEntity } from "../../entities/group.entity";

export interface ListGroupUseCase{
    execute(): Promise<GroupEntity[]>
}

export class ListGroup implements ListGroupUseCase {
    constructor(
        private readonly repository: GroupRepository,
    ){}
    execute(): Promise<GroupEntity[]> {
        return this.repository.getAll();
    }
}