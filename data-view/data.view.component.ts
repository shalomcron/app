
import {Component, OnInit} from "@angular/core";
import {SessionAppService} from "../services/sessionApp.service";
import {SessionAppModel} from "../models/sessionApp.model";

@Component({
  selector: 'data-view',
  templateUrl: 'data.view.component.html'
})
export class DataViewComponent implements OnInit {
  private session : SessionAppModel;
  constructor (private sessionAppService : SessionAppService) {

  }

  ngOnInit() {
    this.session = this.sessionAppService.getSession();
    console.log('this.session', this.session);
  }

}
