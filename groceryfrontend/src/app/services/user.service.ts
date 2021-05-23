import { Injectable } from '@angular/core';
import{ User} from '../models/User'
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import{Login} from '../models/login'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:8080/user/signup";
  private baseURL1 = "http://localhost:8080/user/signIn";
  public currentUser1;

  

  constructor(private http: HttpClient ,
    private router:Router) {
     
     }

  signUp(user: User): Observable<User> {
    
    return this.http.post<User>(`${this.baseURL}`, user);
  }


  login(login:Login): Observable<Login> {
    
    localStorage.setItem('currentUser', "7");
    this.getToken();
    return this.http.post<Login>(`${this.baseURL1}`, login);
    
    
}

logoutUser() {
 
  localStorage.removeItem('currentUser');
  
}


getToken(){
  return localStorage.getItem("currentUser");
}


}
