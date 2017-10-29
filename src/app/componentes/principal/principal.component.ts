import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
 muestra:boolean;
  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  constructor(private route: ActivatedRoute,
    private router: Router) { 
      var muestra = sessionStorage.getItem('muestra');
    if(muestra=="false")
    {
      this.muestra=false;
    }
    else
      {this.muestra=true;}

    
   }

  logueado:boolean
  ngOnInit() {
  }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'Estadio':
          this.router.navigate(['/Juegos/Estadio']);
        break;
      case 'ppt':
          this.router.navigate(['/Juegos/ppt']);
        break;
        case 'Anagrama':
        this.router.navigate(['/Juegos/Anagrama']);
      break;
      case 'Juegos':
      this.router.navigate(['/Juegos']);
      break;
    }

  }
}
