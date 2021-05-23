import { Component, OnInit } from '@angular/core';
import{ User } from '../models/User';
import{ UserService } from '../services/user.service';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = new User;
  showMsg: boolean = false;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.signUp(this.user).subscribe( data =>{
      console.log(data);
      this.router.navigate(['/home'])
      this.onplace();
      // alert("Sucess");
    },
    error => console.log(error));
  }

  onplace(){
    Swal.fire({
      title:'Your SignUp Success',
      confirmButtonText: 'ok',
      icon:'success',
    })
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
    
     
  }
  // onSubmit() {
  //   this.userService.signUp(this.user).subscribe(u => {
  //     this.router.navigate(['login']);
  //   },
  //       e => {});
}

