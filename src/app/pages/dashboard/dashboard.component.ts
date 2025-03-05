import { Component } from '@angular/core';
import { AgCharts } from "ag-charts-angular";
import { AgChartOptions } from "ag-charts-community";
import { OlympicService  } from '../../core/services/olympic.service';
import { Olympic } from '../../core/models/Olympic';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AgCharts],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


  countries: Olympic[] = [];
  chartData: any = [];
  public chartoptions:AgChartOptions;

  constructor(public olympicsService: OlympicService) { 

 

    this.chartoptions = {
      data: this.getChartData(),
      title: {
        text: "Medals Per Country",
      },
      
      series: [
        {
          type: "pie",
          angleKey: "amount",
          //legendItemKey: "asset",
          calloutLabelKey: "asset",
          //sectorLabelKey: "amount",
          /*
          sectorLabel: {
            color: "white",
            fontWeight: "bold",
            formatter: ({ value }) => `$${(value / 1000).toFixed(0)}K`,
          },*/
        },
      ],

      listeners: {
        seriesNodeClick: ({ datum, xKey, yKey, seriesId }) => {
          window.location.href='/details/'+datum.id;
        
        
        },
      },
    };
   

      



   

  }





  ngOnInit(): void {
    
   

this.olympicsService.getOlympics().subscribe((data: Olympic[])=>{
      localStorage.setItem('chart_data',  JSON.stringify(data));
    }) 

    //console.log("Years",this.getYears());
    
  }



  getChartData(){

    

    var my_object:any = localStorage.getItem('chart_data');

    var values = JSON.parse(my_object);

    values.forEach((item: any) => {
      
      this.chartData.push({
        id:item.id,
        asset:item.country,
        amount:this.getCountryMedals(item.id)

      });
    
    });
    


    return this.chartData;
   
  }


  



  getCountryMedals(id:number){

  

    var my_object:any = localStorage.getItem('chart_data');
 
  
     var values = JSON.parse(my_object);
 
     
     
 let sum = 0;
 
 values.forEach((item: any) => {
   if (item.id ===id) {
     
 
     for (let i = 0; i < item.participations.length; i++) {
       sum += item.participations[i].medalsCount;
     }
     
 
   }
 
 });
 
 
 
 
 
    return sum;
   
   
     
   }

  


}
