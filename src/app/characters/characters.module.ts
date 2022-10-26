import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './pages/staff/staff.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { MaterialModule } from '../material/material.module';
import { CharacterTarjetaComponent } from './components/character-tarjeta/character-tarjeta.component';
import { HomeComponent } from './pages/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImagenPipe } from './pipes/imagen.pipe';
import { AgePipe } from './pipes/age.pipe';
import { CharactersComponent } from './pages/characters/characters.component';
import { StudentsComponent } from './pages/students/students.component';


@NgModule({
  declarations: [
    StaffComponent,
    HomeComponent,
    CharacterTarjetaComponent,
    ImagenPipe,
    AgePipe,
    CharactersComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    FlexLayoutModule,
    MaterialModule

  ]
})
export class CharactersModule { }
