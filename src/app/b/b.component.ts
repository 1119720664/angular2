import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PriceQuote} from "../a/a.component";

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
  private productId:number;

  @Input()
  priceQuote:PriceQuote;

  constructor(private routeInfo:ActivatedRoute) {
    this.priceQuote = new PriceQuote("IBM",0)
  }

  ngOnInit() {
    this.productId = this.routeInfo.snapshot.queryParams["id"];
    this.routeInfo.params.subscribe((params:Params)=> this.productId = params["id"])
  }

}
