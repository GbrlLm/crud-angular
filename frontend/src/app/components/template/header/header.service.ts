import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _hearderData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routerUrl: ''
  });

  constructor() { }

  get headerData(): HeaderData{
    return this._hearderData.value
  }

  set headerData(header: HeaderData){
    this._hearderData.next(header)
  }
}
