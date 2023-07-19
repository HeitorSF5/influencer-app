import { Injectable } from '@angular/core';
import Influencer from 'src/interfaces/Influencer';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'; // Async promises
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/influencers`

  constructor(private http: HttpClient) {}

  getAll(): Observable<Influencer[]> {
    return this.http.get<Influencer[]>(this.apiUrl, {})
  }

  delete(id: number): Observable<Object> {
    console.log(`${this.apiUrl}/${id}`)
    return this.http.delete<Object>(`${this.apiUrl}/${id}`, {})
  }
}
