import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private _messages = new BehaviorSubject<Message[]>([]);
  public messages$: Observable<Message[]>;
  constructor() {
    const messages = this.generateMessages(1000);
    this._messages.next(messages);
    this.messages$ = this._messages;
  }

  generateMessages(count: number): Message[] {
    const messages: Message[] = [];

    for (let i = 0; i < count; i++) {
      messages.push(new Message(i + 1, `message number: ${i + 1}`));
    }
    return messages;
  }
}
