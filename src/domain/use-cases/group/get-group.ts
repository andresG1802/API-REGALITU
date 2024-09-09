import { GroupRepository } from "../../repositories/group.repository";
import { GroupEntity } from "../../entities/group.entity";

export interface GetGroupUseCase {
    execute(id:number): Promise<GroupEntity>
}

export class GetGroup implements GetGroupUseCase {
    constructor(
        private readonly repository: GroupRepository
    ){}
    execute(id: number): Promise<GroupEntity> {
        return this.repository.findById(id);
    }
}