import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() list: Task[] = [];
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    // console.log('list changes', changes);
  }
}
