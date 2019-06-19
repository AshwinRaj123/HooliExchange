import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  constructor(private http: HttpClient) { }

  getRates(baseCurr){
    return this.http.get("https://api.exchangeratesapi.io/latest?base="+baseCurr);
  }

  getRatetiming(baseCurr,currentDate,prevDate){
    return this.http.get("https://api.exchangeratesapi.io/history?start_at="+prevDate+"&end_at="+currentDate+"&base="+baseCurr);
  }
}
