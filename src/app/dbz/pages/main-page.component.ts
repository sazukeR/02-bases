import { Component } from '@angular/core';
//import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
/*
  public characters: Character[] = [
    {
      name: "Goku",
      power: 9500
    },
    {
      name: "Krilin",
      power: 1000
    }
  ]
  // agregamos el personaje emitido por el hijo, el cual recibimos en este metodo del padre
  onNewCharacter(character: Character): void {
      this.characters.push(character)
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1)
  }

  */

  constructor(public dbzService: DbzService) {}

}
