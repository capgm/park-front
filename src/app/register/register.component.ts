import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor() { }

  register() {
    // Aqui você implementaria a lógica para registrar o usuário
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
