import { User } from './../../Interfaces/user.interface';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  currentTitle = 'User';
  hide = true;
  fn = new FormControl('', [Validators.required, Validators.min(2)]);
  ln = new FormControl('', [Validators.required, Validators.min(2)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.min(2)]);
  private userSubmit: User = {} as User;
  private apiURL: string = "http://localhost:8080/user";

  constructor(private http: HttpClient) {}

  getErrorMessageFn() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.password.hasError('email') ? 'Name too short' : '';
  }

  getErrorMessageLn() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.password.hasError('email') ? 'Name too short' : '';
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.password.hasError('email') ? 'Password too short' : '';
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log("An error occurred:", error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(`Backend returned code ${error.status}`));
  }

  submitUser() {
    this.userSubmit.firstname = this.fn.value ?? '';
    this.userSubmit.lastname = this.ln.value ?? '';
    this.userSubmit.email = this.email.value ?? '';
    this.userSubmit.password = this.password.value ?? '';
    // console.log(this.userSubmit);
    this.http
      .post<User>(this.apiURL, this.userSubmit)
      .pipe(catchError((error) => this.handleError(error)))
      .subscribe((user) => {
        // console.log(user);
      });
  }
}
