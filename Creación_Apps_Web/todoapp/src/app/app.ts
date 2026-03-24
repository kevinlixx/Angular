import el from '@angular/common/locales/extra/el';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todoapp');
  welcomeMessage = 'Welcome to my first Angular project!';
  tasks = [
    'instalar el Angular CLI',
    'ver el curso de Angular en Platzi',
    'ir al gimnasio'
  ]
}
