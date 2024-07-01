import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { ArticuloService } from '../service/articulo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from '../model/Articulo';

@Component({
  selector: 'app-articulosform',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './articulosform.component.html',
  styleUrl: './articulosform.component.css'
})
export class ArticulosformComponent {

  titulo : string = "Datos del Artículo"

  articulo: Articulo = new Articulo();

  constructor(
    private articuloService : ArticuloService,
    private router : Router,
    private rutaActiva : ActivatedRoute
  ){}

  ngOnInit(): void{
    this.mostrarArticulo();
  }


  mostrarArticulo(): void{
    this.rutaActiva.params.subscribe((parametro) => {
        let id = parametro['id']
        if(id){
          this.articuloService
          .mostrarArticulo(id)
          .subscribe((elArticulo) => (this.articulo = elArticulo));
        }
      
      });
  }

  registrarArticulo(): void{
    this.articuloService.crearArticulo(this.articulo)
      .subscribe(
        (elarticulo) => this.router.navigate(['/articulos'])
      );
    Swal.fire('registrado',`Categoría registrada con éxito`,'success');
  }

  updateArticulo(): void{
    this.articuloService.actualizarArticulo(this.articulo)
      .subscribe(
        (elarticulo) => this.router.navigate(['/articulos'])
      );
    Swal.fire('actualizado',`Categoría actualizada con éxito`,'success');
  }


}
