import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Observable, interval, take } from 'rxjs';
import { Router } from '@angular/router';

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

  usersList: User[];


  ngOnInit(): void {
    this.fillUsersList();
  }

  checkCredentials(): void {
    let userFoundFlag = 0;
    for(let user of this.usersList){
      if(this.username == user.username && this.password == user.password){
        this.route.navigate(['/passwordPage']);
        userFoundFlag++;
      }
    }
    if(userFoundFlag != 1){
      alert("Incorrent Username or Password");
      this.username = "";
      this.password = "";
    }
  }

  fillUsersList(): void {
    this.US.getUsers().subscribe(users => this.usersList = users);
  }
}
