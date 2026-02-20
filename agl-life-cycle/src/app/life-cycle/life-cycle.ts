import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.scss',
})
export class LifeCycle implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() name: string = 'Angular';

  constructor() {
    // 1️⃣ Constructor runs FIRST
    // Used mainly for dependency injection (services)
    // ❌ Not for API calls or DOM logic

    // mostly this calling like services, api calls, or any initialization logic that you want to execute when the component or html is created.
    // this call before html is rendered
    console.log('Constructor: Component instance is being called');
  }

  ngOnChanges() {
    // 2️⃣ Runs when @Input() value changes
    // Runs BEFORE ngOnInit (on first load)
    // Runs again when parent changes input

    // this call when the input value is changed, and this call before html is rendered
    console.log('OnChanges: Input value has been changed');
  }

  ngOnInit() {
    // 3️⃣ Runs ONCE after first ngOnChanges
    // Component is initialized
    // ✅ Good place for API calls
    // this call after the html is rendered, and this call only one time when the component is created.
    console.log('OnInit: Component has been initialized');
  }

  ngDoCheck() {
        // 4️⃣ Runs VERY FREQUENTLY
    // Runs on every change detection cycle
    // Used for custom change detection

    // this call when the input value is changed, and this call after html is rendered
    console.log('DoCheck: Change detection has been run');
  }

  ngAfterContentInit() {
    // 5️⃣ Runs ONCE after content (ng-content) is projected
    // Used for content initialization
    // Good place for logic that depends on projected content
    // this call after the html is rendered, and this call only one time when the content is projected
    console.log('AfterContentInit: Content has been projected');
  }

  ngAfterContentChecked() {
    // 6️⃣ Runs after every check of projected content
    // Used for reacting to content changes
    // Good place for logic that depends on projected content changes (to respond to changes in <ng-content>)
    // this call when the input value is changed, and this call after html is rendered
    console.log('AfterContentChecked: Projected content has been checked');
  }

  ngAfterViewInit() {
    // 7️⃣ Runs ONCE after component's view (and child views) are initialized
    // Used for view initialization
    // Good place for logic that depends on the view being fully initialized
    // Good place to access view elements via @ViewChild or perform DOM manipulations
    // this call after the html is rendered, and this call only one time when the component's view is initialized
    console.log('AfterViewInit: Component view has been initialized');
  }

  ngAfterViewChecked() {
    // 8️⃣ Runs after every check of component's view (and child views)
    // Used for reacting to view changes
    // Good place for logic that depends on the view being updated (to respond to changes in the view)
    // this call when the input value is changed, and this call after html is rendered
    console.log('AfterViewChecked: Component view has been checked');
  }
  
  ngOnDestroy() {
    // 9️⃣ Runs just before the component is destroyed
    // Used for cleanup (e.g., unsubscribing from observables, clearing timers)
    // this call when the component is destroyed, and this call before the component is removed from the html
    console.log('OnDestroy: Component is about to be destroyed');
  }
}
