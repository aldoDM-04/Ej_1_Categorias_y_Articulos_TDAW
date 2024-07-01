import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversiones',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './conversiones.component.html',
  styleUrl: './conversiones.component.css'
})
export class ConversionesComponent {
  titulo : string = "Conversiones de Temperatura"
  celsius = 0;
  fahrenheit = 0;
  resF = 0;
  resC = 0;

  convertirCelAFar() : void{
    this.resF = (9*this.celsius/5)+32;
  }

  convertirFarACel() : void{
    this.resC = (5*(this.fahrenheit -32))/9;
  }
}
