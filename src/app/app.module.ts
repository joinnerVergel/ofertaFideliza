import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatCheckboxModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import { PlanesComponent } from './components/planes/planes.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './components/error/error.component';
import { DetalleOfertaComponent } from './components/detalle-oferta/detalle-oferta.component';
import { TerminosYCondicionesComponent } from './components/terminos-ycondiciones/terminos-ycondiciones.component';
import { CambioExitosoComponent } from './components/cambio-exitoso/cambio-exitoso.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanesComponent,
    ErrorComponent,
    DetalleOfertaComponent,
    TerminosYCondicionesComponent,
    CambioExitosoComponent
  ],
  imports: [
    HttpClientModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
       {path:"planes/:key/:numberPhone", component:PlanesComponent},
       {path:"detalle", component:DetalleOfertaComponent},
       {path:"terminos", component:TerminosYCondicionesComponent},
       {path:"cambioExitoso", component:CambioExitosoComponent},
       {path:"error", component:ErrorComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
