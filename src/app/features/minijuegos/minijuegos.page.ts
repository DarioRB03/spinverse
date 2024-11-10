import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minijuegos',
  templateUrl: './minijuegos.page.html',
  styleUrls: ['./minijuegos.page.scss']
})
export class MinijuegosPage {
  minijuegos = [
    { nombre: 'Juego de Clics', icono: 'hand-left', descripcion: 'Haz clic lo más rápido posible.', ruta: 'juego-clics' },
    { nombre: 'Quiz', icono: 'help-circle', descripcion: 'Responde preguntas de conocimiento general.', ruta: 'quiz' },
    { nombre: 'Matemáticas Rápidas', icono: 'calculator', descripcion: 'Resuelve problemas matemáticos rápidamente.', ruta: 'math' },
    { nombre: 'Juego de Memoria', icono: 'albums', descripcion: 'Recuerda la secuencia de colores.', ruta: 'memory' },
    { nombre: 'Juego de Reflejos', icono: 'flash', descripcion: 'Pon a prueba tus reflejos tocando el objetivo.', ruta: 'tap' }
  ];

  constructor(private router: Router) {}

  openMinijuego(minijuego: any) {
    this.router.navigate([`/tabs/minijuegos/${minijuego.ruta}`]);
  }
}
