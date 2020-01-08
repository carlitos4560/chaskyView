import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  url = `http://localhost:3000/`;

  constructor(public httpClient: HttpClient) { }

  public postLogin(login) {
    const aux: any = this.httpClient.post('http://localhost:3000/login', login);
    return aux;
  }
}
