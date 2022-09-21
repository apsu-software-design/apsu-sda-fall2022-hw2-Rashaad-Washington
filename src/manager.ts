//your code goes here!
// These import statements are suggestions on how to get your three main libraries into this code.
// You'll need to create each of these libraries.

import { Members } from './members';
import { Gatherings } from './gatherings';
import { Organizations } from './organizations';

export class GatheringManager {
    private members;
    private gatherings;
    private organizations;

    constructor() {
        this.members = new Members();
        this.gatherings = new Gatherings();
        this.organizations = new Organizations();
    }

    addMember(name: string, email: string) {
        this.members.addMember(name, email);
    }

    addGathering(title: string, location: string, date: string) {
        this.gatherings.addGathering(title, location, date)
    }

    addOrganization(title: string) {
        this.organizations.addOrganization(title);
    }

    addMemberToGathering(name: string, gatheringTitle: string) {
        var member = this.members.getMember(name);
        this.gatherings.addMemberToGathering(member, gatheringTitle);
    }

    addGatheringToOrganization(gatheringTitle: string, organizationTitle: string) {
        var gathering = this.gatherings.getGathering(gatheringTitle);
        this.organizations.addGatheringToOrganization(gathering, organizationTitle);
    }

    modifyGathering(title: string, newTitle: string, newDate?: string) {
        var gathering = this.gatherings.getGathering(title);
        this.gatherings.modifyGathering(gathering, newTitle, newDate);
    }

    getMembers(gatheringTitle: string): string[] {
        var members: string[] = this.gatherings.getMembers(gatheringTitle);
        return members;
    }

    findMemberNames(query: string): string[] {
        var memberNames: string[] = this.members.findMembers(query);
        return memberNames;
    }

    findGatheringNames(query: string): string[] {
        var gatheringNames: string[] = this.gatherings.findGatherings(query);
        return gatheringNames;
    }

    findOrganizationNames(query: string): string[] {
        var organizationName: string[] = this.organizations.findOrganizations(query);
        return organizationName;
    }
}
