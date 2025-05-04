import { Component, EventEmitter, Input, Output } from '@angular/core';


type Task={
  id:string;
  userId:string;
  title:string;
  summary:string;
}
export type NewTaskData={
  title:string;
  summary:string;
}
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!:Task;

  @Output() complete=new EventEmitter<string>();
  
  onCompleteTask(){
    return this.complete.emit(this.task.id);
  }
}
