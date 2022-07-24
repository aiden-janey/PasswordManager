import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { User } from './user.model';
import { Password } from './password.model';

@Injectable()
export class UserService {

  selectedUser: User;
  users: User[];
  passwords: Password[];

  readonly baseURL = 'http://localhost:8080/users/';

  constructor(private http: HttpClient) { }

  //Create A User
  postUser(u: User){
    return this.http.post(this.baseURL, u);
  }

  //Get All Users
  getUsers(){
    return this.http.get<User[]>(this.baseURL);
  }

  //Update User List
  putUserList(_id: string, list: Password[]){
    return this.http.put<Password[]>(this.baseURL + `/${_id}/list`, list);
  }

  deleteUser(_id: string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  //Get A User
  getAUser(_id: string|null){
    return this.http.get<User>(this.baseURL + `/${_id}`);
  }

  //Get A User's Passwords
  getUserPasswords(_id: string|null){
    return this.http.get<Password[]>(this.baseURL + `/${_id}/list`)
  }

}