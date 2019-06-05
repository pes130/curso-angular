import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ProductosListComponent } from './components/productos-list.component';
import { ErrorComponent } from './components/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosListComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
