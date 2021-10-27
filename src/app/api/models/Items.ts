/* tslint:disable */

declare var Object: any;
export interface ItemsInterface {
  "itemCode"?: string;
  "name"?: string;
  "imageUrl"?: string;
  "colorId"?: Array<any>;
  "size"?: Array<any>;
  "priceInput"?: string;
  "priceOutput"?: string;
  "Quanity"?: string;
  "date"?: Date;
  "id"?: any;
}

export class Items implements ItemsInterface {
  "itemCode": string;
  "name": string;
  "imageUrl": string;
  "colorId": Array<any>;
  "size": Array<any>;
  "priceInput": string;
  "priceOutput": string;
  "Quanity": string;
  "date": Date;
  "id": any;
  constructor(data?: ItemsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Items`.
   */
  public static getModelName() {
    return "Items";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Items for dynamic purposes.
  **/
  public static factory(data: ItemsInterface): Items{
    return new Items(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Items',
      plural: 'Items',
      path: 'Items',
      idName: 'id',
      properties: {
        "itemCode": {
          name: 'itemCode',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "imageUrl": {
          name: 'imageUrl',
          type: 'string'
        },
        "colorId": {
          name: 'colorId',
          type: 'Array&lt;any&gt;'
        },
        "size": {
          name: 'size',
          type: 'Array&lt;any&gt;'
        },
        "priceInput": {
          name: 'priceInput',
          type: 'string'
        },
        "priceOutput": {
          name: 'priceOutput',
          type: 'string'
        },
        "Quanity": {
          name: 'Quanity',
          type: 'string'
        },
        "date": {
          name: 'date',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
