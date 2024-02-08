type ItemTypeParams = { [attrName: string]: number | string }

export class ItemType {
    attributes: string[]
    name: string;

    constructor(name: string, attributes: string[]) {
        this.name = name
        this.attributes = attributes
    }

    getItemTypeWithParameters(params: ItemTypeParams): {
        name: string,
        attributes: ItemTypeParams
    } {

        const result: {
            name: string,
            attributes: ItemTypeParams
        } = {
            name: this.name,
            attributes: {}
        }

        for (let i = 0; i < this.attributes.length; i++) {
            result.attributes[this.attributes[i]] = params[this.attributes[i]]
        }

        return result
    }
}

export class Item {
    id: string
    itemTypeDefinition: ItemType;
    areValuesForAttributesSet: boolean;
    typeWithParameters: { name: string; attributes: ItemTypeParams; } | undefined;

    constructor(id: string, itemType: ItemType) {
        this.id = id
        this.itemTypeDefinition = itemType
        this.areValuesForAttributesSet = false
    }

    setValuesForAttributes(params: ItemTypeParams) {
        const typeWithParameters = this.itemTypeDefinition.getItemTypeWithParameters(params)
        this.areValuesForAttributesSet = true
        this.typeWithParameters = typeWithParameters
    }
}