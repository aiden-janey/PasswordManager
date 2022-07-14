import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Observable, interval, take } from 'rxjs';
import { Router } from '@angular/router';
import * as crypto from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  constructor(private US: UserService, private route: Router) { }
  
  username: string;
  password: string;


  ngOnInit(): void {
    this.fillUsersList();
  }

  checkCredentials(): void {
    let userFoundFlag = 0;
    for(let user of this.US.users){
      if(this.username == user.username && crypto.SHA3(this.password).toString(crypto.enc.Base64) == user.password){
        userFoundFlag++;
        sessionStorage.setItem('userId', user._id);
        this.route.navigate(['/passwordPage']);
      }
    }
    if(userFoundFlag != 1){
      alert("Incorrent Username or Password");
      this.username = "";
      this.password = "";
    }
  }

  fillUsersList(): void {
    this.US.getUsers().subscribe((res) => this.US.users = res as User[]);
  }
}
