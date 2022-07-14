import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateacctComponent } from './createacct/createacct.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { PasswordpageComponent } from './passwordpage/passwordpage.component';
import { HttpClientModule } from '@angular/common/http';
import { AddpasswordComponent } from './addpassword/addpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateacctComponent,
    ChangepassComponent,
    PasswordpageComponent,
    AddpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
