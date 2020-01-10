import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DocumentsService } from '../documents.service';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.css']
})
export class CreateDocumentComponent implements OnInit {

  formDocumentNew: any;
  constructor(public formBuilder: FormBuilder, public documentService: DocumentsService, private router: Router) {
    this.formDocumentNew =  formBuilder.group({
      titulo : new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {

  }


  crearDocument(){
    let id =  localStorage.getItem("codigo");
    console.log(id);
    if (id !== null) {
      let object = {id_user: id, titulo: this.formDocumentNew.value.titulo, description: this.formDocumentNew.value.description}
      console.log(object);
      this.documentService.postCreateDocument(this.formDocumentNew.value).subscribe(date => {
        console.log(date);
      });
    } else {
      alert("debe iniciar sesion antes de crear un documento");
    }
  }
}
