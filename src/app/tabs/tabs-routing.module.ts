import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'ruleta',
        loadChildren: () => import('../features/ruleta/ruleta.module').then(m => m.RuletaModule)
      },
      {
        path: 'minijuegos',
        loadChildren: () => import('../features/minijuegos/minijuegos.module').then(m => m.MinijuegosModule)
      },
      {
        path: 'videos',
        loadChildren: () => import('../features/videos/videos.module').then(m => m.VideosModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../features/perfil/perfil.module').then(m => m.PerfilModule)
      },
      {
        path: '',
        redirectTo: 'ruleta',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule {}
