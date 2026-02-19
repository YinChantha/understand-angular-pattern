import { Component, signal } from '@angular/core';
import { TemplateDrivenForm } from './form/template-driven-form/template-driven-form/template-driven-form';

@Component({
  selector: 'app-root',
  imports: [TemplateDrivenForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('agl-form');
}
