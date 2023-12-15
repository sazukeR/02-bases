
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {


  @Input() // al utilizar el decorador input estamos indicando que esta propiedad va a recibir datos del exterior
  public characterList: Character[] = [
    {
      name: "Trunk",
      power: 4000,
    }
  ]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  emitDeletedCharacter(id: string | undefined): void {
    this.onDelete.emit(id)
  }

}
