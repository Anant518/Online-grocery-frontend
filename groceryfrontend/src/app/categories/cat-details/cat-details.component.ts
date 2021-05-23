import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import{ProductsService } from '../../services/products.service';
import { Router } from "@angular/router";




@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})


export class CatDetailsComponent  implements OnInit {
  data2: any;
   constructor(public categoryService:CategoryService, public productsService:ProductsService,
    public router:Router) { 
    }

  ngOnInit(): void {
    this.data2=this.categoryService.getCategory();
     console.log(this.data2)
  }
 
  
onclick(data){
  this.productsService.setProduct(data);
  console.log(data);
  this.router.navigate(['showdetails']);
}

}
