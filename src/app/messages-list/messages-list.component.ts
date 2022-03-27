import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { looseIdentical } from 'src/utils';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css'],
})
export class MessagesListComponent implements OnInit {
  @Input() messages: Message[] = [];
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
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
