import { Component, OnInit } from '@angular/core';
import { DashPage } from '../Models/DashPage';
import { PinToDashService } from '../pin-to-dash.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  page = new DashPage();

  constructor(private _pinToDashService:PinToDashService) { }

  ngOnInit(): void {
    this.page.PageName="Page 2";
    this.page.PageLink="page2";
  }

  OnPin(){
    this._pinToDashService.addDashPage(this.page);
    console.log(this._pinToDashService.getDashPages);
  }
}
