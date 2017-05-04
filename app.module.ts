import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {LogInComponent} from "./log-in/logIn.component";
import {DataViewComponent} from "./data-view/data.view.component";
import {Routes, RouterModule} from "@angular/router";
import {SessionAppService} from "./services/sessionApp.service";


const appRoot : Routes = [
  {
    path: 'log-in-app', component: LogInComponent
  },
  {
    path: 'data-vieww', component: DataViewComponent
  },
  {
    path: '', component: LogInComponent
  }
];

@NgModule({
  declarations: [
    AppComponent, LogInComponent, DataViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoot)
  ],
  providers: [SessionAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
