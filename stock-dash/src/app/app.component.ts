import { Component,  Input, TemplateRef } from '@angular/core';
import { AlphaVantageService } from './alpha_vantage/alphavantage.service';
import { AVServiceResponse } from './model/avserviceresponse';
// import { ChartComponent } from './chart/chart.component';
import { StockValue } from './model/stockvalue';
import { Response } from '@angular/http';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import {single, multi} from '../data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

//  private alphaVantageService: AlphaVantageService;
  
    multi: any[] = [];
  
   modalRef: BsModalRef;
  
  
  constructor(private alphaVantageService: AlphaVantageService, private modalService: BsModalService) {
    this.updateChart();
   }

  title = 'Stock Dashboard';
  StockList: String[] = ['MSFT', 'AAPL'];
  DelayList: String[] = ['1D', '1W', '1M', '3M'];
  SelectedDelay: String = '1D';
  modalSelectedStock: String = '';
  selectedStock: String = 'MSFT';
  
  onStockAdd(template: TemplateRef<any>) {
    console.log('onstockAdd');
    this.modalRef = this.modalService.show(template);
  }
  onStockAddModal() {
    if (this.modalRef) {
      console.log('a' + this.modalSelectedStock);
       this.modalRef.hide();
        if (this.modalSelectedStock != null && this.modalSelectedStock.length > 0) {
          console.log('b');
         this.StockList.push(this.modalSelectedStock);
        }
    }
  }
  
  onStockClick(stock: String) {
    console.log('clicked ' + stock);
    this.selectedStock = stock;
    this.updateChart();
  }
  
  onDelayClick(delay: String) {
    this.SelectedDelay = delay;
    this.updateChart();
  }
  
  updateChart() {
     this.alphaVantageService.getIntraday(this.selectedStock, this.SelectedDelay)
       .subscribe( (res: Response) => {
    
    console.log(res.json());
    let data: String  = '';
    const result: AVServiceResponse = AVServiceResponse.getNewInstance(res.json(), this.SelectedDelay);
    const stockName =  result.metadata.Symbol;
    
    let series = '[';
    
    
    for (let i = 0; i < result.stocks.length; i++) {
      const stock: StockValue = result.stocks[i];
      
      series += '{"name": "' + stock.timestamp + '", "value": "' + stock.close + '"}';
      
     if (i < result.stocks.length - 1) {
       series += ', ';
     }
      
    }
         
    
    series += ']';
    
    data += '{"name": "' + stockName + '", "series": ' + series + '}';
         console.log('data');
    
    
//    this.multi = null;
    
//    this.multi = JSON.parse(data.toString());
         
         
         if (this.multi && this.multi.length > 0) {
           this.multi.pop();
         }
         
         this.multi.push(JSON.parse(data.toString()));
           this.multi = [...this.multi];
       }
      );
  }
}

