import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { DocumentsComponent } from './documents/documents.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { DocumentsService } from './documents.service';
import { DocumentUserComponent } from './document-user/document-user.component';
import { CreateDocumentComponent } from './create-document/create-document.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CreateUserComponent,
    LoginComponent,
    DocumentsComponent,
    DocumentUserComponent,
    CreateDocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    DocumentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
