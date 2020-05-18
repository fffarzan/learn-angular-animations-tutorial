import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /**
   * Note: transition('normal <=> highlighted', animate(300)):
   * Is the other way of using transition.
   * 
   * Note: transition('shrunken <=> *', animate(400)) :
   * It means 'from any state to shruken' or 'from shrunken to any state'.
   */
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        'transform': 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        'transform': 'translateX(100px)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(300)),
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        'transform': 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        'transform': 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        'transform': 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(500)),
      transition('shrunken <=> *', animate(600)),
    ])
  ]
})
export class AppComponent {
  state: string = 'normal';
  wildState: string = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAnimate() {
    this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.wildState === 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken';
  }

  onAdd(item) {
    this.list.push(item);
  }
}
