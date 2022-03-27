import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { looseIdentical } from 'src/utils';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
        looseIdentical(chng.currentValue, chng.previousValue)
      );
    }
  }
}
