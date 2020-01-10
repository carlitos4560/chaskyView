import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) {  }

  getUser() {
    return this.httpClient.get(this.url + 'users');
  }

  postCrearUser(date){
    return this.httpClient.post(this.url + 'createUser', date);
  }

}
