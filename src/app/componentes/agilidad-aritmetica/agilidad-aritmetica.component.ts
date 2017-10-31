import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
   @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  comienza:boolean;
  Tiempo: number;
  repetidor:any;
  Perdio:boolean;
  juegoAritm:JuegoAgilidad;
  private subscription: Subscription;
  ngOnInit() {
  }
  constructor(private route: ActivatedRoute,
    private router: Router) {
      const session = sessionStorage.getItem('user');
      if(session==null)
        {
          alert("debes estar logueado");
          this.router.navigate(['/Principal']);
          sessionStorage.setItem("muestra","false");
        } 
        else
          {
            sessionStorage.setItem("muestra","true");
          }      
    
          this.juegoAritm= new JuegoAgilidad();
          this.juegoAritm.Gano=false;
          this.comienza=false;
          this.Tiempo=10;
          this.juegoAritm.cont=0;
          this.Perdio=false;
        
      
  }
  NuevoJuego() {
    this.juegoAritm.GenerarNuevo();
    this.comienza=true;
     this.repetidor = setInterval(()=>{ 
       this.Tiempo--;
       if(this.Tiempo==0 ) {
         clearInterval(this.repetidor);
         this.verificar();
         this.Perdio=true;
         this.Tiempo=10;
       }
       }, 900);
  }
  verificar()
  {
 
   this.juegoAritm.Resultado();
    this.ocultarVerificar=false;
    
   

   
  }  

}
