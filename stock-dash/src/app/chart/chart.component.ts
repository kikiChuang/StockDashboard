import { Component, OnInit, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  single: any[];
  
  
  @Input()
  multi: any[];

  view: any[] = [1024, 400];

  // options
  showXAxis = false;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Last Price';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  
  constructor() {
//     Object.assign(this, {single, multi});
//   console.log(this.multi);
  
  }
  
  onSelect(event) {
    console.log(event);
  }

 ngOnInit() {
     
   
  }

}
