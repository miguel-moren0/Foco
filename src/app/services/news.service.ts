import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = ''; //bota a key da api aqui
  private baseUrl = 'https://newsapi.org/v2/everything';

  constructor(private http: HttpClient) {}

  getTopHeadlines(): Observable<any> {
    const params = {
      q: 'brasil',            // busca notícias do "brasil"
      language: 'pt',         //  português
      sortBy: 'publishedAt',  // o mais recentes
      apiKey: this.apiKey
    };

    return this.http.get(this.baseUrl, { params });
  }
}
