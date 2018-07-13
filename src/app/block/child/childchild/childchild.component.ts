import {ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-childchild',
  templateUrl: './childchild.component.html',
  styleUrls: ['./childchild.component.css']
})
export class ChildchildComponent implements OnInit, DoCheck, OnChanges {
  @Input()
  public chlValue = {
    val: null
  };

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('OnChanges  childChild');
  }

  ngDoCheck() {
    console.log('DoCheck  childChild');
  }
}
