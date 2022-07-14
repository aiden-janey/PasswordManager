import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Password } from '../shared/password.model';
import * as crypto from 'crypto-js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-passwordpage',
  templateUrl: './passwordpage.component.html',
  styleUrls: ['./passwordpage.component.css'],
  providers: [UserService]
})
export class PasswordpageComponent implements OnInit {

  constructor(private US: UserService, private route: Router) { }

  decryptedPasswords: Password[]
  id = sessionStorage.getItem('userId');

  ngOnInit(): void {
    this.getUser(this.id);
    this.getUserPass(this.id);
  }

  getUS(): UserService{
    return this.US;
  }

  endSession(): void{
    sessionStorage.removeItem('userId');
  }

  getUser(id: string|null): void {
    this.US.getAUser(id).subscribe((res) =>{
      this.US.selectedUser = res as User;
    });
  }

  getUserPass(id: string|null): void{
    this.US.getUserPasswords(id).subscribe((res)=>{
      this.US.passwords = res as Password[];
    })
  }

  // decryptPasswords(list: Password[], id: string|null){
  //   for(let password of list){
  //     let decrypted = JSON.parse(crypto.AES.decrypt(password, id).toString(crypto.enc.Utf8));
  //     this.decryptPasswords.push(decrypted);
  //   }
  // }
}

