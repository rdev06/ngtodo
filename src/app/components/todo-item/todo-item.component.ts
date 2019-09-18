import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() updateTodo: EventEmitter<Todo> = new EventEmitter();
  edit: Todo;

  constructor(private todoService: TodoService) {}
  ngOnInit() {}
  // set Dynamic classes
  setClasses() {
    const classes = {
      'is-complete': this.todo.completed
    };
    return classes;
  }
  onToggle(todo) {
    todo.completed = !todo.completed;
    // tslint:disable-next-line: no-shadowed-variable
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }
  onEdit(todo) {
    this.edit = todo;
  }
  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
  update() {
    this.updateTodo.emit(this.edit);
    this.edit = undefined;
  }

}
