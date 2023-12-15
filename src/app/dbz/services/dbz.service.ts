import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';


// los personajes y metodos estaban en el main.page component, pero realmente no es el mejor lugar para que esten, en su lugar, creamos un servicio que nos permite centralizar la informacion que se pueda necesitar en distintos niveles de la aplicacion

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: "Goku",
      power: 9500
    },
    {
      id: uuid(),
      name: "Krilin",
      power: 1000
    }
  ]
    // agregamos el personaje emitido por el hijo, el cual recibimos en este metodo del padre
    onNewCharacter(character: Character): void {
        const  newCharacter: Character = {id: uuid(), ...character} // anadimos la nueva propiedad id a los personajes que vamos creando

        this.characters.push(newCharacter)
    }

   /*  onDeleteCharacter(index: number): void {
      this.characters.splice(index, 1)
    } */

    onDeleteCharacterById(id: string): void {
      this.characters = this.characters.filter(character => character.id !== id)
    }









  constructor() { }

}
