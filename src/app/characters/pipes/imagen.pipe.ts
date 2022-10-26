import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../interfaces/characters.interface';

@Pipe({
  name: 'imagen',
  // pure: true
})
export class ImagenPipe implements PipeTransform {

  transform(character: Character): string {
    
    if( character.image === '' ) {
      return 'assets/no-image.png'
    } else{
      return `${character.image}`;
    }

  }

}
