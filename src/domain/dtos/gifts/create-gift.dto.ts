export class CreateGiftDto {

    private constructor(
        public userOwnerId: number,
        public title: string,
        public description: string,
        public linkImage: string,
        public redirectLink: string,
    ){}

    static create( props: {[key:string]: any} ): [string?, CreateGiftDto?] {

        const { userOwnerId, title, description, linkImage, redirectLink} = props;

        if(!userOwnerId) return ['gift userOwnerId is required', undefined];
        if(!title) return ['gift title is required', undefined];
        if(!description) return ['gift description is required', undefined];
        if(!linkImage) return ['gift linkImage is required', undefined];
        if(!redirectLink) return ['gift redirectLink is required', undefined];

        return [undefined, new CreateGiftDto(userOwnerId, title, description, linkImage, redirectLink)];
    }
}