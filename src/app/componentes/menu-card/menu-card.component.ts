import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { 
      const session = sessionStorage.getItem('user');
      if(session==null)
        {
          alert("debes estar logueado");
          this.router.navigate(['/Principal',{muestra:"false"}]);
        }       
    }

 
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
    }
  }
}
