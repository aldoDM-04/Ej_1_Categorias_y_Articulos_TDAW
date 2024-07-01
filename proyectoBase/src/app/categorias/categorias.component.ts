import { response } from 'express';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { CommonModule, NgFor } from '@angular/common';
import Swal from 'sweetalert2';
import { CategoriaService } from '../service/categoria.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [NgFor, CommonModule, RouterLink],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  titulo: string='Listado de Categorias';

  listaDeCategorias: Categoria[] = [];

  constructor (private categoriaService: CategoriaService){}
  httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.categoriaService
    .mostrarCategorias()
    .subscribe(
      (lasCategorias) => (this.listaDeCategorias = lasCategorias)
    );
  }

  /* [
    {
      idCategoria: 1,
      nombreCategoria: 'Deportes',
      descripcionCategoria: 'Articulos deportivos'
    },
    {
      idCategoria: 2,
      nombreCategoria: 'Deportes',
      descripcionCategoria: 'Articulos deportivos'
    },
    {
      idCategoria: 3,
      nombreCategoria: 'Deportes',
      descripcionCategoria: 'Articulos deportivos'
    },
    {
      idCategoria: 4,
      nombreCategoria: 'Deportes',
      descripcionCategoria: 'Articulos deportivos'
    }
  ]; */

  delete(categoria: Categoria): void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoriaService.eliminarCategoria(categoria.idCategoria)
        .subscribe((response) => 
          this.categoriaService
            .mostrarCategorias()
            .subscribe(
              (lasCategorias) => (this.listaDeCategorias=lasCategorias)
            )
        );
        

        swalWithBootstrapButtons.fire({
          title: "Eliminado!",
          text: `El registro: ${categoria.nombreCategoria} se eliminó correctamente.`,
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelado",
          text: "El registro está seguro",
          icon: "error"
        });
      }
    });
  }


  update(): void{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
}
