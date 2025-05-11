import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  termoBusca = '';
  resultados: any[] = [];
  loading = false;

  constructor(private newsService: NewsService) {}

  buscarNoticias() {
    if (!this.termoBusca || this.termoBusca.trim().length < 3) {
      this.resultados = [];
      return;
    }

    this.loading = true;
    this.newsService.buscarNoticias(this.termoBusca).subscribe({
      next: (res) => {
        this.resultados = res.articles;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao buscar notícias:', err);
        this.loading = false;
      }
    });
  }
}
