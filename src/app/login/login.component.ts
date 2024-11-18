import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { MaterialmodModule } from '../materialmod/materialmod.module';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    // MatButtonModule,
    // MatCard,
    // MatCardModule,
    // MatIconModule,
    // MatFormFieldModule,
    // MatInputModule,
    // FormsModule,
    // ReactiveFormsModule,
    // CdkDrag,
    MaterialmodModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(7),
    Validators.pattern(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/
    ),
  ]);

  loginForm: FormGroup = new FormGroup({
    email: this.email,
    password: this.password,
  });

  emailErrorMessage = ''; // Error message for email
  passwordErrorMessage = ''; // Error message for password
  hide = true; // Control visibility of the password field

  constructor() {
    merge(
      this.email.statusChanges,
      this.email.valueChanges,
      this.password.statusChanges,
      this.password.valueChanges
    )
      .pipe(takeUntilDestroyed()) // Unsubscribe on component destruction
      .subscribe(() => {
        this.updateEmailErrorMessage(); // Check email validation and update error message
        this.updatePasswordErrorMessage(); // Check password validation and update error message
      });
  }

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }
  updateEmailErrorMessage() {
    if (this.email.hasError('required')) {
      this.emailErrorMessage = 'Email is required';
    } else if (this.email.hasError('email')) {
      this.emailErrorMessage = 'Invalid email format';
    } else {
      this.emailErrorMessage = ''; // No error
    }
  }

  onsubmittingForm() {
    if (this.loginForm.valid) {
      console.log('Form submitted!', this.loginForm.value);
    } else {
      console.log('Form is invalid!');
    }
  }

  // Method to update the error message for the password field
  updatePasswordErrorMessage() {
    if (this.password.hasError('required')) {
      this.passwordErrorMessage = 'Password is required';
    } else if (this.password.hasError('minlength')) {
      this.passwordErrorMessage = 'Password must be at least 7 characters';
    } else if (this.password.hasError('pattern')) {
      this.passwordErrorMessage =
        'Password must contain at least one letter and one number and one special character ';
    } else {
      this.passwordErrorMessage = ''; // No error
    }
  }
}
