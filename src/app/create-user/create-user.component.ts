import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  formCreateUser: FormGroup;
  constructor(private formBuilder: FormBuilder, private userServis: UserService, private router: Router) {
    this.formCreateUser = formBuilder.group({
      type_user : new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      last_name : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      fechaNacimiento : new FormControl('', [Validators.required]),
      userName : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  createUser() {
    // console.log(this.formCreateUser);
    this.userServis.postCrearUser(this.formCreateUser.value).subscribe(data => {
      console.log(data);
    });
    this.router.navigateByUrl('/documents');
    // console.log(this.formBuilde );
  }

}
