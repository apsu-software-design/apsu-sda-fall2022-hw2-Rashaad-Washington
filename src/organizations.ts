import { Organization } from './organization';

export class Organizations {
    private organizations: Organization[];

    constructor() {
        this.organizations = [];
    }

    public getOrganizations(): Organization[] {
        return this.organizations;
    }

    public addOrganization(title: string) {
        this.organizations.push(new Organization(title));
    }

    public addGatheringToOrganization(gatheringTitle: string, organizationTitle: string) {
        this.organizations.forEach((organization) => {
            if (organization.getOrganizationName() == organizationTitle) {
                organization.addGathering(gatheringTitle);
            }
        });
    }

    public findOrganizationNames(query: string): string[] {
        var organizations: string[];
        this.organizations.forEach((organization) => {
            if (organization.getOrganizationName() == query) {
                organizations.push(organization.getOrganizationName());
            }
        });
        return organizations;
    }
}
