import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { CharactersModule } from './characters/characters.module';

const routes: Routes = [
  {
    path: 'characters',
    loadChildren: () => import('./characters/characters.module').then( m => m.CharactersModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: 'login'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
