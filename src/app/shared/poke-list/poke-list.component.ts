import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {

  private setAllPokemons: any;
  public getAllPokemons: any;

  constructor(private pokeApiService: PokeApiService){}

  ngOnInit():void{
    this.pokeApiService.apiListAllPokemons.subscribe(
      res =>{
        this.setAllPokemons = res.results;
        this.getAllPokemons = res.results;
      }
    );
  }
  public getSearch(value: string){
    const filter = this.setAllPokemons.filter( (res: any ) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }
}
