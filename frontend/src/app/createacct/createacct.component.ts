import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Router } from '@angular/router';
import * as crypto from 'crypto-js';

@Component({
  selector: 'app-createacct',
  templateUrl: './createacct.component.html',
  styleUrls: ['./createacct.component.css'],
  providers: [UserService]
})
export class CreateacctComponent implements OnInit {

  constructor(private US: UserService, private route: Router) { }

  username: string;
  password: string;

  ngOnInit(): void {
  }

  createAccount(): void{
    let user = new User();
    user.username = this.username;
    user.password = crypto.SHA3(this.password).toString(crypto.enc.Base64);

    this.US.postUser(user).subscribe(()=>{
      alert('Account Created');
      this.route.navigate(['/logIn']);
    });
  }
}
