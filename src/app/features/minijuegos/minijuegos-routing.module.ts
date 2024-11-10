import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinijuegosPage } from './minijuegos.page';

const routes: Routes = [
  {
    path: '',
    component: MinijuegosPage,
  },
  {
    path: 'juego-clics',
    loadChildren: () => import('./juego-clics/juego-clics.module').then(m => m.JuegoClicsPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizPageModule)
  },
  {
    path: 'math',
    loadChildren: () => import('./math/math.module').then(m => m.MathPageModule)
  },
  {
    path: 'memory',
    loadChildren: () => import('./memory/memory.module').then(m => m.MemoryPageModule)
  },
  {
    path: 'tap',
    loadChildren: () => import('./tap/tap.module').then(m => m.TapPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinijuegosRoutingModule {}
