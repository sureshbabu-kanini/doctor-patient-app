import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';
  showLoginButton: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/),
        ],
      ],
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.showLoginButton = this.loginForm.valid;
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.email?.value;
      const password = this.password?.value;

      if (email && password) {
        this.authService.signIn(email, password).subscribe(
          () => {
            const token = this.authService.getToken();
            console.log('Token:', token);
            this.router.navigateByUrl('/doctors');
          },
          (error: any) => {
            this.errorMessage = 'Incorrect email or password';
            console.log('Error:', error);
          }
        );
      }
    }
  }
}
