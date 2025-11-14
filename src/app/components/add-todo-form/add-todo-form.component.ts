import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-add-todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent {
  @Output() addTodo = new EventEmitter<{ text: string; priority: Todo['priority'] }>();
  @Output() filterChange = new EventEmitter<string>();

  inputText: string = '';
  priority: Todo['priority'] = 'média'; // ← Tipo correto
  currentFilter: string = 'todas';

  onAddTodo() {
    if (this.inputText.trim()) {
      this.addTodo.emit({
        text: this.inputText.trim(),
        priority: this.priority
      });
      this.inputText = '';
      this.priority = 'média';
    }
  }

  onFilterChange(filter: string) {
    this.currentFilter = filter;
    this.filterChange.emit(filter);
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onAddTodo();
    }
  }
}