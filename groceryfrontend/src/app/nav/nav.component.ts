import { Component, OnInit } from '@angular/core';
import{ UserService } from '../services/user.service';
import { Router } from "@angular/router";

import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
token:string;
token1:string='7';
  

  constructor(public userService:UserService,public router:Router) { }

  ngOnInit(): void {
    this.token=localStorage.getItem("currentUser");
  }

  onSelect(){
    this.userService.logoutUser();
    this.ngOnInit();
    this.onplace();
    
  }

  onSelect1(){    
    this.ngOnInit();  
  }

  onplace(){
    Swal.fire({
      title:'Your Logout Successfuly',
      confirmButtonText: 'ok',
      icon:'success',
    })
  }
}
