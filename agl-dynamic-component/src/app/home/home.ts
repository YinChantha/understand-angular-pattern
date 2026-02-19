import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
features = [
    { icon: '⚡', title: 'Fast', desc: 'Built with Angular 20 standalone components' },
    { icon: '🎯', title: 'Precise', desc: 'Dynamic component switching, no routing overhead' },
    { icon: '🔒', title: 'Solid', desc: 'Type-safe, reactive, and production-ready' },
  ];
}
