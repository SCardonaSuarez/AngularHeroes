import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes():Observable<Heroe[]>{  //182
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`)
  }

  getHeroePorId(id:string):Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`)
    
  }




}


/* 
  !Comentarios

  182.  Aca importamos [Observable] de rxjs para tipar o saber de donde viene, tambien tipamos el get ya que por defecto va hacer un Object que es igual a un any.
  

*/
