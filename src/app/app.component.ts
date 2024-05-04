import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'park-front';


  isAuthenticated(): boolean {
    return !!localStorage.getItem('token'); // Retorna true se o token estiver presente
  }
}
