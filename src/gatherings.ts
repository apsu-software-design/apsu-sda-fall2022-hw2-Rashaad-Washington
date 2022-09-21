import {Gathering} from './gathering';

export class Gatherings{
    private gatherings : Gathering[];

    constructor(){
        this.gatherings = [];
    }
    
    public getGatherings(){

    }

    public addGathering(title: string, location: string, date: string){
        this.gatherings.push(new Gathering(title, location, date))
    }

    public getMembers(gatheringTitle: string){
        var gathering = this.gatherings.find(gathering => gathering.title == gatheringTitle);
    }

    public modifyGathering(title: string, newTitle: string, newDate?: string){

    }

    addMemberToGathering(name: string, gatheringTitle: string) {

    }

    findGatheringNames(query: string): string[] {

        return ;
    }
}
