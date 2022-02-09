import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() list!: Task[];
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      // const cur = JSON.stringify(chng.currentValue);
      // const prev = JSON.stringify(chng.previousValue);
      // this.changeLog.push(
      //   `${propName}: currentValue = ${cur}, previousValue = ${prev}`
      // );
      console.log(
        'identical',
        this.looseIdentical(chng.currentValue, chng.previousValue)
      );
    }
  }

  looseIdentical(a: any, b: any): boolean {
    return (
      a === b ||
      (typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b))
    );
  }
}
