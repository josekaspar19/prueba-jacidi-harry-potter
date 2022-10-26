import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/characters.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient) { }

  getStaffs(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/staff`)
  }

  getCharacters(house:string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/house/${house}`)
  }

  getStudents(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/students`)
  }

}
