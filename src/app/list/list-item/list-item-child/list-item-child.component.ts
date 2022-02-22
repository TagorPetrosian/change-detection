import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/task.model';

@Component({
  selector: 'app-list-item-child',
  templateUrl: './list-item-child.component.html',
  styleUrls: ['./list-item-child.component.css'],
})
export class ListItemChildComponent implements OnInit {
  @Input() item = new Task();
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const { currentValue, previousValue } = changes;
    if (currentValue != previousValue) {
      console.log(`child changes ${currentValue}`, changes);
    }

    console.log('child onChanges has been activated');
  }

  ngOnInit(): void {}
}
