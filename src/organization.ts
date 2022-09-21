import { Gathering } from "./gathering";

export class Organization {
    private title: string;
    private gatherings: Gathering[];

    constructor(title: string) {
        this.title = title;
        this.gatherings = [];
    }

    public getOrganizationName(): string {
        return this.title;
    }

    public addGathering(gathering: string) {
        this.gatherings.forEach((indexGathering) => {
            if (indexGathering.getGatheringName() == gathering) {
                this.gatherings.push(indexGathering);
            }
        })
    }
}
