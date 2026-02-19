import { Component, signal } from '@angular/core';
import { Home } from './home/home';
import { About } from './about/about';
import { CommonModule } from '@angular/common';
import { NAV_ITEMS, PageKey } from './nav.module';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Home, About],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly navItems = NAV_ITEMS;
  currentPage = signal<PageKey>('home');

  goTo(page: PageKey) {
    this.currentPage.set(page);
  }
}
