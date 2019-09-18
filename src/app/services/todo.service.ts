import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';


const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
};

@Injectable({ providedIn: 'root' })
export class TodoService {
  todoUrl = 'https://jsonplaceholder.typicode.com/todos';
  toLimit = '?_limit=5';

  constructor(private http: HttpClient) {}
  // to get todo
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todoUrl}${this.toLimit}`);
  }
  toggleCompleted(todo: Todo): Observable<any> {
    return this.http.put<Todo[]>(`${this.todoUrl}/${todo.id}`, todo, httpOptions);
  }
  onDelete(todo: Todo): Observable<any> {
    return this.http.delete<Todo[]>(`${this.todoUrl}/${todo.id}`, httpOptions);
  }
  onEdit(todo: Todo): Observable<any> {
    return this.http.put<Todo[]>(`${this.todoUrl}/${todo.id}`, todo, httpOptions);
  }
}
