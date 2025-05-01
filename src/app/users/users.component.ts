import { Component , signal} from '@angular/core';
import { DUMMY_USERS, User } from '../../assets/users/dummy-users';


const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UserComponent {
  selectedUser = signal<User>(DUMMY_USERS[randomIndex]);
  get imagePath() {
    return 'assets/usersImages/' + this.selectedUser().avatar;
  }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
