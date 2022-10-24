import { Component } from '@angular/core';
import { DashPage } from './Models/DashPage';
import { PinToDashService } from './pin-to-dash.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pin-to-dashboard';
  dashPages = Array<DashPage>();

  constructor(private _pinToDashService:PinToDashService){}

  ngOnInit(){
    this.dashPages = this._pinToDashService.getDashPages();
  }
}
