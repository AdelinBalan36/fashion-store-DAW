import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ValidationErrors, ValidatorFn, AbstractControl, PatternValidator } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/user-model.component';
import { MessageService } from '../customer-service/message.service';
import { UserService } from '../customer-service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuiler: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar,
    //private userService: UserService,
   // private alertService: MessageService
    ) {
   
  }

  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        // if control is empty return no error
        return {};
      }
      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);
  
      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? {} : error;
    };
  }



  passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password')?.value; // get password from our password form control
    const confirmPassword: string = control.get('confirmPassword')?.value; // get password from our confirmPassword form control
    // compare is the password math
    if (password !== confirmPassword) {
      // if they don't match, set an error in our confirmPassword form control
      control.get('confirmPassword')?.setErrors({ NoPassswordMatch: true });
    }
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.formBuiler.group({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, 
                                       Validators.minLength(6), 
                                       RegisterComponent.patternValidator(/\d/, { hasNumber: true }),
                                       RegisterComponent.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
                                       RegisterComponent.patternValidator(/[a-z]/, { hasSmallCase: true }),
                                       RegisterComponent.patternValidator(/[^\w\s]/, {hasSpecialCharacters: true,}),
                                      ]),
      confirmPassword: new FormControl(null, [Validators.required]),
    },
    {
      validator: this.passwordMatchValidator
    }
    );
  }

  register() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

     /* this.loading = true;
 
     let user:User=new User();
    user.username=this.registerForm.controls["username"].value;
    user.password=this.registerForm.controls["password"].value;
    user.firstName=this.registerForm.controls["firstName"].value;
    user.lastName=this.registerForm.controls["lastName"].value;


    this.userService.register(user)
        .subscribe(
             (_x) => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['login']);
            },
            
    ); */
    this.router.navigate(['login']);
    this._snackBar.open('Register Successfully!', '', {
      duration: 2000,
    });
  }
}
