import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.scss',
})
export class LifeCycle {
  @Input() name: string = 'Angular';

  constructor() {
    // mostly this calling like services, api calls, or any initialization logic that you want to execute when the component or html is created.
    // this call before html is rendered 
    console.log('Constructor: Component instance is being called');
  }
}
