import { Component, OnInit } from '@angular/core';
import { MyClass } from 'shared-ts-lib';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {
  property: MyClass;
  constructor() { 
    this.property = new MyClass('1');
  }

  ngOnInit() {

  }

}
