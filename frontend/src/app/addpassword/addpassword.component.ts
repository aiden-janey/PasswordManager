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
    let password = {
      site: this.site,
      user: this.user,
      pass: this.pass
    };
    //let encrypted = crypto.AES.encrypt(JSON.stringify(password), this.id!).toString();
    this.US.passwords.push(password);
    this.US.putUserList(this.US.selectedUser._id, this.US.passwords).subscribe((res)=>{
      res = this.US.passwords;
      console.log(res);
    });
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

  generatePass(): string{
    const nums: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const letters: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w","x","y","z"];
    const special: string[] = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", 
    "=", "+", "~", "`", "?", "/", "|", "<", ">", ":", ";", "]", "[", "{", "}"];
    let gennedPass: string = "";
    for(let i:number = 0; i < 15; i++){
      let indexChar: number = Math.floor(Math.random()*4);
      let arrayIndex: number;
      switch(indexChar)
      {
          case 0:
              //lowercase letter
              arrayIndex = Math.floor(Math.random()*letters.length-1);
              gennedPass += letters[arrayIndex];
              break;
          case 1:
              //uppercase letter
              arrayIndex = Math.floor(Math.random()*letters.length-1);
              gennedPass+= letters[arrayIndex].toUpperCase();
              break;
          case 2:
              arrayIndex = Math.floor(Math.random()*nums.length-1);
              gennedPass += nums[arrayIndex];
              break;
          default:
              arrayIndex = Math.floor(Math.random()*special.length-1);
              gennedPass += special[arrayIndex];
              break;   
      }
    }
    return gennedPass;
  }
}
