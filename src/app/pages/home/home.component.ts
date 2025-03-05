import { Component, OnInit } from '@angular/core';
import { Observable, of ,take} from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { Olympic } from '../../core/models/Olympic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public olympics$: Observable<any> = of(null);
  countries$: any =[]; 

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();

  }




  getYears(){
    var my_object:any = localStorage.getItem('chart_data');
    var values = JSON.parse(my_object);

    let years : any =[];
    
    values.forEach((item: any) => {
      
      for (let i = 0; i < item.participations.length; i++) {
        years.push(item.participations[i].year);
      }
    });
   
    let result = this.removeDuplicateYears(years);
    return result;
//console.log("Years",result); 
  }


 removeDuplicateYears(arr:any) {
    let nonRepeatingArray: any =[];

    arr.forEach((item: any) => {
        if (!nonRepeatingArray.includes(item)) {
            nonRepeatingArray.push(item);
        }
    });

    return nonRepeatingArray;
}






}
