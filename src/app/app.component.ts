import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";
import {PriceQuote} from "./a/a.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   private msg:string;
   priceQuote:PriceQuote = new PriceQuote("",0);
   constructor(private router: Router) {
       this.msg= "123"
   }

    toProductDetails() {
        this.router.navigate(["/product"]);
    }

    priceQuoteHandler(event:PriceQuote) {
       console.log(event);
       this.priceQuote = event;
    }

  buyHandler(event:PriceQuote){
       this.priceQuote = event;
    }
}
