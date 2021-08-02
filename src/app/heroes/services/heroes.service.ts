import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  getHeroes():Observable<Heroe[]>{  //182
    return this.http.get<Heroe[]>('http://localhost:3000/heroes')
  }




}


/* 
  !Comentarios

  182.  Aca importamos [Observable] de rxjs para tipar o saber de donde viene, tambien tipamos el get ya que por defecto va hacer un Object que es igual a un any.
  

*/
