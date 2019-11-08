import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TableData } from '../model/table-data.model';
import { dummy } from 'src/assets/dummy-data';

@Injectable({
  providedIn: 'root'
})
export class DataManageService {

  private dataSource = new BehaviorSubject<TableData[]>(dummy.data);
  public data = this.dataSource.asObservable();

  updatedDataSelection(data: TableData[]){
    this.dataSource.next(data);
  }

  getCurrentdata(){
    return this.dataSource.getValue();
  }
  constructor() { }
}
