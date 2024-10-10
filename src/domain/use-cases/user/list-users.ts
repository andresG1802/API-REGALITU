import { UserRepository } from "../../repositories/user.repository";
import { UserEntity } from "../../entities/user.entity";

export interface ListUsersUseCase{
    execute(): Promise<UserEntity[]>
}

export class ListUsers implements ListUsersUseCase {
    constructor(
        private readonly repository: UserRepository,
    ){}
    execute(): Promise<UserEntity[]> {
        return this.repository.getAll();
    }
}