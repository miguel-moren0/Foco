import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = ''; //cola a key da api aqui
  private baseUrl = 'https://newsapi.org/v2/everything';

  constructor(private http: HttpClient) {}

  getTopHeadlines(page: number = 1): Observable<any> {
    const params = {
      q: 'brasil',
      language: 'pt',
      sortBy: 'publishedAt',
      pageSize: 10,
      page: page,
      apiKey: this.apiKey
    };

    return this.http.get(this.baseUrl, { params });
  }

  buscarNoticias(termo: string): Observable<any> {
    const params = {
      q: termo,
      language: 'pt',
      sortBy: 'publishedAt',
      pageSize: 10,
      apiKey: this.apiKey
    };

    return this.http.get(this.baseUrl, { params });
  }
}
