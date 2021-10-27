import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import {Router} from '@angular/router';
import {Customers} from "../../api/models/Customers";
import {CustomersApi} from "../../api/services/custom/Customers";
import { EventService, EventData } from '../../commons/services/events-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {

  bag: Subscription = new Subscription();
  dataCustomer : Customers [] = [];
  isAddCustomer : Boolean = false;
  loading: Boolean = false;

  constructor(
    private customerApi: CustomersApi,
    private eventService: EventService,
    private router: Router,
  ) {
    this.bag.add(
      this.eventService.events$.pipe(filter(({key}: EventData)=>
      key ==="fetchDataCustomers"
    ))
    .subscribe(({key, data}: EventData)=>{
      this.fetchData();
    }));
  }
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(filter?):void{
    this.loading = true;
    this.customerApi.find(filter)
    .subscribe((data:Customers[])=>{
      this.loading = false;
      this.dataCustomer = data;
    },
    (err)=>
    {
      console.log(err);
    })

  }
  addCustomer():void
  {
    this.bag.add(
      this.eventService.publish(new EventData("createCustomer",{
        value: true
      }))
    )
  }
  editOrder(id)
  {
    this.bag.add(
      this.eventService.publish(new EventData("editOrder",{
        value: id
      }))
    )
  }
  deleteOrder(id)
  {
    this.customerApi.deleteById(id)
    .subscribe((ret)=>{
      this.fetchData();
    },
    (err)=>{
      console.log(err);
    })
  }
}
