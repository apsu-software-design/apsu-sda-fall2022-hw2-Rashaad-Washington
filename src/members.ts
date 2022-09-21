import { Member } from './member';
export class Members {
    private members: Member[];

    constructor() {
        this.members = [];
    }

    public getMember(name: string): Member {
        var member: Member;
        this.members.forEach((member) => {
            if (member.getMemberName() == name) {
                return member;
            }
        });
        return;
    }

    public findMemberNames(query: string): string[] {
        var members: string[];
        this.members.forEach((member) => {
            if (member.getMemberName() == query) {
                members.push(member.getMemberName());
            }
        });
        return members;
    }

    public addMember(name: string, email: string) {
        this.members.push(new Member(name, email));
    }
}
