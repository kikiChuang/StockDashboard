export class RequestMetadata {
  Information: String;
  Symbol: String;
  LastRefreshed: String;
  Interval: String;
  OutputSize: String;
  TimeZone: String;
  
  static getNewInstance(jsonObject: JSON): RequestMetadata {
    
    
     const m: RequestMetadata = new RequestMetadata();
    m.Information = jsonObject['1. Information'];
    m.Symbol = jsonObject['2. Symbol'];
    m.LastRefreshed = jsonObject['3. Last Refreshed'];
    m.Interval = jsonObject['4. Interval"'];
    m.OutputSize = jsonObject['5. Output Size'];
    m.TimeZone = jsonObject['6. Time Zone'];
    return m;
  }
}
