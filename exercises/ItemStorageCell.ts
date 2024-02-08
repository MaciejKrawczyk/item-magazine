import {Item} from "./Item";

export class ItemStorageCell {
    items: Item[]

    constructor() {
        this.items = []
    }

    public getAllItems() { return this.items }

    public insertItem(item: Item) {

        if (!item.areValuesForAttributesSet) {
            throw new Error('item doesnt have values for attributes set. Use "setValuesForAttributes" before using the item.')
        }

        this.items.push(item)
        return this.items
    }

    public removeItemById(itemId: string) { this.items = this.items.filter(item => item.id !== itemId); }
}

export class Shelf extends ItemStorageCell {
    public shelfId: string;

    constructor(shelfId: string) {
        super();
        this.shelfId = shelfId
    }
}


/**
 * this is the place can can hold items
 */
export class Place extends ItemStorageCell {
    public placeId: string

    constructor(placeId: string) {
        super();
        this.placeId = placeId
    }
}
