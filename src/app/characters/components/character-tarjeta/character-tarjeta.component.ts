import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-character-tarjeta',
  templateUrl: './character-tarjeta.component.html',
  styles: [`
    mat-card {
      margin-top: 20px;
    }
  `]
})
export class CharacterTarjetaComponent {

  @Input() character!: Character;

}
