import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TableData } from '../model/table-data.model';
import { MatDatepickerInputEvent } from '@angular/material';
import { DataManageService } from '../service/data-manage.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit,OnChanges {

  constructor(private service:DataManageService) { }

  @Input()  tableData:TableData[];
  displayedColumns: string[] = ['createdOn', 'name', 'price', 'csv','report','image_url'];
  dataSource :TableData[]=[];
  ngOnInit() {

  }


  ngOnChanges(changes:SimpleChanges){
    if(changes && changes.tableData && changes.tableData.currentValue){
      this.dataSource=changes.tableData.currentValue;
    }
  }

  daysLeft(timestamp:number){
    const timeDiff=timestamp - new Date().getTime();

     // To calculate the no. of days between two dates
     var Difference_In_Days = Math.round(timeDiff / (1000 * 3600 * 24));

     if(Difference_In_Days>0){
       return `${Math.abs(Difference_In_Days)} days ahead`;
     }
     else if(Difference_In_Days<0){
       return `${Math.abs(Difference_In_Days)} days ago`;
     }
     else{
       return `Today`;
           }
  }

  reschedule(type: string, event: MatDatepickerInputEvent<Date>, data) {
    const currData=this.service.getCurrentdata();

    const matchedEle=currData.findIndex((ele)=>ele.id===data.id);

    if(matchedEle>=0){
      currData[matchedEle].createdOn=event.value.getTime();
      this.service.updatedDataSelection( currData);
    }

  }
}
