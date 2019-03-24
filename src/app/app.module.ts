import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {MatToolbarModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import { PlanesComponent } from './components/planes/planes.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './components/error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanesComponent,
    ErrorComponent
  ],
  imports: [
    HttpClientModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
       {path:"planes/:key/:numberPhone", component:PlanesComponent},
       {path:"error", component:ErrorComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
