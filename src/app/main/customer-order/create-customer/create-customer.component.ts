import { Component, OnInit } from '@angular/core';
import { EventService, EventData } from '../../../commons/services/events-service.service';
import {LoopBackAuth, ItemsApi, Items} from "../../../api";
import {Customers} from "../../../api/models/Customers";
import {CustomersApi} from "../../../api/services/custom/Customers";
import { filter } from 'rxjs/operators';
import {FileUploadService} from '../../../commons/services/file-upload.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import * as moment from 'moment';

interface Orders {
  itemCode: string;
  name: string;
  size: string;
  color: string;
  price: number;
}
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})

export class CreateCustomerComponent implements OnInit {
  isCreateCustomer: Boolean = false;
  name: String;
  phone: String;
  address: String;
  listOrder: Orders[] = [];
  listItemCode: Items[] = [];
  itemCodeOrder: String = "";
  size: String[];
  sizeOrder: string = "";
  color: String[];
  colorOrder: string = "";
  sumPrice: string;
  orders: String[] = [];


  constructor(
    private eventService: EventService,
    private authService: LoopBackAuth,
    private customerApi: CustomersApi,
    private itemApi: ItemsApi,
  ) {
    this.eventService.events$.pipe(filter(({key}: EventData)=>
      key ==="createCustomer"
    ))
    .subscribe(({key, data}: EventData)=>{
      this.isCreateCustomer = true;
    })

   }

   closeModal()
   {
     this.isCreateCustomer = false;
   }
  ngOnInit(): void {
    this.itemApi.find()
    .subscribe((data: Items[])=>{
      this.listItemCode = data;
    })
    
  }
  addOrder():void
  {
    console.log(this.itemCodeOrder);
    this.listItemCode.forEach((element, index) => {
      if(element.itemCode == this.itemCodeOrder)
      {
        let order: Orders= {
          itemCode: element.itemCode,
          name: element.name,
          price: Number(element.priceOutput),
          size: this.sizeOrder,
          color: this.colorOrder
        };

        this.listOrder.push(order);
        let sum : number=0;
        this.listOrder.forEach(element => {
          sum += element.price;
        });
        this.sumPrice = sum.toString();
      }
      
    });
  }
  onChange(value){
    this.listItemCode.forEach((element, index) => {
      if(element.itemCode == this.itemCodeOrder)
      {
        this.size = element.size;
        this.color =element.colorId;
      }
      
    });
   
  }

  create()
  {
    const data ={
      name: this.name,
      phone: this.phone,
      address: this.address,
      orders:this.listOrder,
      sumPrice: this.sumPrice,
      datetime:  Date.now()
    }
    this.customerApi.create(data).subscribe((ret)=>{
      this.closeModal();
      this.eventService.publish(new EventData("fetchDataCustomers", {
        value: true
      }));
    },
    (err)=>{
      console.log(err);
    })
  }
  deleteOrder(index)
  {
    this.listOrder.splice(index, 1);
    let sum : number=0;
    this.listOrder.forEach(element => {
      sum += element.price;
    });
    this.sumPrice = sum.toString();
  }
}
