import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { EducationalFooterComponent } from './components/educational-footer/educational-footer.component';
import { Todo } from './models/todo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    StatisticsComponent,
    AddTodoFormComponent,
    TodoListComponent,
    EducationalFooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [];
  filter: string = 'todas';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  get filteredTodos(): Todo[] {
    return this.todoService.filterTodos(this.todos, this.filter);
  }

  get stats() {
    return this.todoService.getStats(this.todos);
  }

  onAddTodo(event: { text: string; priority: Todo['priority'] }) {
    const newTodo = this.todoService.addTodo(event.text, event.priority);
    this.todos = [...this.todos, newTodo];
    this.todoService.saveTodos(this.todos);
  }

  onToggleTodo(id: number) {
    this.todos = this.todoService.toggleTodo(this.todos, id);
    this.todoService.saveTodos(this.todos);
  }

  onDeleteTodo(id: number) {
    this.todos = this.todoService.deleteTodo(this.todos, id);
    this.todoService.saveTodos(this.todos);
  }

  onEditTodo(event: { id: number; text: string }) {
    this.todos = this.todoService.editTodo(this.todos, event.id, event.text);
    this.todoService.saveTodos(this.todos);
  }

  onFilterChange(filter: string) {
    this.filter = filter;
  }
}