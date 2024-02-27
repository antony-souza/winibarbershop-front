import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatIconModule} from '@angular/material/icon'
import { LoginRegisterComponent } from './login-register/login-register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SidebarComponent,MatIconModule,LoginRegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Barbershop';
}
