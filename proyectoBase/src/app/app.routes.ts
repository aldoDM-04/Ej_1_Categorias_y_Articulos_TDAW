import { ActividadesComponent } from './actividades/actividades.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ConversionesComponent } from './conversiones/conversiones.component';
import { CategoriasformComponent } from './categoriasform/categoriasform.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticulosformComponent } from './articulosform/articulosform.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'actividades', component: ActividadesComponent },
    { path: 'categorias', component: CategoriasComponent },
    { path: 'articulos', component: ArticulosComponent },
    { path: 'conversiones', component: ConversionesComponent },
    { path: 'categoriasForm', component: CategoriasformComponent },
    { path: 'categoriasForm/:id', component: CategoriasformComponent },
    { path: 'articulosForm', component: ArticulosformComponent },
    { path: 'articulosForm/:id', component: ArticulosformComponent }
];
