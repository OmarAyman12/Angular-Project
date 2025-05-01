import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
=======
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './users/users.component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
>>>>>>> omar
})
export class AppComponent {
  title = 'first-angular-app';
}
