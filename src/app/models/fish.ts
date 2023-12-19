export interface Fish {
    name?: string,
    averageWeight?: number
}

export class CFish implements Fish{
    constructor(
        public name?: string,
        public averageWeight?: number
    ){}
}