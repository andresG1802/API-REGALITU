export class CreateUserDto {
    
    private constructor(
        public readonly username: string,
        public readonly email: string,
        public readonly password: string,
    ) {}

    static create( props: {[key:string]: any} ): [string?, CreateUserDto?] {
        const { username, email, password } = props;

        if(!username) return ['User username property is required', undefined];
        if(!email) return ['User email property is required', undefined];
        if(!password) return ['User password property is required', undefined];

        return [undefined, new CreateUserDto(username, email, password)];
    }
}