export class GiftEntity {
    constructor(
        public id: number,
        public userOwnerId: number,
        public title: string,
        public description: string,
        public linkImage: string,
        public redirectLink: string,
    ){}

    public static fromObject( object: {[key:string]:any} )
    {
        const {id, userOwnerId, title, description, linkImage, redirectLink} = object;

        if(!id) throw 'User Id is required';
        if(!userOwnerId) throw 'User Id is required';
        if(!title) throw 'User Id is required';

        return new GiftEntity(id, userOwnerId, title, description, linkImage, redirectLink)
    }
}