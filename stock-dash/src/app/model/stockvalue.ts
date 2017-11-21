export class StockValue {
  
  timestamp: String;
  open: String;
  close: String;
  high: String;
  low: String;
  volume: String;
  
  
  static getNewInstance(key: String, jsonData: JSON): StockValue {
    
    const sd: StockValue = new StockValue();
    sd.timestamp = key;
    sd.open = jsonData['1. open'];
    sd.high = jsonData['2. high'];
    sd.low = jsonData['3. low'];
    sd.close = jsonData['4. close'];
    sd.volume = jsonData['5. volume'];
    
    return sd;
  }
}
