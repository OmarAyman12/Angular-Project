import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add=new EventEmitter<{title:string; summary:string}>();
  enteredTitle = '';
  enteredSummary = '';
  onSubmit(){
    this.add.emit({
      title: this.enteredTitle,
      summary:this.enteredSummary

    })
  }
  onCancel() {
    this.cancel.emit();
  }
}
