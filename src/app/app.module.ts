import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { PageHeaderModule } from './page-header/page-header.module';
import { AuthModule } from './auth/auth.module';

import { ErrorInterceptor } from './auth/customer-service/suport-utility/error.interceptor';
import { localBackendProvider } from './auth/customer-service/suport-utility/local-backend';
import { HomePageModule } from './home-page/home-page.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from './auth/customer-service/authentication.service';
import { MessageService } from './auth/customer-service/message.service';
import { JwtInterceptor } from './auth/customer-service/suport-utility/jwt.interceptor';
import { UserService } from './auth/customer-service/user.service';
import { AuthGuard } from './auth/customer-service/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PageHeaderModule,
    HomePageModule,
    AppRoutingModule,
    AuthModule,
  ], 
 /* 
  providers: [
    AuthGuard,
    AuthenticationService,
    MessageService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    localBackendProvider

],*/
  bootstrap: [AppComponent]
})
export class AppModule { }
