/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Items } from '../../models/Items';
import { Customers } from '../../models/Customers';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Items: Items,
    Customers: Customers,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
