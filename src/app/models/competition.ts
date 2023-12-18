import { Time } from "@angular/common";

export interface Competition {
    code?: string;
    date?: Date;
    startTime?: Time;
    endTime?: Time;
    numberOfParticipants?: number;
    location?: string;
    amount?: number
}
export class CCompetition implements Competition{
    constructor( 
     public code?: string,
     public date?: Date,
     public startTime?: Time,
     public endTime?: Time,
     public numberOfParticipants?: number,
     public location?: string,
     public amount?: number
    ){}
}