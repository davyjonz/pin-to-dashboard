import { Component, OnInit } from '@angular/core';
import { DashPage } from '../Models/DashPage';
import { PinToDashService } from '../pin-to-dash.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  page = new DashPage();

  constructor(private _pinToDashService:PinToDashService) { }

  ngOnInit(): void {
    this.page.PageName="Page 1";
    this.page.PageLink="page1";
  }

  OnPin(){
    this._pinToDashService.addDashPage(this.page);
    console.log(this._pinToDashService.getDashPages);
  }

}
