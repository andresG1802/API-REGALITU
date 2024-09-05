export class CreateGroupDto {

    private constructor(
        public readonly groupName: string,
        public readonly linkImage: string,
        public readonly adminUserId: number,
    ){}

    static create( props: {[key:string]: any} ): [string?, CreateGroupDto?] {
        const { groupName, linkImage, adminUserId } = props;

        if ( !groupName ) return ['group groupname property is required', undefined];
        if ( !linkImage ) return ['group linkImage property is required', undefined];
        if ( !adminUserId ) return ['group adminUserId property is required', undefined];

        return [undefined, new CreateGroupDto(groupName, linkImage, adminUserId)];
    }
}