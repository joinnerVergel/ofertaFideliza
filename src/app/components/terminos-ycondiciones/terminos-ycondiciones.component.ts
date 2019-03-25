import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/services/oferta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminos-ycondiciones',
  templateUrl: './terminos-ycondiciones.component.html',
  styleUrls: ['./terminos-ycondiciones.component.css']
})
export class TerminosYCondicionesComponent implements OnInit {

  claseTexto: string = "";
  terminosCondiciones: string = null;
  constructor(private ofertaService:OfertaService, private router:Router) { }

  ngOnInit() {
    if(!this.ofertaService.isAuthenticated()){
      this.router.navigate(['../error']);
    }else{
      this.terminosCondiciones = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis nulla est. Proin nec neque tincidunt, consectetur mauris quis, scelerisque leo. Fusce tortor ex, cursus in libero vel, elementum placerat mi. Etiam ultricies urna vel tristique convallis. Nam posuere eget enim vel eleifend. Duis in sapien ornare, consequat massa nec, molestie purus. Suspendisse maximus cursus pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec scelerisque massa leo, sed imperdiet felis dignissim non. Aliquam mollis in nulla vel tincidunt. Donec elementum quam quis scelerisque venenatis. Donec placerat tellus vel risus accumsan, ac imperdiet tortor vehicula. Vestibulum interdum eget nibh a accumsan."+
      "Pellentesque enim mi, ultrices a pharetra ut, viverra non enim.Fusce faucibus enim eu orci pellentesque, vitae sagittis purus ultrices.Praesent quis mollis augue, et imperdiet erat.Cras suscipit sit amet ligula eget viverra.Duis ac lacus congue, vestibulum lorem sed, gravida ex.Fusce sit amet ligula a metus aliquet venenatis aliquet ut nisl.Maecenas vitae facilisis lectus, quis tincidunt augue."+
      "Nam nulla urna, bibendum et condimentum ac, blandit sit amet diam.Donec pharetra libero non augue dictum consectetur vitae nec urna.Donec sed erat sed metus luctus ornare ultrices sit amet sem.In convallis condimentum dui, vitae vehicula massa lobortis vel.Integer commodo volutpat enim nec congue.Donec ut dictum augue, vel auctor augue.Proin pulvinar eu nibh eu tincidunt.Praesent id odio pulvinar, dictum justo condimentum, dapibus eros.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ultrices neque eu ante consequat, non mattis eros fringilla.Fusce dolor purus, vestibulum quis sem eget, maximus molestie sem.In hac habitasse platea dictumst.";
      // this.getTerminos();
    }
    
  }

  seguirLeyendo() {
    if (this.claseTexto == "") {
      this.claseTexto = "seguirLeyendo";
    }
  }
  botonVisible() {
    if (this.claseTexto == "") {
      return true;
    }
    else {
      return false;
    }
  }

  getTerminos(){
   this.ofertaService.getTerminos()
   .subscribe(
     respuesta => {
      this.terminosCondiciones=respuesta["Texto"];
     }
     , error => {
       this.router.navigate(['../error']);
     }
   );
  }

}
