
import {SessionAppModel} from "../models/sessionApp.model";
import {Injectable} from "@angular/core";

@Injectable()
export class SessionAppService {
  private sessions : SessionAppModel;

  public crateSession(name: string) {
    this.sessions = new SessionAppModel('id', name);
  }

  public getSession() : SessionAppModel {
    return this.sessions;
  }
}
