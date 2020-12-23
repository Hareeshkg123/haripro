import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User;
  users: User[];
  readonly baseURL = 'http://localhost:3000/users';

  constructor(private http:HttpClient) { }
    postUser( usr : User){
      return this.http.post(this.baseURL,usr);
  }
  getUserList(){
    return this.http.get(this.baseURL);
  }
  putUser(usr: User) {
    return this.http.put(this.baseURL + `/${usr._id}`, usr);
  }
  deleteUser(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
