import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";



@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  // necesito importar el CommonModule para poder usar las directivas de ngIf ngFor... las cuales son necesarias en este modulo, los usamos para mostrar de forma condicional otone sy algunas sentencias
  imports: [
    CommonModule,
  ]
})


export class HeroesModule {}
