export class UpdateGift {
    private constructor(
        public id: number,
        public userOwnerId: number,
        public title: string,
        public description: string,
        public linkImage: string,
        public redirectLink: string,
    ){}

    //
    // OJO, algunos parametros si son nulleables por definicion (segun el prisma schema)
    //

    get values() {
        const returnObj: {[key: string]: any} = {};

        if ( this.userOwnerId ) returnObj.userOwnerId = this.userOwnerId;
        if ( this.title ) returnObj.title = this.title;
        if ( this.description ) returnObj.description = this.description;
        if ( this.linkImage ) returnObj.linkImage = this.linkImage;
        if ( this.redirectLink ) returnObj.redirectLink = this.redirectLink;
        return returnObj;
    }

    static create( props: {[key:string]: any} ): [string?, UpdateGift?] {
        
        const { id, userOwnerId, title, description, linkImage, redirectLink} = props;
        
        if (!id  || isNaN(Number(id))) {
            return ['gift id must be a valid number'];
        }

        return [undefined, new UpdateGift(id, userOwnerId, title, description, linkImage, redirectLink)];
    }
}