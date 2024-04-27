import { HttpClient } from '@angular/common/http';
import { Injectable, input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  fetchUsers() {
    return this.http.get<any>(' https://reqres.in/api/users?page={page}')
  }

  fetchUserDetails(userId:number) {
    return this.http.get<any>('https://reqres.in/api/users/' + userId)
  }
}
