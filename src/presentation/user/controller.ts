import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateUserDto, UpdateUserDto } from "../../domain/dtos";
import { CreateUser, DeleteUser, GetUser, ListUsers, UserRepository, UpdateUser } from "../../domain";

export class UserController {
    
    constructor(
        private readonly userRepository: UserRepository,
    ) {}

    // "lo raro es que express recomiendo no utilizar aync" -galvan
    public listUsers = (req:Request, res:Response) => {
        new ListUsers(this.userRepository)
        .execute()
        .then(users => res.json(users))
        .catch(error => res.status(400).json({error}));
    };

    public getUserById = (req:Request, res:Response)=>{
        const id = +req.params.id;

        new GetUser(this.userRepository)
        .execute(id)
        .then(user => res.json(user))
        .catch(error=>res.status(400).json({error}));
    };

    public createUser = (req:Request, res:Response): void =>{
        const [error,createUserDto] = CreateUserDto.create(req.body);
        if(error) { res.status(400).json({error}); return; }

        new CreateUser(this.userRepository)
            .execute( createUserDto! )
            .then(user => res.json(user))
            .catch(error => res.status(400).json({error}));
    };

    public updateUser = (req:Request,res:Response): void => {
        const id = +req.params.id;
        const [error,updateUserDto] = UpdateUserDto.create({...req.body,id});
        if(error) { res.status(400).json({ error }); return; }

        new UpdateUser(this.userRepository)
            .execute(updateUserDto!)
            .then(user => res.json(user))
            .catch(error => res.status(400).json({error}));
    };

    public deleteUser = (req: Request, res:Response)=>{
        const id = +req.params.id;

        new DeleteUser(this.userRepository)
            .execute(id)
            .then(user=>res.json(user))
            .catch(error=>res.status(400).json({error}))
    };
}