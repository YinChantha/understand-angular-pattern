import { Component, signal } from '@angular/core';
// import { TemplateDrivenForm } from './form/template-driven-form/template-driven-form/template-driven-form';
import { ReactiveForm } from './form/reactive-form/reactive-form/reactive-form';

@Component({
  selector: 'app-root',
  imports: [  
    // TemplateDrivenForm,
    ReactiveForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('agl-form');
}
