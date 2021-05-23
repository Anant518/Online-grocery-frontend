import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/categoryModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseURL = "http://localhost:8080/category/";
 
  data1:any;

  constructor(private httpClient: HttpClient) { }

  getCategoryList(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}`);
    console.log(this.baseURL);
  }
  
  getCategoryDetails(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}`);
    console.log(this.baseURL);
  }


  getCategory() {
    return this.data1;
  }

  setCategory(data){

    this.data1=data;
    
  }


}