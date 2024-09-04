export class UserEntity {
    constructor(
        public id: number,
        public username: string,
        public email: string,
        public password: string,
    ){}

    public static fromObject( object: {[key:string]:any})
    {
        const {id, username, email, password} = object;

        if(!id) throw 'User Id is required';
        if(!username) throw 'User Username is required';
        if(!email) throw 'User email is required';
        if(!password) throw 'User password is required';
        return new UserEntity(id, username, email, password);
    }
}