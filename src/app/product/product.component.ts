import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  constructor() {
    this.products = [
      new Product(1,"第一个商品",1.99, 1.5,"这是第一个商品,是我在学习Angular入门和实战教程",["电子商品1","硬件设备1"]),
      new Product(2,"第二个商品",1.99, 2.5,"这是第二个商品,是我在学习Angular入门和实战教程",["电子商品2","硬件设备2"]),
      new Product(3,"第三个商品",1.99, 3.5,"这是第三个商品,是我在学习Angular入门和实战教程",["电子商品3","硬件设备3"]),
      new Product(4,"第四个商品",1.99, 4.5,"这是第四个商品,是我在学习Angular入门和实战教程",["电子商品4","硬件设备4"]),
      new Product(5,"第五个商品",1.99, 0.5,"这是第五个商品,是我在学习Angular入门和实战教程",["电子商品5","硬件设备5"]),
      new Product(6,"第六个商品",1.99, 5.0,"这是第六个商品,是我在学习Angular入门和实战教程",["电子商品6","硬件设备6"])
    ]
  };

  showProductInfo() : string{
     alert(123);
     return ""
  }

   ngOnInit() {             /*改方法实例化以后只调用一次*/

   }

}

export class Product {
  /*    public id:number;
      public title:string;
      public price:number;
      public rating:number;
      public desc:string;
      public categories:Array<string>;    注:写在constructor里和外面的区别 */

    constructor(
      public id:number,
      public title:string,
      public price:number,
      public rating:number,
      public desc:string,
      public categories:Array<string>
    ) {}
}
