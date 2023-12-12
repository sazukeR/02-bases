import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {



  public heroNames: string[] = ["Spiderman", "Hulk", "Ironman", "Thor", "Wonder woman"]

  public deletedHero?: string // creamos la propiedad aqui para que pueda ser usada en el template


  deleteLastHero(): void {
    this.deletedHero = this.heroNames.pop() // pop ademas de eliminar el utimo elemento de un arreglo, tambien retorna dicho elemento, asi que lo que haremos es guardar ese elemento eliminado en una variable publica dentro de la clase para mostrar el nombre del elemento eliminado
  }
}
