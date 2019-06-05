import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

//Componentes
import { HomeComponent } from './components/home.component';
import { ProductosListComponent } from './components/productos-list.component';
import { ErrorComponent } from './components/error.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'productos', component: ProductosListComponent},
    {path: '**', component: ErrorComponent} // Errores 404  
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);