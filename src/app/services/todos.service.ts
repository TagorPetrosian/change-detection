import { Task } from '../task.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private _tasks!: BehaviorSubject<Task[]>;
  public tasks$!: Observable<Task[]>;

  constructor(private http: HttpClient) {
    this._tasks = new BehaviorSubject<Task[]>([]);
    this.tasks$ = this._tasks.asObservable();
    this.getAll();
  }

  getAll(): void {
    this.http
      .get<Task[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe((todos) => {
        this._tasks.next(todos.slice(0, 10));
      });
  }

  remove(task: Task): void {
    const tasks = this._tasks.getValue();
    const deleteIndex = tasks.indexOf(task);
    this._tasks.next([
      ...tasks.slice(0, deleteIndex),
      ...tasks.slice(deleteIndex + 1),
    ]);
  }

  add(task: Task): void {
    const tasks = this._tasks.getValue();
    tasks.push(task);
    this._tasks.next(tasks);
  }

  updateOne(task: Task): void {
    const { id } = task;
    const tasks = this._tasks.getValue();
    tasks.forEach((item) => {
      if (item.id == id) {
        item = task;
      }
    });
  }

  modify(): void {
    const tasks = this._tasks.getValue();
    this._tasks.next(
      tasks.map((task) => ({ ...task, title: `${task.id} - ${task.title}` }))
    );
  }
}
