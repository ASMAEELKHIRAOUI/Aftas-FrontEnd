export interface Ranking {
    member?: number,
    competition?: string
}

export class CRanking implements Ranking{
    constructor(
        public member?: number,
        public competition?: string
    ){}
}