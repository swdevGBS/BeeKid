import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SDKBrowserModule } from './api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EventService} from './commons/services/events-service.service';
import {FileUploadService} from './commons/services/file-upload.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SDKBrowserModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EventService,
    FileUploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
