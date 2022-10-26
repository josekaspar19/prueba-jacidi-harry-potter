import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styles: [
  ]
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];
  
  constructor( private CharactersService: CharactersService) { }

  ngOnInit(): void {
    this.CharactersService.getCharacters('slytherin')
    .subscribe( characters => this.characters = characters );
  }

  filterHouse(value:string){
    this.CharactersService.getCharacters(value)
    .subscribe( characters => this.characters = characters );
  }

}
