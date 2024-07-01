import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Categoria } from '../model/Categoria';
import Swal from 'sweetalert2';
import { CategoriaService } from '../service/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoriasform',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './categoriasform.component.html',
  styleUrl: './categoriasform.component.css'
})
export class CategoriasformComponent implements OnInit {
  titulo : string = "Datos de la Categoria"

  categoria: Categoria = new Categoria();

  constructor(
    private categoriaService : CategoriaService,
    private router : Router,
    private rutaActiva : ActivatedRoute
  ){}

  ngOnInit(): void{
    this.mostrarCategoria();
  }



  mostrarCategoria(): void{
    this.rutaActiva.params.subscribe((parametro) => {
        let id = parametro['id']
        if(id){
          this.categoriaService
          .mostrarCategoria(id)
          .subscribe((laCategoria) => (this.categoria = laCategoria));
        }
      
      });
  }

  registrarCategoria(): void{
    this.categoriaService.crearCategoria(this.categoria)
      .subscribe(
        (lacategoria) => this.router.navigate(['/categorias'])
      );
    Swal.fire('registrado',`Categoría registrada con éxito`,'success');
  }

  updateCategoria(): void{
    this.categoriaService.actualizarCategoria(this.categoria)
      .subscribe(
        (lacategoria) => this.router.navigate(['/categorias'])
      );
    Swal.fire('actualizado',`Categoría actualizada con éxito`,'success');
  }


}
