import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter-component";



@NgModule({
  declarations: [
    CounterComponent
  ],
  // con el export declaramos que estos componentes pueden ser usado por modulos exteriores
  exports: [
    CounterComponent
  ]
})





export class CounterModule {}
