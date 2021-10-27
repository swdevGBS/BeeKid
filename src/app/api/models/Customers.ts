/* tslint:disable */

declare var Object: any;
export interface CustomersInterface {
  "name": string;
  "phone"?: string;
  "address"?: string;
  "orders"?: Array<any>;
  "datetime"?: Date;
  "sumPrice"?: string;
  "note"?: string;
  "id"?: any;
}

export class Customers implements CustomersInterface {
  "name": string;
  "phone": string;
  "address": string;
  "orders": Array<any>;
  "datetime": Date;
  "sumPrice": string;
  "note": string;
  "id": any;
  constructor(data?: CustomersInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Customers`.
   */
  public static getModelName() {
    return "Customers";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Customers for dynamic purposes.
  **/
  public static factory(data: CustomersInterface): Customers{
    return new Customers(data);
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
      name: 'Customers',
      plural: 'Customers',
      path: 'Customers',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "phone": {
          name: 'phone',
          type: 'string'
        },
        "address": {
          name: 'address',
          type: 'string'
        },
        "orders": {
          name: 'orders',
          type: 'Array&lt;any&gt;'
        },
        "datetime": {
          name: 'datetime',
          type: 'Date'
        },
        "sumPrice": {
          name: 'sumPrice',
          type: 'string'
        },
        "note": {
          name: 'note',
          type: 'string'
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
