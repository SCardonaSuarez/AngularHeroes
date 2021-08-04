import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] =[];
  heroeSeleccionado: Heroe | undefined;



  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
  }


  //196
  buscando(){
    this.heroesService.getSubgerencias(this.termino.trim())
      .subscribe(heroes => this.heroes = heroes)

  }

  //196
  opcionSeleccionada(event: MatAutocompleteSelectedEvent){

    if(!event.option.value){

      this.heroeSeleccionado = undefined
      return
    }
    

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero

    this.heroesService.getHeroePorId(heroe.id!)
      .subscribe(heroe=> this.heroeSeleccionado = heroe)

    
    
  }

}


/* 
  !Notas
  196. este metodo sirve para autocompletar la busqueda
        -http://localhost:3000/heroes?q=a&_limit=6 para buscar los 6 primeros S.H

      - opcionSeleccionada para ver el super heroes seleccionado

*/
