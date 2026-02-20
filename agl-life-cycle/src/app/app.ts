import { Component, signal } from '@angular/core';
import { LifeCycle } from './life-cycle/life-cycle';

@Component({
  selector: 'app-root',
  imports: [LifeCycle],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  inputText = 'Angular';

  onSubmit(input: HTMLInputElement) {
    this.inputText = input.value;
  }
}
