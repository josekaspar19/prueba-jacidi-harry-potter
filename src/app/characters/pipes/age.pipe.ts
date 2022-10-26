import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import * as moment from 'moment'

@Pipe({
  name: 'age',
  // pure: true
})
export class AgePipe implements PipeTransform {
  age: any;
  transform(character: Character): any {
    if(character.yearOfBirth > 0){
      this.age = moment(new Date()).format('YYYY');
      parseFloat(this.age);
      this.age = this.age - character.yearOfBirth;
      return this.age;
  
    }
   
  }

}

