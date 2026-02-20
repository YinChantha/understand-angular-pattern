import { Component } from '@angular/core';
import { LifeCycle } from './life-cycle/life-cycle';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [LifeCycle, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  inputText = 'Angular';
  isDestroyed : boolean = true;

  onSubmit(input: HTMLInputElement) {
    this.inputText = input.value;
  }

  onDestroy() {
    this.isDestroyed = false;
  }
}
