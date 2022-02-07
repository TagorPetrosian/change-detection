import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/task.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  @Input() item = new Task();
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    const { currentValue, previousValue } = changes;
    if (currentValue != previousValue) {
      // console.log(`item changed ${currentValue}`, changes);
    }

    // console.log('item changes', changes);
  }
}