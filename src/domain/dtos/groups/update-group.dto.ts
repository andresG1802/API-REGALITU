export class UpdateGroupDto {
    constructor(
        public readonly id: number,
        public readonly groupName: string,
        public readonly linkImage: string,
        public readonly adminUserId: number,
    ){}

    get values() {
        const returnObj: {[key: string]: any} = {};

        if( this.groupName ) returnObj.groupName = this.groupName;
        if( this.linkImage ) returnObj.linkImage = this.linkImage;
        if( this.adminUserId ) returnObj.adminUserId = this.adminUserId;

        return returnObj;
    }

    static create( props: {[key:string]: any} ): [string?, UpdateGroupDto?] {
        
        const { id, groupName, linkImage, adminUserId } = props;

        if ( !id || isNaN( Number(id)) ) {
            return ['group id must be a valid number'];
        }

        return [undefined, new UpdateGroupDto(id, groupName, linkImage, adminUserId)];
    }
}