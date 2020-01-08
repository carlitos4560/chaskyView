import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  url = "http://localhost:3000/documents"; // cambiar por document

  constructor(private httpClient: HttpClient) { }
  getDocument() {
    return this.httpClient.get(this.url);
  }

}
