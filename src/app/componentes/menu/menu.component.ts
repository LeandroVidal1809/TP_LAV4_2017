import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
session:string;
  constructor(private route: ActivatedRoute,
    private router: Router) { 

      this.session = sessionStorage.getItem('user');
    }

  ngOnInit() {
  }

  signout()
  {
    
    sessionStorage.clear();
    this.router.navigate(['/']);
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
