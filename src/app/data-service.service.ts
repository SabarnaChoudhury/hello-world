import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
 
  observer=new Subject();
  public subscriber=this.observer.asObservable();

  emitData(data){
    this.observer.next(data);
  }
}
