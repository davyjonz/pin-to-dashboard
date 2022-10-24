import { Component, OnInit } from '@angular/core';
import { DashPage } from '../Models/DashPage';
import { PinToDashService } from '../pin-to-dash.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashPages = Array<DashPage>();

  constructor(private _pinToDashService:PinToDashService){}

  ngOnInit(){
    this.dashPages = this._pinToDashService.getDashPages();
  }

  OnRemove(page:DashPage){
    this._pinToDashService.removeDashPage(page);
  }

}
