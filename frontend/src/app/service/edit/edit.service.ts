import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Influencer from 'src/interfaces/Influencer';
import { Observable } from 'rxjs'; // Async promises

@Injectable({
  providedIn: 'root'
})
export class EditService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/influencers/`

  constructor(private http: HttpClient) { }

  edit(influencer: Influencer): Observable<Object> {
    return this.http.put<Object>(`${this.apiUrl}${influencer.id}`, influencer)
  }
}
