import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateacctComponent } from './createacct/createacct.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { PasswordpageComponent } from './passwordpage/passwordpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateacctComponent,
    ChangepassComponent,
    PasswordpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
