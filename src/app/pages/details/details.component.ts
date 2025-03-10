import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OlympicService  } from '../../core/services/olympic.service';
import { Participation} from '../../core/models/Participation';
import { AgChartOptions } from "ag-charts-community";



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  chartData:Participation[] = [] = [];
  id!: number;
  country!:any;
  public errorMessage = false;
  public chartoptions:AgChartOptions;



  constructor(public olympicsService: OlympicService,private route: ActivatedRoute,private router: Router)
  { 
    
    
    this.chartoptions = {
      data: this.getChartData(),
      series: [
        {
          type: "line",
          xKey: "year",
          yKey: "medals",
          yName: "Medals",
        },
       
      ],
    };


  }






  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
          
    this.id=id;

    this.olympicsService.getOlympics().subscribe(data=>{
      


      for (let i = 0; i < data.length; i++) {
        if (id===data[i].id) {
          this.country = data[i];

          this.errorMessage = Number(data[i].id) === id ||  data[i].length === 0;
         
        }
      }
      

    });
  }




  getChartData(){
    
    let data : any = [];
    const id = Number(this.route.snapshot.paramMap.get('id'));
    let my_object:any = localStorage.getItem('chart_data');
    let values = JSON.parse(my_object);
    
    values.forEach((item: any) => {
      if (item.id ===id) {
        for (let i = 0; i < item.participations.length; i++) {
          data.push({
            id:item.participations[i].id,
            year:item.participations[i].year,
            city:item.participations[i].city,
            medals: item.participations[i].medalsCount,
            athletes: item.participations[i].athleteCount,
          });
        }
      }
    });
    return  data;

  }




  getCountryAtthletes(id:number){
    
    let my_object:any = localStorage.getItem('chart_data');
    let values = JSON.parse(my_object);
    let sum = 0;
    
    values.forEach((item: any) => {
      if (item.id ===id) {
        
        for (let i = 0; i < item.participations.length; i++) {
          sum += item.participations[i].athleteCount;
        }
      }
    });
    
    return sum;
  }




  getCountryMedals(id:number)
  {
   let my_object:any = localStorage.getItem('chart_data');
    let values = JSON.parse(my_object);
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
