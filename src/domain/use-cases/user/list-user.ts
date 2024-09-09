import { UserRepository } from "../../repositories/user.repository";
import { UserEntity } from "../../entities/user.entity";

export interface ListUserUseCase{
    execute(): Promise<UserEntity[]>
}

export class ListUser implements ListUserUseCase {
    constructor(
        private readonly repository: UserRepository,
    ){}
    execute(): Promise<UserEntity[]> {
        return this.repository.getAll();
    }
}