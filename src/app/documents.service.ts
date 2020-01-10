import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  url = "http://localhost:3000/"; // cambiar por document

  constructor(private httpClient: HttpClient) { }
  getDocument() {
    return this.httpClient.get(this.url + 'documents');
  }

  getDocumentUser(id) {
    let token = localStorage.getItem('token');
    let httpOptions = {
      headers: {
        'x-access-token': token,
        'Authorization': id
      }
    }
    return this.httpClient.get(this.url + 'document/' + id, httpOptions);
  }

  postCreateDocument(date) {
    return this.httpClient.post(this.url + 'createDocument', date);
  }
}
