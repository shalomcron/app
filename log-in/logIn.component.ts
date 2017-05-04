import { Component } from '@angular/core';
import {LogInService} from "../services/logIn.service";
import {Router} from "@angular/router";
import {SessionAppService} from "../services/sessionApp.service";

@Component({
  selector: 'log-in',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.less'],
  providers: [LogInService]
})
export class LogInComponent {
  private _userName = '';
  // Enter User Name
  placeholder = 'Enter User Name';

  errMessage = '';
  //constructor (private heroService: HeroService) {}
  //*
  constructor (
    private logInService  : LogInService,
    private router: Router,
    private sessionAppService: SessionAppService) {
  }
  //*/
  get userName() {
    return this._userName;
  }

  set userName(userName) {
    this._userName = userName;
  }

  logIn() {
    console
    //console.log('logInlogInlogInlogIn');
    this.logInService.doLogin().subscribe(
      response => {
        console.log('response', response);
        this.errMessage = 'Login OK';
        this.router.navigate(['/data-vieww']);
        this.sessionAppService.crateSession(this._userName);
      }
      ,errMsg => {
        console.log('1 errMsg', errMsg);
        this.errMessage = errMsg;
      }

    );
  }
}
