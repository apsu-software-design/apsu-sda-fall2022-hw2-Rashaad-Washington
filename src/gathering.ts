import { Member } from "./member";

export class Gathering {
    private name: string;
    private date: string; //there is no LocalTime object in TypeScript
    private members: Member[];
    private location: string;

    constructor(name: string, location: string, date: string,) {
        this.name = name;
        this.location = location;
        this.date = date;
        this.members = [];
    }

    public modify(title: string, newDate?: string) {
        if (newDate) {
            this.date = newDate;
        }
        this.name = title;
    }

    public getGatheringName(): string {
        return this.name;
    }

    public getMembers(): string[] {
        var members: string[];
        for (let each of this.members) {
            members.push(each.getMemberName());
        }
        return members;
    }

    public addMember(member: string) {
        this.members.forEach((indexMember) => {
            if (indexMember.getMemberName() == member) {
                this.members.push(indexMember);
            }
        })
    }
}
