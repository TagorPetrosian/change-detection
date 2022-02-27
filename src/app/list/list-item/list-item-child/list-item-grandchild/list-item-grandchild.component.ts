import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-list-item-grandchild',
  templateUrl: './list-item-grandchild.component.html',
  styleUrls: ['./list-item-grandchild.component.css'],
})
export class ListItemGrandchildComponent implements OnInit {
  @Input() item = new Task();
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    const { currentValue, previousValue } = changes;
    if (currentValue != previousValue) {
      console.log(`grandChild changes ${currentValue}`, changes);
    }

    console.log('grand-child onChanges has been activated');
  }

  changeMe() {
    this.item.title = "I've been changed";
    console.log(`change clicked ${this.item.id}`);
  }
}
