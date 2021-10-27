import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CovidTrackingService{

  constructor(
    private http :HttpClient
  ){

  }
  public getDataCovid():Observable<any>{
    let _url: string = "https://owsnews.herokuapp.com/covid";
    let result = this.http.get(_url)
    return result;
  }
}
