import { Gathering } from './gathering';

export class Gatherings {
    private gatherings: Gathering[];

    constructor() {
        this.gatherings = [];
    }

    public getGatherings(): Gathering[] {
        return this.gatherings;
    }

    public addGathering(title: string, location: string, date: string) {
        this.gatherings.push(new Gathering(title, location, date));
    }

    public modifyGathering(title: string, newTitle: string, newDate?: string) {
        this.gatherings.forEach((gathering) => {
            if (gathering.getGatheringName() == title) {
                if (newDate) {
                    gathering.modify(newTitle, newDate);
                } else {
                    gathering.modify(newTitle);
                }
            }
        });
    }

    public getMembers(gatheringTitle: string): string[] {
        var members: string[];
        this.gatherings.forEach((gathering) => {
            if (gathering.getGatheringName() == gatheringTitle) {
                members = gathering.getMembers();
            }
        });
        return members;
    }

    public addMemberToGathering(member: string, gatheringTitle: string) {
        this.gatherings.forEach((gathering) => {
            if (gathering.getGatheringName() == gatheringTitle) {
                gathering.addMember(member);
            }
        });
    }

    public findGatheringNames(query: string): string[] {
        var gatherings: string[];
        this.gatherings.forEach((gathering) => {
            if (gathering.getGatheringName() == query) {
                gatherings.push(gathering.getGatheringName());
            }
        });
        return gatherings;
    }
}
