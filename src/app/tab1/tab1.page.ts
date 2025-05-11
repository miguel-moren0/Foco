import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  destaque: any = null;     
  articles: any[] = [];     
  page = 1;
  loading = true;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles(event?: any) {
    this.loading = true;

    this.newsService.getTopHeadlines(this.page).subscribe({
      next: (response) => {
        const novosArtigos = response.articles;

        if (this.page === 1 && novosArtigos.length > 0) {
          this.destaque = novosArtigos[0];
          this.articles = novosArtigos.slice(1); // remove o primeiro da lista
        } else {
          this.articles = [...this.articles, ...novosArtigos];
        }

        this.page++;
        this.loading = false;
        if (event) event.target.complete();
      },
      error: (err) => {
        console.error('Erro ao buscar notícias:', err);
        this.loading = false;
        if (event) event.target.complete();
      }
    });
  }

  doRefresh(event: any) {
    this.page = 1;
    this.articles = [];
    this.destaque = null;
    this.loadArticles(event);
  }

  // para abrir os links
  abrirLink(url: string) {
    window.open(url, '_blank');
  }
}
