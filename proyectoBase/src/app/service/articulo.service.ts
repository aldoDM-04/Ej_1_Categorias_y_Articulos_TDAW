import { Articulo } from './../model/Articulo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TagContentType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})

export class ArticuloService {
  private urlEndPoint: string = 'http://localhost:8080/apiArticulo/articulos';
  private httpHeaders = new HttpHeaders({
    TagContentType: 'application/json',
  });

  constructor(private http: HttpClient) { }

  mostrarArticulos(): Observable<Articulo[]>{
    return this.http
    .get(this.urlEndPoint)
    .pipe(map((response) => response as Articulo[]));
  }

  mostrarArticulo(id : number): Observable<Articulo>{
    return this.http.get<Articulo>(`${this.urlEndPoint}/${id}`);
  }

  eliminarArticulo(id: number): Observable<Articulo>{
    return this.http.delete<Articulo>(`${this.urlEndPoint}/${id}`, {
      headers: this.httpHeaders
    });
  }

  crearArticulo(Articulo: Articulo): Observable<Articulo>{
    return this.http.post<Articulo>(
      this.urlEndPoint, 
      Articulo, 
      {
        headers: this.httpHeaders
      }
    );
  }

  actualizarArticulo(Articulo: Articulo): Observable<Articulo>{
    return this.http.put<Articulo>(
      `${this.urlEndPoint}/${Articulo.idArticulo}`, 
      Articulo, 
      {
        headers: this.httpHeaders
      }
    );
  }

}
