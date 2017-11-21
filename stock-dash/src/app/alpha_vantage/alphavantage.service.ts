import { AVServiceResponse } from '../model/avserviceresponse';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AlphaVantageService {

  private baseUrl = 'https://www.alphavantage.co/query';

	

  constructor(private http: Http) { }

  getIntraday(stock: String, interval: String): Observable<Response> {


	let url = this.baseUrl + '?symbol=' + stock + '&apikey=8XXGECY1IGBYQQPN';

	if(interval === '1D') {
		url +=  '&outputsize=compact&function=TIME_SERIES_INTRADAY&interval=5min'; 
	}
	else if (interval === '1W') {
		url +=  '&outputsize=compact&function=TIME_SERIES_INTRADAY&interval=30min'; 
	}
	if(interval === '1M'){
		url +=  '&outputsize=compact&function=TIME_SERIES_DAILY';
	}
	if (interval === '3M') {
		url +=  '&outputsize=compact&function=TIME_SERIES_DAILY';
	}
	

    
      console.log('url ' + url);
      const resp: Observable<Response> = this.http.get(url, {})
      // .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
//      .map((res: Response) => {console.log(res.json());  return res.json(); })
//      .subscribe((val: JSON) => json = val)
        ;

    return resp;
  }
}

