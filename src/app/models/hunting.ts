export interface Hunting {
    member?: number,
    competition?: string,
    fish?: string,
    weight?: number
}

export class CHunting implements Hunting{
    constructor(
        public member?: number, 
        public competition?: string, 
        public fish?: string, 
        public weight?: number, 
    ){}
}
