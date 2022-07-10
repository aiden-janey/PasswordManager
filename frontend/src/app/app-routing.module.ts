import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { PasswordpageComponent } from './passwordpage/passwordpage.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { CreateacctComponent } from './createacct/createacct.component';

const routes: Routes = [
  {path: 'logIn', component: LoginComponent},
  {path:'', redirectTo:'/logIn', pathMatch:'full'},
  {path: 'passwordPage', component: PasswordpageComponent},
  {path: 'changePass', component: ChangepassComponent},
  {path: 'createAcct', component: CreateacctComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
