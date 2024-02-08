import {ItemStorageCell} from "./ItemStorageCell";
import {Item} from "./Item";
import {MagazineCabinet} from "./Cabinet";

export function getShelfForItemBasedOnItsParameters(item: Item, cabinet: MagazineCabinet) {
    let shelfForItem = undefined
    const itemTypeWithParameters = item.typeWithParameters
    const shelves = cabinet.getAllShelves()
    const shelvesNamesList = Object.keys(shelves)

    // converting dictionary to list of shelves
    const shelvesList = []
    for (let i = 0; i < shelvesNamesList.length; i++) {
        shelvesList.push(shelves[shelvesNamesList[i]])
    }

    // checking if every shelf in the cabinet is empty
    let isEveryShelfEmpty = true
    for (let i = 0; i < shelvesList.length; i++) {
        if (shelvesList[i].items.length !== 0) {
            isEveryShelfEmpty = false
            break;
        }
    }

    // no items found in shelves, insert in first shelf
    if (isEveryShelfEmpty) {
        shelfForItem = shelvesList[0]
        return shelfForItem
    } else {

        // rest of the code if any of the shelf is not empty
        // check if some any of the item has the same type as the item we want to insert
        for (let i = 0; i < shelvesList.length; i++) {
            if (shelvesList[i].items.length > 0) {
                if (shelvesList[i].items[0].typeWithParameters?.name === itemTypeWithParameters?.name) {
                    if (JSON.stringify(shelvesList[i].items[0].typeWithParameters?.attributes) === JSON.stringify(itemTypeWithParameters?.attributes)) {

                        // found item with the same parameters as item to insert
                        shelfForItem = shelvesList[i]
                        return shelfForItem
                    }
                }
            }
        }

        // no similar items found, insert in first empty shelf
        for (let i = 0; i < shelvesList.length; i++) {
            if (shelvesList[i].items.length === 0) {
                shelfForItem = shelvesList[i]
                return shelfForItem
            }
        }
    }

    if (!shelfForItem) {
        throw new Error("Couldn't find fitting shelf for this item")
    }
}

export function moveItemFromTo(
    item: Item,
    placeToMoveItemFrom: ItemStorageCell,
    placeToMoveItemTo: ItemStorageCell
) {
    try {
        placeToMoveItemFrom.removeItemById(item.id)
    } catch (e) {
        console.error("Couldn't do operation: placeToMoveItemFrom.removeItemById(item.id)")
    }

    try {
        placeToMoveItemTo.insertItem(item)
    } catch (e) {
        console.error("Couldn't do operation: placeToMoveItemTo.insertItem(item)")
    }
}