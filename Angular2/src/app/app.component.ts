import { Component } from '@angular/core';
import { ProductsServices} from './products.service'
import {Products} from './products';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{name}}</h1>
  
  
  // `,
  templateUrl: `app/app.component.html`,
  // styles: ['.desc {font-size: 20px; color: blue;}'],
  styleUrls: ['./app.style.css'],
  providers: [ProductsServices]
})
export class AppComponent  { 
  name : string= 'James';
  email : string = "james@gmail.com";
  show : boolean = true;
  students : any[] = [{"name":"james","email":"james@gmail.com", "mobile":234234,"id":323},{"name":"vimal","email":"vinmal@gmail.com", "mobile":234234,"id":303},{"name":"kishore","email":"kishore@gmail.com", "mobile":34234234,"id":313},{"name":"sureh","email":"suresh@gmail.com", "mobile":234435345,"id":345},{"name":"krish","email":"krish@gmail.com", "mobile":432234324,"id":320}];
  imagePath : string = 'app/img/1.jpg';
  cartProducts: any[] = [];  
  products: Products[];
  ind:number = 1;
  constructor(private prodserv: ProductsServices){}

  // function implementing
  getNameInCaps(name: string){
    return name.toUpperCase();
    
  }  

  ngOnInit() : any{
    this.prodserv.getProducts().subscribe( products => this.products = products);

    return this.products;
  }

  
  cart(pname:string,pid:number,pcost:string,image:string){
    this.cartProducts.push({"pname":pname,"pid":pid,"pcost":pcost,"image":image,"ind":this.ind});
    this.ind++;
  }

  del(ind:number){
    for(let i=0; i< this.cartProducts.length; i++){
      if(this.cartProducts[i].ind == ind){
        this.cartProducts.splice(i,1);
      }
    }
  }



 }
