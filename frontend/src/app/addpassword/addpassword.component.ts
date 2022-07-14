import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { Password } from '../shared/password.model';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import * as crypto from 'crypto-js';

@Component({
  selector: 'app-addpassword',
  templateUrl: './addpassword.component.html',
  styleUrls: ['./addpassword.component.css'],
  providers: [UserService]
})
export class AddpasswordComponent implements OnInit {

  constructor(private US: UserService, private route: Router) { }

  site: string;
  user: string;
  pass: string;
  id = sessionStorage.getItem('userId');
  encryptedPasswords: Password[];

  ngOnInit(): void {
    this.getUser(this.id);
    this.getUserPass(this.id);
  }

  createPassword(): void{
    let password = new Password();
    password.site = this.site;
    password.user = this.user;
    password.pass = this.pass;
    //let encrypted = crypto.AES.encrypt(JSON.stringify(password), this.id!).toString();
    this.US.passwords.push(password);
    console.log(password);
    this.US.putUser(this.US.selectedUser._id, this.US.selectedUser);
    this.route.navigate(['/passwordPage']);
  }

  getUS(): UserService{
    return this.US;
  }

  getUser(id: string|null): void {
    this.US.getAUser(id).subscribe((res) =>{
      this.US.selectedUser = res as User;
    });
  }

  getUserPass(id: string|null): void{
    this.US.getUserPasswords(id).subscribe((res)=>{
      this.US.passwords = res as Password[];
    });
  }
}
