import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private scrollSubject = new BehaviorSubject<any>(0);
  public scrollIndicator = this.scrollSubject.asObservable();


  constructor() { 
  }

  informHeader(width: number): void {
    this.scrollSubject.next(width);
  }

}
