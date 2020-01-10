import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DocumentsService } from '../documents.service';

@Component({
  selector: 'app-document-user',
  templateUrl: './document-user.component.html',
  styleUrls: ['./document-user.component.css']
})
export class DocumentUserComponent implements OnInit {
  document;
  constructor(private documentServis: DocumentsService, private router: Router) { }

  ngOnInit() {
    this.getDocument();
  }
  getDocument() {
    let id = localStorage.getItem("codigo");
    console.log(id);
    this.documentServis.getDocumentUser(id).subscribe(date => {
      this.document = date;
      console.log(this.document);
    });
  }
  deleteDocument(){

  }

}
