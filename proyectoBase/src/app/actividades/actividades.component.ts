import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actividades',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actividades.component.html',
  styleUrl: './actividades.component.css'
})

export class ActividadesComponent {
  titulo : string = "Operaciones"
  valor1 = 0;
  valor2 = 0;
  res = 0;

  sum():void{
    this.res = this.valor1 + this.valor2;
  }
}
