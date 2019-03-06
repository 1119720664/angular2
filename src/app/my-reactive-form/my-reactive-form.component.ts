import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-my-reactive-form',
  templateUrl: './my-reactive-form.component.html',
  styleUrls: ['./my-reactive-form.component.css']
})
export class MyReactiveFormComponent implements OnInit {

  /*自定义的检验器*/
  xxxxx(control:AbstractControl):{[key:string]:any} {
      return null;
  }

  /*自定义密码和确认密码是否一致验证*/
  equalValidator(group:FormGroup):any {
      let password:FormControl = group.get("password") as FormControl;
      let Conpassword:FormControl = group.get("Conpassword") as FormControl;
      let valid:boolean = (password.value === Conpassword.value);
      return valid ? null : { mobile:true}
  }
 /* formModel:FormGroup = new FormGroup({
    username:new FormControl(""),
    dateRange:new FormGroup({
      from:new FormControl(),
      to:new FormControl()
    }),
    emails: new FormArray([
      new FormControl("a@a.com"),
      new FormControl("b@b.com"),
      new FormControl("c@c.com"),
    ])
  });*/
  formModel:FormGroup;
  constructor(fb:FormBuilder) {
      this.formModel = fb.group({
        username:['',[Validators.required,Validators.minLength(6)]],
        dateRange:fb.group({
            from:[''],
            to:['']
        }),
        emails:fb.array(['','',''])
      })
  }

  onSubmit() {
    let isValid:boolean = this.formModel.get("username").valid;
    console.log(isValid);
    console.log(this.formModel.value)
  }

  ngOnInit() {
  }

}
