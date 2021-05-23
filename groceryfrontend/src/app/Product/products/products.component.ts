import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products';
import { Router } from "@angular/router";
import { ProductsService } from '../../services/products.service'
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  productModel:any;

  
  constructor(private productsService:ProductsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProduct()
  }


  private getProduct(){
    this.productsService.getProductList().subscribe(data => {       
      this.productModel = data;
      
      console.log(this.productModel); 
    });
  }
onclick(data){
  this.productsService.setProduct(data);
  console.log(data);
  this.router.navigate(['showdetails']);
}
}
