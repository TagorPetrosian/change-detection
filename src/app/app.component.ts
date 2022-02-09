import { Task } from './task.model';
import { ApplicationRef, Component, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodosService],
})
export class AppComponent {
  public tasks$!: Observable<Task[]>;
  /**
   *
   */
  constructor(appRef: ApplicationRef, private todoService: TodosService) {
    const originalTick = appRef.tick;
    appRef.tick = function () {
      const returnedValue = originalTick.apply(this);
      console.log('tick');
      return returnedValue;
    };
  }

  ngOnInit(): void {
    this.tasks$ = this.todoService.tasks$;
    this.todoService.tasks$.subscribe();
  }
  // ng on change prev value and new value

  onClick(): void {
    // this.tasks$.forEach((task: Task) => (task.title = `title ${task.id}`));
    // this.tasks$ = this.tasks$..map((task: Task) => ({
    //   ...task,
    //   title: `title ${task.id}`,
    // }));
    // console.log('compare', this.tasks === this.tasks);
  }
}
