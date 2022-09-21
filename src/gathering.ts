import { Member } from "./member";

export class Gathering{

    //Added this constructor because in the assignment you say the gathering
    //must have a name, time, and zero or more members.
    //Name is referenced as title, and time is referenced as date. This is 
    //done because your function calls the class with these parameters.
    public title : string;
    private date : string; //there is no LocalTime object in TypeScript
    private members : Member[];
    private location : string;
    constructor(title: string, location: string, date: string, members? : Member){
        this.title = title;
        this.location = location;
        this.date = date;
        if (members){
            this.members.push(members);
        }
    }

    getMembers (sds : string) : Member[]{
        return this.members;
    }


}
