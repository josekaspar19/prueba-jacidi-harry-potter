import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StaffComponent } from './pages/staff/staff.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { StudentsComponent } from './pages/students/students.component';




const rutas: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'staff',
        component: StaffComponent,
      },
      {
        path: 'characters',
        component: CharactersComponent,
      },
      {
        path: 'students',
        component: StudentsComponent,
      },
      {
        path: '**',
        redirectTo: 'staff',
      }
    ]
  }
  
];

@NgModule({
  imports: [
    RouterModule.forChild ( rutas )
  ],
  exports: [
    RouterModule,

  ]
})
export class CharactersRoutingModule { }
