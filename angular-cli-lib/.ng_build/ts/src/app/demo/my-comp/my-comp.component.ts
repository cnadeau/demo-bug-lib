import { Component, OnInit } from '@angular/core';
import { MyClass } from 'shared-ts-lib';

@Component({
  selector: 'app-my-comp',
  template: `
    <p>
      my-comp works!
    </p>
  `,
  styles: [`

  `]
})
export class MyCompComponent implements OnInit {
  property: MyClass;
  constructor() { 
    this.property = new MyClass('1');
  }

  ngOnInit() {

  }

}
