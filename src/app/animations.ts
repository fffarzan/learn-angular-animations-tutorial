import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

export const divState = trigger('divState', [
  state('normal', style({
    'background-color': 'red',
    'transform': 'translateX(0)'
  })),
  state('highlighted', style({
    'background-color': 'blue',
    'transform': 'translateX(100px)'
  })),
  transition('normal => highlighted', animate(300)),
  transition('highlighted => normal', animate(300))
])

export const wildState = trigger('wildState', [
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
]);

export const list1 = trigger('list1', [
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
    }))
  ])
]);

export const list2 = trigger('list2', [
  state('in', style({
    'opacity': 1,
    'transform': 'translateX(0)'
  })),
  transition('void => *', [
    animate(1000, keyframes([
      style({
        'transform': 'translateX(-100px)',
        'opacity': 0,
        'offset': 0
      }),
      style({
        'transform': 'translateX(-50px)',
        'opacity': 0.5,
        'offset': 0.3
      }),
      style({
        'transform': 'translateX(-20px)',
        'opacity': 1,
        'offset': 0.8
      }),
      style({
        'transform': 'translateX(0)',
        'offset': 1
      })
    ]))
  ]),
  transition('* => void', [
    group([
      animate(300, style({
        'color': 'red'
      })),
      animate(700, style({
        'transform': 'translateX(50px)',
        'opacity': 0
      }))
    ])
  ])
]);