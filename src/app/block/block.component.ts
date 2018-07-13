import {ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.sass']
})
export class BlockComponent implements OnInit, DoCheck, OnChanges {
  static valueAll = 0;
  public value: number;
  public checkComponent = false;
  public childValue;
  @Input()
  name: string;

  constructor() {
  }

  ngOnInit() {
    // this.value = BlockComponent.valueAll;
  }

  ngDoCheck() {
    this.value = ++BlockComponent.valueAll;
    console.log(`${this.value} DoCheck ${this.name}`);
  }

  ngOnChanges() {
    // console.log('OnChanges');
    /*this.checkComponent = true;
    setTimeout(() => {
      this.checkComponent = false;
      console.log('work');
    }, 1000);*/
  }

  public increment() {
    this.value = ++BlockComponent.valueAll;
  }

  public child() {
    // this.childValue = {val: 1};
  }
}
