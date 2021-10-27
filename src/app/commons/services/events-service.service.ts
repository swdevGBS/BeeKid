import {Subject, Observable, BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class EventService
{
  private events = new Subject<EventData>();
  public events$: Observable<EventData>= this.events.asObservable();

  constructor(){

  }
  publish(eventData: EventData){
    this.events.next(eventData);
  }
  closed(){
    this.events.isStopped= true;
  }
}
export class EventData{
  key: string;
  data?: any | undefined;

  constructor(key: string, data?:any |undefined){
  this.key = key;
  this.data=data;
  }
}
