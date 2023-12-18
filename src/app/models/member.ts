export interface Member {
    number: number,
    name?: string,
    familyName?: string,
    accessionDate?: Date,
    nationality?: string,
    identityDocumentType?: string,
    identityNumber?: string
}

export class CMember implements Member {
    constructor(
        public number: number,
        public name?: string,
        public familyName?: string,
        public accessionDate?: Date,
        public nationality?: string,
        public identityDocumentType?: string,
        public identityNumber?: string
    ){}
}