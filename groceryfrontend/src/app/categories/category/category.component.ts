import { Injectable } from '@angular/core'
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})


@Injectable({
  providedIn: 'root'
})
export class CategoryComponent implements OnInit {

  categoryModel:any;
  data1:any;
  id:any;

  constructor(public categoryService:CategoryService,
    public router: Router) { }

  ngOnInit(): void {
    this.getCategory()
    
  }

  public getCategory(){
    this.categoryService.getCategoryList().subscribe(data => {       
      this.categoryModel = data;
      //  console.log(this.categoryModel); 
      
      
    });
  }
  onSelect(data1){
    this.data1=data1.products;
    
    this.categoryService.setCategory(this.data1)
    //console.log(this.data1);
  
  this.router.navigate(['/categoryDetails']);
  }

}
