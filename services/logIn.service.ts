
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

import 'rxjs/add/operator/map'
import 'rxjs/Rx';

import {Observable} from "rxjs";


@Injectable()
export class LogInService {

  //private url = 'http:/resvvrrrr/logInnnEEEE';
  private  url = 'chrome-extension://fheoggkfdfchfphceeifdbepaooicaho/json/engines.json';

  constructor(private http: Http) {

  }

  private mapResponse(res: Response) {
    return res.json();
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      try {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      }
      catch (e) {
        errMsg = 'err parse json';
      }
    }
    else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error('IN handleError errMsg:' + errMsg);
    return Observable.throw(errMsg);
  }

  public doLogin() : Observable <string> {
    console.log('IN LogInService.doLogin');
    return this.http.get(this.url).map(this.mapResponse).catch(this.handleError);
  }


}
