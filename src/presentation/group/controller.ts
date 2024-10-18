import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateGroupDto, UpdateGroupDto } from "../../domain";
import { CreateGroup, DeleteGroup, GetGroup, ListGroups, GroupRepository, UpdateGroup } from "../../domain";

export class GroupController { 

    constructor(
        private readonly groupRepository: GroupRepository,
    ) {}

    public listGroups = (req:Request, res:Response) => {
        new ListGroups(this.groupRepository)
        .execute()
        .then(groups => res.json(groups))
        .catch(error => res.status(400).json({error}));
    }

    public getGroupById = (req:Request, res:Response)=>{
        const id = +req.params.id;

        new GetGroup(this.groupRepository)
        .execute(id)
        .then(group => res.json(group))
        .catch(error=> res.status(400).json({error}));
    };

    public createGroup = (req: Request, res:Response): void =>{
        const [error, createGroupDto] = CreateGroupDto.create(req.body);
        if(error) { res.status(400).json({error}); return; }

        new CreateGroup(this.groupRepository)
            .execute( createGroupDto! )
            .then(group => res.json(group) )
            .catch(error => res.status(400).json({error}))
    };

    public updateGroup = (req:Request, res:Response): void => {
        const id = +req.params.id;
        const [error, updateGroupDto] = UpdateGroupDto.create({...req.body, id});
        if (error) { res.status(400).json({error}); return; }

        new UpdateGroup(this.groupRepository)
            .execute(updateGroupDto!)
            .then(group => res.json(group))
            .catch(error => res.status(400).json({error}));
    };

    public deleteGroup = (req:Request, res:Response)=>{
        const id = +req.params.id;

        new DeleteGroup(this.groupRepository)
            .execute(id)
            .then(group=>res.json(group))
            .catch(error=>res.status(400).json({error}))
    };
}