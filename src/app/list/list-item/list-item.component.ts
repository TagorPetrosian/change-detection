import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent implements OnInit {
  @Input() item = new Task();
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    const { currentValue, previousValue } = changes;
    if (currentValue != previousValue) {
      console.log(`item changed ${currentValue}`, changes);
    }

    console.log('item changes', changes);
  }

  changeMe() {
    this.item.title = "I've been changed";
    console.log(`change clicked ${this.item.id}`);
  }
}
