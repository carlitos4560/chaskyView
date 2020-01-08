import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../documents.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  documents: any;

  constructor(private serviceDocument: DocumentsService, private httpClient: HttpClient) {
    this.getDocuments();
  }

  ngOnInit() {
  }

  getDocuments() {
    this.serviceDocument.getDocument().subscribe(data => {
      this.documents = data;
      console.log(this.documents);
    });
  }



}
