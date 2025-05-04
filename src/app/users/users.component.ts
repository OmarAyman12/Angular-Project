import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
  signal,
} from '@angular/core';
import { DUMMY_USERS, User } from '../../assets/users/dummy-users';




const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UserComponent {
  @Input({required:true}) user!:User;
  @Output() select=new EventEmitter<string>();
  @Input({required:true}) selected!:boolean;
  
  onSelectUser() {
    this.select.emit(this.user.id);
  }
  imagePath = computed(() => {
    return 'assets/usersImages/' + this.user.avatar;
  });
}
