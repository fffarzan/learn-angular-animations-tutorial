import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /**
   * `void`: Is a reserved state. It use to transition from an unattached 
   * DOM situation (non-state) to an state.
   * 
   * Note: We manage 'from non existance to any state' with this:
   * 'void => *'
   * 
   * Note: Example of animation lifecycle:
   * in `list1` trigger, we have a final state, but we want to have a 
   * transition to the state. We should define this transition step by 
   * step untill it's done (in animate, every style will run serialive).
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
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(200, style({
          'border-radius': '50px'
        })),
        animate(500)
      ]),
    ]),
    trigger('list1', [
      state('in', style({
        'opacity': 1,
        'transform': 'translateX(0)'
      })),
      transition('void => *', [
        style({
          'opacity': 0,
          'transform': 'translateX(-50px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          'transform': 'translateX(50px)',
          'opacity': 0
        }),)
      ])
    ]),
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

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }
}
