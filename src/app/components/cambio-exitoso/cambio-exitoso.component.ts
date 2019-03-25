import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfertaService } from 'src/app/services/oferta.service';

@Component({
  selector: 'app-cambio-exitoso',
  templateUrl: './cambio-exitoso.component.html',
  styleUrls: ['./cambio-exitoso.component.css']
})
export class CambioExitosoComponent implements OnInit {

  constructor(private ofertaService:OfertaService, private router:Router) { }

  ngOnInit() {
    if(!this.ofertaService.isAuthenticated()){
      this.router.navigate(['../error']);
    }
  }

}
