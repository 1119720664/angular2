import {Component, EventEmitter, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  green:string = "Hello";
  user:{name:string} = {name:"Tom"};
  stockCode:string = "IBM";
  price:number;
  @Output()
  lastPrice:EventEmitter<PriceQuote> = new EventEmitter();
  @Output()
  buy:EventEmitter<PriceQuote> = new EventEmitter();

  constructor() {
      setInterval(()=>{
          let priceQuote:PriceQuote = new PriceQuote(this.stockCode,Math.random()*100);
          this.price = priceQuote.lastPrice;
          this.lastPrice.emit(priceQuote);
      },1000);
  }

  buyStock(event) {
    this.buy.emit(new PriceQuote(this.stockCode,this.price))
  }
  ng
  ngOnInit() {}
}

 export class PriceQuote {
     constructor(
       public stockCode:string,
       public lastPrice:number
     ){

     }
 }
