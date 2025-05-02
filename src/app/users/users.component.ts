import { Component, computed, EventEmitter, input, Input, Output, signal } from '@angular/core';
import { DUMMY_USERS, User } from '../../assets/users/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UserComponent {
@Input({required:true}) id! :string;
 avatar= input.required<string>();
 name= input.required<string>(); 
 @Output() select= new EventEmitter();
  onSelectUser() {
    this.select.emit(this.id);
    
  }
}
