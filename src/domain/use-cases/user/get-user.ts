import { UserRepository } from "../../repositories/user.repository";
import { UserEntity } from "../../entities/user.entity";

export interface GetUserUseCase {
    execute(id:number): Promise<UserEntity>
}

export class GetUser implements GetUserUseCase {
    constructor(
        private readonly repository: UserRepository
    ){}
    execute(id: number): Promise<UserEntity> {
        return this.repository.findById(id);
    }
}