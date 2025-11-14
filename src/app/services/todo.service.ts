import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private storageKey = 'todos';

  getTodos(): Todo[] {
    const saved = localStorage.getItem(this.storageKey);
    return saved ? JSON.parse(saved) : [];
  }

  saveTodos(todos: Todo[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
  }

  addTodo(text: string, priority: Todo['priority']): Todo {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
      priority,
      createdAt: new Date().toISOString()
    };
    return newTodo;
  }

  toggleTodo(todos: Todo[], id: number): Todo[] {
    return todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  deleteTodo(todos: Todo[], id: number): Todo[] {
    return todos.filter(todo => todo.id !== id);
  }

  editTodo(todos: Todo[], id: number, newText: string): Todo[] {
    return todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
  }

  filterTodos(todos: Todo[], filter: string): Todo[] {
    switch (filter) {
      case 'ativas':
        return todos.filter(todo => !todo.completed);
      case 'concluídas':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }

  getStats(todos: Todo[]) {
    return {
      total: todos.length,
      completed: todos.filter(t => t.completed).length,
      active: todos.filter(t => !t.completed).length
    };
  }
}