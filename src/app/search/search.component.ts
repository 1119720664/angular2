import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input()
  private msg:string;
  formModel:FormGroup;
  categories:string[];
  constructor() {
     let fb = new FormBuilder(private:); /*简化formGroup代码*/
     this.formModel = fb.group({     /*有三个表单，所以加三个字段*/
         title:['',Validators.minLength(3)],
         price:['null',this.positiveNumberValidator],
         category:["-1"]
     })
  }

  ngOnInit() {
     console.log(this.msg);
  }

  positiveNumberValidator(control:FormControl):any{ /*自定义验证*/
       if(!control.value){
         return;
       }
       let price = parseInt(control.value);
       if(price < 0) {
         return {positiveNumber:true}
       }
  }

}
