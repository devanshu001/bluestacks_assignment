import { Component, OnInit } from '@angular/core';
import { TableData } from './model/table-data.model';
import { DataManageService } from './service/data-manage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  upcomingCampaignData:TableData[];
  pastCampaignData:TableData[];
  activeCampaignData:TableData[];
  title = 'bluestacks';

  constructor(private service: DataManageService){

  }

  ngOnInit(){
    this.service.data.subscribe((data)=>{
      console.log(data);

      this.mapToRespectiveData(data);
    });

  }

  mapToRespectiveData(data:TableData[]){
    this.upcomingCampaignData=[];
    this.activeCampaignData=[];
    this.pastCampaignData=[];

    data.forEach((data)=>{
      const today=new Date();
      today.setHours(0,0,0,0);
      const timeDiff=data.createdOn - today.getTime();

       // To calculate the no. of days between two dates
       var Difference_In_Days = Math.round(timeDiff / (1000 * 3600 * 24));

       if(Difference_In_Days>0){
         this.upcomingCampaignData.push(data);
       }
       else if(Difference_In_Days<0){
         this.pastCampaignData.push(data);
       }
       else{
         this.activeCampaignData.push(data)
      }
    });

  }

}
