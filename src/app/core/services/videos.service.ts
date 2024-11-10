import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private apiUrl = 'https://www.googleapis.com/youtube/v3/search';
  private apiKey = 'AIzaSyCh64EboplKEzaikSy8b4MxOhAoj6YUGKY'; 

  constructor(private http: HttpClient) {}

  getVideos(query: string = 'technology'): Observable<any> {
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('q', query)
      .set('type', 'video')
      .set('key', this.apiKey)
      .set('maxResults', '20');

    return this.http.get<any>(this.apiUrl, { params });
  }
}
