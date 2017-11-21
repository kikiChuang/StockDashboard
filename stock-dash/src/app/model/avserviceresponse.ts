import { RequestMetadata } from './requestmetadata';
import { StockValue } from './stockvalue';


export class AVServiceResponse {
  stockName: String;
  metadata: RequestMetadata;
  stocks: StockValue[];
  
  static getNewInstance(jsonData: JSON, delay: String): AVServiceResponse {
    
    const resp: AVServiceResponse = new AVServiceResponse();
    
    const md: JSON = jsonData['Meta Data'];
    resp.metadata = RequestMetadata.getNewInstance(md);
    
    resp.stockName = resp.metadata.Symbol;
    
    resp.stocks = new Array<StockValue>(); 
    
    let ts: JSON;
    const minDate: Date = new Date();
    
    
    if(delay==='1D') {
    	ts = jsonData['Time Series (5min)'];
    	minDate.setTime(minDate.getTime() - 1*24*60*60*1000);
    }
    else if(delay==='1W') {
        ts = jsonData['Time Series (30min)'];
        minDate.setTime(minDate.getTime() - 7*24*60*60*1000);
        
    }
    else if(delay==='1M') {
        ts = jsonData['Time Series (Daily)'];
        minDate.setTime(minDate.getTime() - 30*24*60*60*1000);
    }
    else if(delay==='3M') {
        ts = jsonData['Time Series (Daily)'];
        minDate.setTime(minDate.getTime() - 90*24*60*60*1000);
    }
    
    const keyList: String[] = Object.keys(ts);
    for (const key in keyList) {
        
        
        const keyString = keyList[key].toString();
        const keyDate: Date = new Date(keyString);
        
        if(keyDate.getTime() >= minDate.getTime()) {
            const value: JSON = ts[keyString];
            const sd: StockValue = StockValue.getNewInstance(keyString, value);
            resp.stocks.unshift(sd);
        }
        
    }
    return resp;
  }
}
