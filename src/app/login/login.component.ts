import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup ;

  constructor(public formBuilder: FormBuilder, public loginServis: LoginService, private router: Router) {
    this.formLogin = formBuilder.group({
      name : new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
      // password : new FormControl('', [Validators.required, Validators.pattern("expresio regular ")])
    });
  }

  ngOnInit() {
  }

  login() {
    this.loginServis.postLogin(this.formLogin.value).subscribe(date => {
      if (date.codigo === 406) {
        alert(" los datos del usuario no corresponden");
        console.log(date);
      } else {
        localStorage.setItem("token", date.token);
        localStorage.setItem("codigo", date.user);
        localStorage.setItem("rol", date.rol);
        this.router.navigateByUrl('/documents');
      }
    });
  }
  
  crearUser() {
    this.router.navigateByUrl('/createUser');
  }
}
