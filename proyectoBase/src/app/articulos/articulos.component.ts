import { CommonModule, NgFor } from '@angular/common';
import { response } from 'express';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Articulo } from '../model/Articulo';
import Swal from 'sweetalert2';
import { ArticuloService } from '../service/articulo.service';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [NgFor, CommonModule, RouterLink],
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.css'
})
export class ArticulosComponent {
  titulo: string='Listado de Articulos';

  listaDeArticulos: Articulo[] = [];

  constructor (private articuloService: ArticuloService){}
  httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.articuloService
    .mostrarArticulos()
    .subscribe(
      (lasArticulos) => (this.listaDeArticulos = lasArticulos)
    );
  }

  /* [
    {
      idArticulo: 1,
      nombreArticulo: 'Deportes',
      descripcionArticulo: 'Articulos deportivos'
    },
    {
      idArticulo: 4,
      nombreArticulo: 'Deportes',
      descripcionArticulo: 'Articulos deportivos'
    }
  ]; */

  delete(articulo: Articulo): void{
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
        this.articuloService.eliminarArticulo(articulo.idArticulo)
        .subscribe((response) => 
          this.articuloService
            .mostrarArticulos()
            .subscribe(
              (lasArticulos) => (this.listaDeArticulos=lasArticulos)
            )
        );
        

        swalWithBootstrapButtons.fire({
          title: "Eliminado!",
          text: `El registro: ${articulo.nombreArticulo} se eliminó correctamente.`,
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
