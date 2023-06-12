import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {constructor(private authService: AuthService,private router:Router) { }
ngOnInit() {
  
}

login(admin_Email: string, admin_Password: string): void {
  this.authService.signIn(admin_Email, admin_Password).subscribe(
 response => {
       localStorage.setItem('username', admin_Email);
       const token = response; 
       console.log(token);
       const tokenString = JSON.stringify(token);
       localStorage.setItem('token', tokenString);
       this.router.navigateByUrl('/doctors');
  },
    error => {
      alert("Incorrect Username/Password")
      console.log(error);
    }
  );
}
}