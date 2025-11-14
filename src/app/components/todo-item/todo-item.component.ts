import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() toggle = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<{ id: number; text: string }>();

  isEditing = false;
  editText = '';

  startEditing() {
    this.isEditing = true;
    this.editText = this.todo.text;
  }

  saveEdit() {
    if (this.editText.trim()) {
      this.edit.emit({
        id: this.todo.id,
        text: this.editText.trim()
      });
      this.isEditing = false;
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.editText = this.todo.text;
  }

  getPriorityClass(priority: string): string {
    const classes: { [key: string]: string } = {
      'alta': 'priority-high',
      'média': 'priority-medium',
      'baixa': 'priority-low'
    };
    return classes[priority] || '';
  }
}