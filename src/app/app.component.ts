import { Task } from './models/task.model';
import { ApplicationRef, Component, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosService } from './services/todos.service';
import { Message } from './models/message.model';
import { MessagesService } from './services/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodosService],
})
export class AppComponent {
  public tasks$!: Observable<Task[]>;
  public messages$!: Observable<Message[]>;
  /**
   *
   */
  constructor(
    appRef: ApplicationRef,
    private todoService: TodosService,
    private messagesService: MessagesService
  ) {
    const originalTick = appRef.tick;
    appRef.tick = function () {
      const returnedValue = originalTick.apply(this);
      console.log('tick');
      return returnedValue;
    };
  }

  ngOnInit(): void {
    this.tasks$ = this.todoService.tasks$;
    this.messages$ = this.messagesService.messages$;
  }
  // ng on change prev value and new value

  changeAll(): void {
    this.todoService.modify();
    // this.tasks$.forEach((task: Task) => (task.title = `title ${task.id}`));
    // this.tasks$ = this.tasks$..map((task: Task) => ({
    //   ...task,
    //   title: `title ${task.id}`,
    // }));
    // console.log('compare', this.tasks === this.tasks);
  }
}
