import { Component } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /**
   * Animations are just typescript codes with some features.
   * 
   * `trigger`: Each animation has a `tirgger()`. With this, we can tell 
   * angular to trigger an animaion with an special name.
   * 
   * `state`: We transition between two situations with `state()`.
   * 
   * `style`: In this method, we can bind css styles of state.
   */
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        'transform': 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      }))
    ])
  ]
})
export class AppComponent {
  /**
   * This is a condition to control the animation.  
   */ 
  state: string = 'normal';

  list = ['Milk', 'Sugar', 'Bread'];

  onAnimate() {
    this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  }

  onAdd(item) {
    this.list.push(item);
  }
}
