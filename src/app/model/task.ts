export class Task{
    constructor(public title:string,
        public desc:string,
        public assignedto:string,
        public createdAt:string,
        public priority:string,
        public ststus:any,
        public id?:string){}
}