import { ApplicationRef, Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /**
   *
   */
  constructor(appRef: ApplicationRef) {
    const originalTick = appRef.tick;
    appRef.tick = function () {
      const returnedValue = originalTick.apply(this);
      console.log('tick');
      return returnedValue;
    };
  }

  public tasks = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: 'et porro tempora',
      completed: true,
    },
  ];

  // ng on change prev value and new value

  onClick(): void {
    // this.tasks.forEach((task) => (task.title = `title ${task.id}`));
    // this.tasks = this.tasks.map((task) => ({
    //   ...task,
    //   title: `title ${task.id}`,
    // }));
    // console.log('compare', this.tasks === this.tasks);
  }
}
