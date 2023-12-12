import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <p>Counter: {{ counter }}</p>
  <button (click)="incrementOrDecrement(-1)">-1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="incrementOrDecrement(+1)">+1</button>
  `
})

export class CounterComponent {

  public counter: number = 10;

  incrementOrDecrement(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }



  constructor() {






   }


}
