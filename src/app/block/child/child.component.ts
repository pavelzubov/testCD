import {ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {BlockComponent} from '../block.component';

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, DoCheck, OnChanges {
  @Input()
  public chlValue = {
    val: 0
  };

  constructor() {
  }

  ngOnInit() {
    this.chlValue = {
      val: 0
    };
  }

  ngOnChanges() {
    console.log('OnChanges  child');
  }

  ngDoCheck() {
    console.log('DoCheck  child');
  }
}
