import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(todo => {
      this.todos = todo;
    });
  }
  addTodo(todo) {
    if (this.todos.length !== 0) {
      let id = this.todos[this.todos.length - 1].id;
      todo.id = ++id;
      this.todos.push(todo);
    } else {
      let id = 1;
      todo.id = ++id;
      this.todos.push(todo);
    }

  }
  deleteTodo(todo: Todo) {
    // tslint:disable-next-line: max-line-length
    this.todoService.onDelete(todo).subscribe(t => t.id ? console.log('Encountered with some error') : this.todos = this.todos.filter(e => e.id !== todo.id));
  }
  updateTodo(todo: Todo) {
    this.todoService.onEdit(todo).subscribe(t => console.log(t));
  }
}
