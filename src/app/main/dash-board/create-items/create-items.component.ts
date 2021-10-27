import { Component, OnInit } from '@angular/core';
import { EventService, EventData } from '../../../commons/services/events-service.service';
import {LoopBackAuth, ItemsApi} from "../../../api";
import { filter } from 'rxjs/operators';
import {FileUploadService} from '../../../commons/services/file-upload.service';
@Component({
  selector: 'app-create-items',
  templateUrl: './create-items.component.html',
  styleUrls: ['./create-items.component.css']
})
export class CreateItemsComponent implements OnInit {

  isCreateItem: Boolean = false;
  itemCode: String;
  imageUrl : String;
  name: String;
  color: String;
  colorArray: String[] = [];
  sizeType: String;
  size : [] ;
  quanity: String;
  file: File = null;
  sizeBaby = [
    "80","90","100","110","120","130"
  ];
  sizeNewBorn = [
    "80","90","100","110","120","130"
  ];

  priceInput: String;
  priceOutput: String;
  constructor(
    private eventService: EventService,
    private authService: LoopBackAuth,
    private itemApi: ItemsApi,
    private fileUploadService: FileUploadService
  ) {
    this.eventService.events$.pipe(filter(({key}: EventData)=>
      key ==="createItem"
    ))
    .subscribe(({key, data}: EventData)=>{
      this.isCreateItem = true;
    })

   }


  ngOnInit(): void {
  }

  onChange(event) {
    this.file = event.target.files[0];
  }

  closeModal()
  {
    this.isCreateItem = false;
  }
  async create()
  {

    
    this.fileUploadService.upload(this.file).subscribe(
      (event: any) => {
          if (typeof (event) === 'object') {
              // Short link via api response
              console.log(event.data.url);
              this.imageUrl = event.data.url;
              const data ={
                itemCode: this.itemCode,
                imageUrl: event.data.url,
                name: this.name,
                colorId: this.colorArray,
                size: this.sizeBaby,
                priceInput: this.priceInput,
                priceOutput: this.priceOutput,
                Quanity:  this.quanity
              }
              this.itemApi.create(data).subscribe((ret)=>{
                this.closeModal();
                this.eventService.publish(new EventData("fetchDataItems", {
                  value: true
                }));
              },
              (err)=>{
                console.log(err);
              })
          }
      },
      (err)=>{
        console.log(err);
      }
  )
  }
  addColor():void
  {
    this.colorArray.push(this.color);
    //this.UploadImage();
  }

  UploadImage(): void {
    

}
}
