
export class UpdateUserDto {

    private constructor(
        public readonly id: number,
        public readonly username: string,
        public readonly email: string,
        public readonly password: string,
    ) {}

    get values() {
        const returnObj: {[key:string]: any} = {};

        if (this.username) returnObj.name = this.username;
        if (this.email) returnObj.email = this.email;
        if (this.password) returnObj.password = this.password;
        
        return returnObj;
    }

    static create( props: {[key:string]: any} ): [string?, UpdateUserDto?] {
        const { id, username, email, password } = props;
        if ( !id || isNaN(Number(id)) ) {
            return ['id must be a valid number'];
        }

        return [undefined, new UpdateUserDto(id, username, email, password)];
    }

}