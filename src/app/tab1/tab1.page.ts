import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  articles: any[] = [];
  loading = true;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loading = true;

    this.newsService.getTopHeadlines().subscribe({
      next: (response) => {
        console.log('Resposta da API:', response);
        this.articles = response.articles;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao buscar notícias:', err);
        this.loading = false;
      }
    });
  }
}
