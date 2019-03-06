import {Component, OnInit, OnChanges, SimpleChange, Input} from '@angular/core';

@Component({
  selector: 'app-achild',
  templateUrl: './achild.component.html',
  styleUrls: ['./achild.component.css']
})
export class AchildComponent implements OnInit {

  @Input()
  green:string;

  @Input()
  user:{name:string};

  message:string = "初始化消息";


  constructor() { }

  ngOnChanges(changes:SimpleChange):void {
     console.log(changes,null,2)
  }

  ngOnInit() {
  }

}
