import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageHeaderModule } from '../page-header/page-header.module';
import { RouterModule } from '@angular/router';

import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    PageHeaderModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

    //Material
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,

  ],
  exports:[ LoginComponent,RegisterComponent ,HttpClientModule],
})
export class AuthModule { }
