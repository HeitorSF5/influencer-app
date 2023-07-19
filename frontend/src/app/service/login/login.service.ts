import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Authorization from 'src/interfaces/Authorization';
import Login from 'src/interfaces/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/login`

  constructor(private http: HttpClient) {}

  login(creds: Login): Observable<Error|Authorization> {
    return this.http.post<Error|Authorization>(this.apiUrl, creds)
  }
}
