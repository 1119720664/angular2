import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[mobile]'   /*指令可以作为属性来使用*/
})
export class MobileValidatorDirective {
    constructor(el:ElementRef) {
        this.setColor(el)
    }
     private setColor(el:ElementRef){
      console.log(111,el.nativeElement.value,);
       if(el.nativeElement.value.length < 5 ) {
         el.nativeElement.style.backgroundColor="red";
       }
     }
}
