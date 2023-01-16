import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../customer-service/authentication.service';
import { MessageService } from '../customer-service/message.service';
import { first } from 'rxjs';
import { User } from 'src/app/user-model.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  logInForm!: FormGroup;
  returnUrl!: string;
  loading = false;
  submitted = false;

  constructor(
    private router: Router, 
    private _snackBar: MatSnackBar, 

    //private _authenticationService:AuthenticationService, 
    //private alertService: MessageService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
     const id=1;
     const username="test";
     const password="test";
     const firstName="Tester";
     const lastName="Testing";
    
     let user:User =new User;
     user.id=id;
     user.username=username;
     user.password=password;
     user.firstName=firstName;
     user.lastName=lastName;

    localStorage.setItem("currentUser",JSON.stringify(user));

    this.initializeForm();
   // this._authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['dash-board'] || '/';
  }

  initializeForm() {
    this.logInForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
  get f() { return this.logInForm.controls; }

  logIn() {

    // stop here if form is invalid
        if (this.logInForm.invalid) {
            return;
        }

        this.loading = true;
        
      this.router.navigate(['dash-board']);
      this._snackBar.open('Log in Successfully!', '', {
        duration: 2000,
      });
}

  get getUsername() {
    return this.logInForm.get('username');
  }

  get password() {
    return this.logInForm.get('password');
  }

}
