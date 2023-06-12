import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signIn(admin_Email: string, admin_Password: string) {
    const signInData = { admin_Email, admin_Password };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json'
    };

    return this.http
      .post<string>('https://localhost:7132/api/Tokens/Admin', signInData, httpOptions)
      .pipe(
        tap(jwtToken => {
          localStorage.setItem('jwtToken', jwtToken);
        })
      );
  }

  getToken() {
    return localStorage.getItem('jwtToken');
  }
}
