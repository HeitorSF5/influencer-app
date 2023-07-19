import { Injectable } from '@angular/core';
import Influencer from 'src/interfaces/Influencer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Async promises
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/influencers`

  constructor(private http: HttpClient) {}

  create(influencer: Influencer): Observable<Object> {
    return this.http.post<Object>(this.apiUrl, influencer)
  }
}
