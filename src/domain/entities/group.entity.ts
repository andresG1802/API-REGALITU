export class GroupEntity {
    constructor(
        public id: number,
        public groupName: string,
        public linkImage: string,
        public adminUserId: number,
    ){}

    public static fromObject( object: {[key:string]:any} )
    {
        const {id, groupName, linkImage, adminUserId} = object;

        if(!id) throw 'Group Id is required';
        if(!groupName) throw 'Group groupName is required';
        if(!linkImage) throw 'Group linkImage is required';
        if(!adminUserId) throw 'Group adminUserId is required';

        return new GroupEntity(id, groupName, linkImage, adminUserId)
    }
}