import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import {Router} from '@angular/router';
import {ItemsApi, Items} from "../../api";
import { EventService, EventData } from '../../commons/services/events-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  bag: Subscription = new Subscription();
  dataItems : Items [] = [];
  isAddItem : Boolean = false;
  loading: Boolean = false;
  itemCode: any;
  p: number =1;
  constructor(
    private itemApi: ItemsApi,
    private eventService: EventService,
    private router: Router,
  ) {
    this.bag.add(
      this.eventService.events$.pipe(filter(({key}: EventData)=>
      key ==="fetchDataItems"
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
    this.itemApi.find(filter)
    .subscribe((data:Items[])=>{
      this.loading = false;
      this.dataItems = data;

    })

  }
  addItems(){
    this.bag.add(
      this.eventService.publish(new EventData("createItem",{
        value: true
      }))
    )
  }
  Search()
  {
    if(this.itemCode =="")
    {
      this.ngOnInit();
    }else{
      this.dataItems = this.dataItems.filter(res=>{
        return res.itemCode.toLocaleLowerCase().match(this.itemCode.toLocaleLowerCase());
      })
    }
  }
  key ='id';
  reverse: boolean= false;
  sort(key)
  {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
