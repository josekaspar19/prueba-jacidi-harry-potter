import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styles: [
  ]
})
export class StaffComponent implements OnInit {

  characters: Character[] = [];
  
  constructor( private CharactersService: CharactersService) { }

  ngOnInit(): void {
    this.CharactersService.getStaffs()
    .subscribe( characters => this.characters = characters );
    // .subscribe( console.log );
  }

}
