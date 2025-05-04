import { Component, Input } from '@angular/core';
import { NewTaskData, TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';




@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input() name?: string;
  @Input({ required: true }) userId!: string;
  addingTask=false;
  onAddingTask(){
    this.addingTask=true;
  }
  tasks = [
    {
      id: 't1',
      title: 'Master Angular',
      userId: 'u1',
      summary: 'Learn all the basic and advanced features of angular',
    },
    {
      id: 't2',
      title: 'Master Angular',
      userId: 'u2',
      summary: 'Learn all the basic and advanced ',
    },
    {
      id: 't3',
      title: 'Master Angular',
      userId: 'u3',
      summary: 'Learn all the basic and advanced features of angular',
    },
    {
      id: 't4',
      title: 'Master Angular',
      userId: 'u4',
      summary: 'Learn all the basic and advanced features of angular',
    },
  ];

  get selectedUserTask() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
  onCompleteTask(id:string){
    this.tasks= this.tasks.filter((task)=> task.id!== id);
  }
  onCancelAddTask(){
    this.addingTask=false;
  }

  onAddTask(taskData:NewTaskData){
    this.tasks.push({
      id:new Date().getTime().toString(),
      title:taskData.title,
      summary:taskData.summary,
      userId:this.userId,
    })
    this.addingTask=false;
  }
}
