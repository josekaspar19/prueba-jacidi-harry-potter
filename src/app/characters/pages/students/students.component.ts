import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent implements OnInit {

  characters: Character[] = [];
  
  constructor( private CharactersService: CharactersService) { }

  ngOnInit(): void {
    this.CharactersService.getStudents()
    .subscribe( characters => this.characters = characters );
    // .subscribe( console.log );
  }

}
