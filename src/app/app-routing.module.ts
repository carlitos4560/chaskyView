import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DocumentsComponent } from './documents/documents.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'documents', component: DocumentsComponent},
  { path: 'createUser', component: CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// { path: 'createUser', component: CreateUserComponent},
//
//   { path: 'createDocument', component: LoginComponent}
