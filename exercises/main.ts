import {getShelfForItemBasedOnItsParameters, moveItemFromTo} from "./utils";
import {Magazine} from "./Magazine";
import {Place} from "./ItemStorageCell";
import {MagazineCabinet} from "./Cabinet";
import {Item, ItemType} from "./Item";

const magazine = new Magazine()
const cabinet = new MagazineCabinet('1')

for (let i = 1; i <= 20; i++) {
    cabinet.addShelf()
}

magazine.addCabinet(cabinet)

const place1 = new Place('miejsce1')
const place2 = new Place('miejsce2')

const itemType1 = new ItemType('frez', ['kąt', 'materiał', 'długość'])
const itemType2 = new ItemType('tuleja', ['szerokość', 'długość', 'materiał'])
const item1 = new Item('item1', itemType1)
const item2 = new Item('item2', itemType1)
const item3 = new Item('item3', itemType2)

const valuesAttrs = {
    'kąt': 90,
    'materiał': 'węglik',
    'długość': 100
}
const valuesAttrs2 = {
    'kąt': 90,
    'materiał': 'węglik',
    'długość': 100
}
const valuesAttrs3 = {
    'szerokość': 5,
    'długość': 5,
    'materiał': 'mosiądz'
}

item1.setValuesForAttributes(valuesAttrs)
item2.setValuesForAttributes(valuesAttrs2)
item3.setValuesForAttributes(valuesAttrs3)

const shelfToPutItemInto = getShelfForItemBasedOnItsParameters(item1, cabinet)
if (shelfToPutItemInto) {
    shelfToPutItemInto.insertItem(item1)
}
const shelfToPutItemInto2 = getShelfForItemBasedOnItsParameters(item2, cabinet)
if (shelfToPutItemInto2) {
    shelfToPutItemInto2.insertItem(item2)
}
const shelfToPutItemInto3 = getShelfForItemBasedOnItsParameters(item3, cabinet)
if (shelfToPutItemInto3) {
    shelfToPutItemInto3.insertItem(item3)
}

console.log(cabinet.shelves)