import { Injectable } from '@angular/core';
import { DashPage } from './Models/DashPage';

@Injectable({
  providedIn: 'root'
})
export class PinToDashService {
  dashPages = Array<DashPage>();
  
  constructor() { }

  getDashPages():Array<DashPage>{
    return this.dashPages.sort();
  }

  addDashPage(page:DashPage){
    this.dashPages.push(page);
  }

  removeDashPage(page:DashPage){
    const index = this.dashPages.indexOf(page);
    console.log(index);

    if (index !== -1) {
      this.dashPages.splice(index, 1);
    }
  }
}
