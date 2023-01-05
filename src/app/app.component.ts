import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'todo-angular-app';
  todo: string = "";
  todoList: Array<string> = new Array();


  addTodo() {
    this.todoList.push(this.todo);
    this.todo = "";
  }
}
