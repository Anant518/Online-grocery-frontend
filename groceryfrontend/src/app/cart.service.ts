import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CartService {
 baseURL="http://localhost:8080/cart/";
  constructor(private httpClient:HttpClient) { }
  
  getCartList() {
    return this.httpClient.get<any>(`${this.baseURL}`);
    console.log(this.baseURL);
  }

}
