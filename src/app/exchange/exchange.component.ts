import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RatesService } from '../rates.service';
import { Observable } from 'rxjs';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
 
})
export class ExchangeComponent implements AfterViewInit,OnInit{
     
    rates$:Object;
    ratesTime$:Object;
    myDate;
    currenDate;
    prevDate;
    searchText;
   constructor(private data: RatesService){}

    ngOnInit(){
      
      this.currenDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
      
      var d = new Date();
      var prev_date = d.setDate(d.getDate() -1);
      this.prevDate = formatDate(prev_date, 'yyyy-MM-dd', 'en');
      
      this.data.getRates(this.selectedCurr).subscribe(
        data =>this.rates$ = data
      );

      this.data.getRatetiming(this.selectedCurr,this.currenDate,this.prevDate).subscribe(
        data =>this.ratesTime$ = data
      );
    
    }
     
  //event handler for the select element's change event
  selectedCurr = "JPY";
   country_code = [
      { currCode: "USD"},
      { currCode: "EUR"},
      { currCode: "INR"},
      { currCode: "CHF"},
      { currCode: "CNY"},
      { currCode: "PHP"},
      { currCode: "JPY"}];

     ngAfterViewInit(){
        document.getElementById(this.selectedCurr).style.display = "none";
      }
     
    
    hiddeDiv(){
      
        this.ngOnInit();
        var currentValue = this.selectedCurr;
        var previousValue = document.getElementById("hidden_field").innerText;
        
        if (previousValue != "")
        {
            document.getElementById("hidden_field").innerText=currentValue;
            document.getElementById(this.selectedCurr).style.display = "none";
            document.getElementById(previousValue).style.display = "block";
        }
        else
        {
          if(this.selectedCurr == "JPY"){
            document.getElementById("hidden_field").innerText=currentValue;
            document.getElementById(this.selectedCurr).style.display = "none";  
          }
          else{
            document.getElementById("hidden_field").innerText=currentValue;
            document.getElementById(this.selectedCurr).style.display = "none";
            document.getElementById("JPY").style.display = "block";    
          }
          
            
        }
       
      }

     
    
}
