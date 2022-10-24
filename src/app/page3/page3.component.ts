import { Component, OnInit } from '@angular/core';
import { DashPage } from '../Models/DashPage';
import { PinToDashService } from '../pin-to-dash.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  page = new DashPage();

  constructor(private _pinToDashService:PinToDashService) { }

  ngOnInit(): void {
    this.page.PageName="Page 3";
    this.page.PageLink="page3";
  }

  OnPin(){
    this._pinToDashService.addDashPage(this.page);
    console.log(this._pinToDashService.getDashPages);
  }

}
