import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.sass']
})
export class TodoInputComponent implements OnInit {
  todo?: string;
 
  @Output() sendTodo = new EventEmitter();


  constructor() { }
  ngOnInit(): void {}

  addTodo() {
    this.sendTodo.emit(this.todo);
    this.todo = "";
  }

}
