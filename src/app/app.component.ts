import { Component } from '@angular/core';
import { LoopBackConfig } from './api';
//import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BeeKidClient';
  constructor(){
    LoopBackConfig.setBaseURL(environment.apiUrl);
    LoopBackConfig.setApiVersion('api');
  }
}
