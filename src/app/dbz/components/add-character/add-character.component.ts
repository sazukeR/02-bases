import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {


  // con el output vuelvo esta propiedad un evento que puede ser usado por otra propiedad, como si fuera un (click)
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character = {
    name: "",
    power: 0
  }


  emitCharacter(): void {

    if (this.character.name.length === 0) return;

    console.log(this.character , "list")

    this.onNewCharacter.emit(this.character)

  }

}
