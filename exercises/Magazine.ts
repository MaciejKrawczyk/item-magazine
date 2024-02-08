import {MagazineCabinet} from "./Cabinet";

/**
 can be created only once - singleton...
 */
export class Magazine {
    public cabinets: MagazineCabinet[]

    constructor() {
        this.cabinets = []
    }
    public addCabinet(cabinet: MagazineCabinet) { this.cabinets.push(cabinet) }
    public getAllCabinets() { return this.cabinets }
    public getCabinetById(id: string) {
        for (let i = 0; i < this.cabinets.length; i++) {
            if (this.cabinets[i].cabinetId === id) {
                return this.cabinets[i]
            }
        }
        throw new Error("Couldn't find a cabinet with specified id.")
    }
}