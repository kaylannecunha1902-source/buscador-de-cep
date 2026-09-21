import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormCEP } from './features/form-cep/form-cep';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormCEP],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('buscador-de-cep');
}
