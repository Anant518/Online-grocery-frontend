import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
data1:any;
  private baseURL = "http://localhost:8080//product/";

  constructor(private httpClient: HttpClient) { }


  getProductList(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}`);
    console.log(this.baseURL);
  }

 

  setProduct(data){
    this.data1=data;   
    console.log(this.data1);
  }

  getProduct() {
    return this.data1;
  }

}




