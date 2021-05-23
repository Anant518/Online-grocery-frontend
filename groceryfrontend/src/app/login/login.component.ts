import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
import{ Role } from '../Enum/Role'
import { User } from '../models/User'
import { Login } from '../models/login';

import Swal from 'sweetalert2';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
token1:any;
  login2: Login = new Login;
  constructor(private userService: UserService,
    private router: Router) { }  
  ngOnInit(): void {
    
  }

  

  login1(){
    this.userService.login(this.login2).subscribe(data =>{
          console.log(data);
         
          this.router.navigate(['/home'])
          this.onplace();
         
    },
    error => console.log(error));
  }


  
  onplace(){
    Swal.fire({
      title:'Your Logged In Successfuly',
      confirmButtonText: 'ok',
      icon:'success',
    })
  }

  onSubmit(){
    console.log(this.login2);
    
     this.login1();
  }


  

  // onSubmit() {


  //   this.userService.login(this.login).subscribe( data =>{
  //     console.log(data);     
  //   },
  //   error => console.log(error));
    // this.submitted = true;
    // this.userService.login(this.user).subscribe(
    //     user => {
    //         if (user) {
    //             if (user.role != Role.Customer) {

    //                 this.returnUrl = '/seller';
    //             }

    //             this.router.navigateByUrl(this.returnUrl);
    //         } else {
    //             this.isLogout = false;
    //             this.isInvalid = true;
    //         }

    //     }
    // )
}


//