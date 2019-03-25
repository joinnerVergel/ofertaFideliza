import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/services/oferta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-oferta',
  templateUrl: './detalle-oferta.component.html',
  styleUrls: ['./detalle-oferta.component.css']
})
export class DetalleOfertaComponent implements OnInit {

  constructor(private ofertaService: OfertaService, private router:Router) { }

  ngOnInit() {
    if(!this.ofertaService.isAuthenticated()){
      this.router.navigate(['../error']);
    }
  }

}
