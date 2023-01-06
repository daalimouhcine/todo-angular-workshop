import { Component, OnChanges, OnInit } from '@angular/core';
import { Input} from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit, OnChanges {
  @Input() sendTodo?: String;
  todoList: Array<String | undefined> = new Array();

  constructor() {}
  ngOnInit(): void {}

  ngOnChanges() {
    this.todoList.push(this.sendTodo);
  }


}
