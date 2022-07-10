import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable()
export class UserService {

  selectedUser: User;
  users: User[];
  readonly baseURL = 'http://localhost:8080/users/';

  constructor(private http: HttpClient) { }

  postUser(u: User){
    return this.http.post(this.baseURL, u);
  }

  getUsers(){
    return this.http.get<User[]>(this.baseURL);
  }

  putUser(u: User){
    return this.http.put(this.baseURL + `/${u._id}`, u)
  }

  deleteUser(_id: string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}