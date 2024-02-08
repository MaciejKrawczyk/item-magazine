import {Shelf} from "./ItemStorageCell";

export class MagazineCabinet {
    public cabinetId: string;
    public readonly shelves: { [shelfId: string]: Shelf };

    constructor(cabinetId: string) {
        this.cabinetId = cabinetId
        this.shelves = {}
    }

    public getAllShelves() {
        return this.shelves
    }

    public addShelf() {
        const shelfId = Object.keys(this.shelves).length.toString();
        this.shelves[shelfId] = new Shelf(shelfId);
    }


    public removeShelf(id: string) {
        if (this.shelves[id]) {
            delete this.shelves[id];
        } else {
            console.log(`Shelf with ID ${id} does not exist.`);
        }
    }
}