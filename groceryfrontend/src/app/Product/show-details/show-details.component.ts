import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'


@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

data1:any;
  product: any;
  constructor(private productsService:ProductsService) { }
  inputnumber = 0;
  ngOnInit() {
    // this.product=;
    
    this.data1=this.productsService.getProduct();
    console.log(this.data1);
  }


  
  plus()
  {
   this.inputnumber = this.inputnumber+1;
  }
  minus()
  {
    if(this.inputnumber != 0)
  {
   this.inputnumber = this.inputnumber-1;
  }
  
}
}