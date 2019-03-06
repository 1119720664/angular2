import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  curContact: object = {
    name: ''
  };
  user: { name: string } = {name: "Tom"};

  constructor() {
  }

  onSubmit(value: any) {
    console.log(value)
  }

  ngOnInit() {
  }

}
